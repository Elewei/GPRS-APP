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
ADDRESS = ('0.0.0.0', 12138)  # 绑定地址

""" Simple socket server that listens to one single client. """
def init():
    """ Initialize the server with a host and port to listen to. """
    global g_socket_server
    g_socket_server = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
    g_socket_server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    g_socket_server.bind(ADDRESS)
    g_socket_server.listen(1)
    print('Server Port 12138 is up..')


def message_handle(client_sock):
    client_sock.send(bytes('turn on','UTF-8'))
    while True:
        read_data = client_sock.recv(255)
        # Check if socket has been closed
        if len(read_data) == 0:
            print('{} closed the socket.'.format(client_addr))
            break;
        
        else:
            str = format(read_data.decode('utf-8').rstrip()) + '\n'
            print(str)
            file_name = os.getcwd() + "/data.txt"
            fp_w = open(file_name, 'a+', encoding= u'utf-8',errors='ignore')
            fp_w.write(str)
            fp_w.close()
            time.sleep(2)
            client_sock.send(bytes('turn on','UTF-8'))
    
    client_sock.send(bytes('turn off socket','UTF-8'))
    client_sock.close()
    g_conn_pool.remove(client_sock)
    file_name = os.getcwd() + "/data.txt"
    fp_w = open(file_name, 'a+', encoding= u'utf-8',errors='ignore')
    fp_w.write('quit\n')
    fp_w.close()
    return 0



def accept_client():
    """
    接收新连接
    """
    while True:
        client, _ = g_socket_server.accept()
        print('等待客户端连接')
        # 加入连接池
        g_conn_pool.append(client)
        # 给每个客户端创建一个独立的线程进行管理
        thread = Thread(target=message_handle, args=(client,))
        thread.start()


def start_server():
    init()
    # 新开一个线程，用于接收新连接
    thread = Thread(target=accept_client)
    thread.start()



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
