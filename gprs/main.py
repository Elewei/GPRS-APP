import functools
import threading
import os, time, sys
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)


bp = Blueprint('main', __name__)


device_data = {
    'id' : 1,
    'device_id' : '07:24:4a:4a:6c:22',
    'location': '38.6518,104.07642',
    'tantou_wendu': '32.5',
    'jiechu_wendu' : '40.2',
    'dianliang': '90',
    'status': 1
}


def read_data():
    
    file_name = os.getcwd() + "/data.txt"
    with open(file_name, 'r') as f:
        lines = f.readlines()
        last_line = lines[-1] #取最后一行
        print('last line:')
        str_data = last_line.split(',')
        print('Str Data: ')
        print(str_data)

        if str_data[0] is 'quit':
			last_line = lines[-2] #取最后第二行
			str_data = last_line.split(',')
			device_data['id'] = str_data[0]
			device_data['device_id'] = str_data[1]
			device_data['location'] = str_data[3] + '.' + str_data[4]
			device_data['tantou_wendu'] = str_data[-3]
			device_data['jiechu_wendu'] = str_data[-2]
			device_data['dianliang'] = str_data[-1]  
			device_data['status'] = 0
        else:
			device_data['id'] = str_data[0]
			device_data['device_id'] = str_data[1]
			device_data['location'] = str_data[3] + '.' + str_data[4]
			device_data['tantou_wendu'] = str_data[-3]
			device_data['jiechu_wendu'] = str_data[-2]
			device_data['dianliang'] = str_data[-1]
			device_data['status'] = 1

    global timer
    timer = threading.Timer(5, read_data)
    timer.start()


@bp.route('/')
def index():

    timer = threading.Timer(1, read_data)
    timer.start()

    return render_template('index.html', data = device_data)
