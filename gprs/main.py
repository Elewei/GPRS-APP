import functools
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)


bp = Blueprint('main', __name__)









@bp.route('/')
def index():
    device_data = {
        'id' : 1,
        'device_id' : '07:24:4a:4a:6c:22',
        'location': '38.6518,104.07642'
    }

    return render_template('index.html', data = device_data)
