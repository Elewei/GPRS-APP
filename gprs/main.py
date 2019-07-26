import functools
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)


bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    
    data = session.get("data")
    print(data)
    return render_template('index.html')
