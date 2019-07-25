import os
import time, threading
from flask import Flask
from . import main
from . import sockserv

def startServer():
    serv = sockserv.TCPServer()
    serv.run_forever()


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

    tcp_server = Process(target=startServer)
    tcp_server.start()

    app.register_blueprint(main.bp)
    
    app.add_url_rule('/', endpoint=main.index)

    return app