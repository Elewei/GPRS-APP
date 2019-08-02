import os, time, sys
import threading
import select
import socket
import codecs
import queue
from threading import Thread
from multiprocessing import Process
from flask import Flask
from . import main


inputs = []
outputs = []
message_queues = {}


def start_server():
    server = socket.socket()
    server.setblocking(0)
    server_addr = ('0.0.0.0',12138)
    print('starting up on %s port %s' % server_addr)

    try:
        server.bind(server_addr)
    except:
        time.sleep(15)
        try:
            server.bind(server_addr)
        except:
            time.sleep(15)

    server.listen(5)

    while True:
        print("waiting for next event...")

        readable, writeable, exeptional = select.select(inputs,outputs,inputs) 

        for s in readable: 
            data = s.recv(1024)
            if data:
                print("收到来自[%s]的数据:" % s.getpeername()[0], data)
                message_queues[s].put(data) #收到的数据先放到queue里,一会返回给客户端
                if s not  in outputs:
                    outputs.append(s) #为了不影响处理与其它客户端的连接 , 这里不立刻返回数据给客户端


            else:#如果收不到data代表什么呢? 代表客户端断开了呀
                print("客户端断开了",s)

                if s in outputs:
                    outputs.remove(s) #清理已断开的连接

                inputs.remove(s) #清理已断开的连接

                del message_queues[s] ##清理已断开的连接


        for s in writeable:
            try :
                next_msg = message_queues[s].get_nowait()

            except queue.Empty:
                print("client [%s]" %s.getpeername()[0], "queue is empty..")
                outputs.remove(s)

            else:
                print("sending msg to [%s]"%s.getpeername()[0], next_msg)
                s.send(next_msg.upper())


        for s in exeptional:
            print("handling exception for ",s.getpeername())
            inputs.remove(s)
            if s in outputs:
                outputs.remove(s)
            s.close()

            del message_queues[s]



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
