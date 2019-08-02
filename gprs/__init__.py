import os, time, sys
import threading
import select
import socket
import codecs
from threading import Thread
from multiprocessing import Process
from flask import Flask
from . import main

g_conn_pool = []
g_socket_server = None  # 负责监听的socket

class SocketServer:
    """ Simple socket server that listens to one single client. """
    def __init__(self, host = '0.0.0.0', port = 12138):
        """ Initialize the server with a host and port to listen to. """
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.host = host
        self.port = port
        self.sock.bind((host, port))
        self.sock.listen(5)
 
    def close(self):
        """ Close the server socket. """
        print('Closing server socket (host {}, port {})'.format(self.host, self.port))
        if self.sock:
            self.sock.close()
            self.sock = None
 

    def message_handle(client_sock, client_addr):
        print('Client {} connected'.format(client_addr))
        client_sock.send(bytes('turn on','UTF-8'))
        stop = False
        while not stop:
            if client_sock:
                # Check if the client is still connected and if data is available:
                try:
                    rdy_read, rdy_write, sock_err = select.select([client_sock,], [], [])
                except select.error:
                    print('Select() failed on socket with {}'.format(client_addr))
                    return 1
                
                if len(rdy_read) > 0:
                    read_data = client_sock.recv(255)
                    # Check if socket has been closed
                    if len(read_data) == 0:
                        print('{} closed the socket.'.format(client_addr))
                        stop = True
                    else:
                        str = format(read_data.decode('utf-8').rstrip()) + '\n'
                        print(str)
                        file_name = os.getcwd() + "/data.txt"
                        fp_w = open(file_name, 'a+', encoding= u'utf-8',errors='ignore')
                        fp_w.write(str)
                        fp_w.close()
                        time.sleep(2)
                        client_sock.send(bytes('turn on','UTF-8'))


            else:
                print("No client is connected, SocketServer can't receive data")
                stop = True
        
        client_sock.send(bytes('turn on','UTF-8'))
        # Close socket
        print('Closing connection with {}'.format(client_addr))
        client_sock.close()
        g_conn_pool.remove(client_sock)
        file_name = os.getcwd() + "/data.txt"
        fp_w = open(file_name, 'a+', encoding= u'utf-8',errors='ignore')
        fp_w.write('quit\n')
        fp_w.close()
        return 0

    def run_server(self):
        """ Accept and handle an incoming connection. """
        print('Starting socket server (host {}, port {})'.format(self.host, self.port))
 
        client_sock, client_addr = self.sock.accept()
        g_conn_pool.append(client_sock)
        thread = Thread(target=message_handle, args=(client_sock, client_addr))
        thread.setDaemon(True)
        thread.start()



def start_server():
    lst = SocketServer()   # create a listen thread
    lst.run_server() # then start



def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    app.register_blueprint(main.bp)
    app.add_url_rule('/', endpoint=main.index)


    # 新建一个进程，开启TCP 12138
    tcp_server = Process(target=start_server)
    tcp_server.start()

    return app
