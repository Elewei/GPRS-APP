# -*- coding: utf-8 -*-
'''
https://blog.csdn.net/m0_37714245/article/details/81809341
'''

import socket
import threading
from flask import g

class TCPServer(object):
    def __init__(self, host = "47.103.68.81", port = 12138):
        self.tcp_server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.tcp_server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.tcp_server_socket.bind((host, port))
        self.tcp_server_socket.listen(100)

    def run_forever(self):
        while True:
            new_socket, client_addr = self.tcp_server_socket.accept()
            print("Device {0} Connected".format(client_addr))
            t1 = threading.Thread(target=self.service_machine, args=(new_socket, client_addr))
            t1.start()

    def service_machine(self, new_socket, client_addr):
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
