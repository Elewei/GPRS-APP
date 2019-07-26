import os
import time
import threading
from flask import Flask, g
from socketserver import ThreadingTCPServer
from socketserver import StreamRequestHandler, TCPServer
from . import main

class EchoHandler(StreamRequestHandler):
    def handle(self):
        print('Got connection from', self.client_address)
        
        while True:
            msg = self.request.recv(8192)
            if not msg:
                break
            print(msg)
            data = msg.decode().strip().split(',')
            if 'data' not in g:
                g.data = data



def start_server():
    ThreadingTCPServer.allow_reuse_address = True
    serv = ThreadingTCPServer(('', 12138), EchoHandler)
    serv.serve_forever()


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

    with app.app_context():
        server= threading.Thread(target=start_server)
        server.start()

    app.register_blueprint(main.bp)
    app.add_url_rule('/', endpoint=main.index)

    return app