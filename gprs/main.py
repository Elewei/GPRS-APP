import functools
import time, threading
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from sockserv import TCPServer


bp = Blueprint('main', __name__)


def startServer():
	serv = TCPServer()
	serv.run_forever()


@bp.route('/')
def index():
	t = threading.Thread(target=startServer, name='startServ')
    return render_template('index.html')