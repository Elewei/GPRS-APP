# -*- coding: utf-8 -*-

import socket
import threading

class TCPServer(object):
    def __init__(self, host = "0.0.0.0", port = 12138):
        """初始化对象"""
        # 创建套接字
        self.tcp_server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        # 解决程序端口占用问题
        self.tcp_server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        # 绑定本地ip地址
        self.tcp_server_socket.bind((host, port))
        # 将套接字变为监听套接字，最大连接数量为100
        self.tcp_server_socket.listen(100)

    def run_forever(self):
        """设备连接"""
        while True:
            # 1.等待设备连接(通过ip地址和端口建立tcp连接)
            #   如果有设备连接，则会生成用于设备和服务器通讯的套接字：new_socket
            #   会获取到设备的ip地址和端口
            new_socket, client_addr = self.tcp_server_socket.accept()
            print("设备{0}已连接".format(client_addr))

            # 2.创建线程处理设备的需求
            t1 = threading.Thread(target=self.service_machine, args=(new_socket, client_addr))
            t1.start()

    def service_machine(self, new_socket, client_addr):
        """业务处理"""
        while True:
            # 3.接收设备发送的数据，单次最大1024字节，按‘gbk’格式解码
            receive_data = new_socket.recv(1024).decode("utf-8")
            # 4.如果设备发送的数据不为空
            if receive_data:
                # 4.1 打印接收的数据，这里可以将设备发送的数据写入到文件中
                # 获取设备的ID信息
                print(receive_data)
                if receive_data[0:6] == "report":
                    response = "SET OK:" + receive_data
                else:
                    receive_data = receive_data[6:].split(",")[0]
                    # 拼接响应数据
                    response = "alarm=" + receive_data + ",Switch:clear"
                print(response)
                # 4.2 返回原数据作为应答，按‘utf-8’格式编码
                new_socket.send(response.encode("utf-8"))
            # 5.当设备断开连接时，会收到空的字节数据，判断设备已断开连接
            else:
                print('设备{0}断开连接...'.format(client_addr))
                break

        # 关闭套接字
        new_socket.close()
