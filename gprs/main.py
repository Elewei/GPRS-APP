import functools
import time, threading
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from . import sockserv


bp = Blueprint('main', __name__)


def startServer():
    serv = sockserv.TCPServer()
    serv.run_forever()


@bp.route('/')
def index():
    t = threading.Thread(target=startServer, name='startServ')
    t.start()
    return render_template('index.html')
