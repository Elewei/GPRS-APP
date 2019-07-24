import functools
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from sockserv import SocketServer

bp = Blueprint('main', __name__)


@bp.route('/')
def index():

	server = SocketServer()
	server.run_server()
	
    return render_template('index.html')