import functools
import os, time, sys
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)


bp = Blueprint('main', __name__)


@bp.route('/')
def index():
    device_data = {
        'id' : 1,
        'device_id' : '07:24:4a:4a:6c:22',
        'location': '38.6518,104.07642',
        'tantou_wendu': '32.5',
        'jiechu_wendu' : '40.2',
        'dianliang': '90'
    }

    #file_name = os.getcwd() + "/data"
    #fp_r = open(file_name, 'r')
    #line_r = fp_r.readline() 
    #if line_r != '':
    #    print(line_r)
    #    fp_r.seek(0,2)

    return render_template('index.html', data = device_data)
