import functools
import socket
import threading

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)


bp = Blueprint('main', __name__)


def init(host = "0.0.0.0", port = 12138):
    tcp_server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    tcp_server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    tcp_server_socket.bind((host, port))
    tcp_server_socket.listen(100)
    return tcp_server_socket

def service_machine(new_socket, client_addr):
    while True:
        receive_data = new_socket.recv(1024).decode("utf-8")
        if receive_data:
            print(receive_data)
            data = receive_data.split(',')
            g.addr = data[1]
            g.longitude = data[3]
            g.latitude = data[4]
            g.tantou = data[5]
            g.jiechu = datap[6]
            g.dianliang = data[7]

        else:
            print('Device {0} Disconnected...'.format(client_addr))
            break

    new_socket.close()


def run_forever(tcp_server_socket):
    while True:
        new_socket, client_addr = tcp_server_socket.accept()
        print("Device {0} Connected".format(client_addr))
        t1 = threading.Thread(target=service_machine, args=(new_socket, client_addr))
        t1.start()





@bp.route('/')
def index():

    tcp_server_socket = init()
    
    tcp_server = threading.Thread(target=run_forever, args=tcp_server_socket)
    tcp_server.start()

    print(g.addr)
    print(g.tantou)
    return render_template('index.html')
