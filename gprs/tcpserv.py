# import socket programming library 
import socket 
import os
# import thread module 
from _thread import *
import threading 
import time

device_status = []

#print_lock = threading.Lock() 

# thread fuction 
def threaded(c): 
  global device_status
  while True: 

    # data received from client 
    data = c.recv(1024) 
    if not data: 
      print('Bye') 
      # lock released on exit 
      #print_lock.release() 
      break

    str_data = data.decode().strip()
    if str_data == 'turn-on' or device_status == 1:
      if str_data == 'turn-on':
        device_status = 1
        break
      for i in range(0, 5):
        time.sleep(2)
        c.send(bytes('turn-on\n','UTF-8'))
      if device_status == 1:
        device_status = 0
      print('turn-on the device\n')

    elif str_data == 'turn-off' or  device_status == -1:
      if str_data == 'turn-off':
        device_status = -1
        break
      for i in range(0, 5):
        time.sleep(2)
        c.send(bytes('turn-off\n','UTF-8'))
      if device_status == -1:
        device_status = 0
      print('turn-off the device\n')
    else:
      file_name = os.getcwd() + "/data.txt"
      fp_w = open(file_name, 'a+', encoding= u'utf-8',errors='ignore')
      fp_w.write(str_data)
      fp_w.close()
      print(str_data)

    # send back reversed string to client 
    #c.send(data)

  # connection closed 
  c.close() 


def Main(): 
  host = "0.0.0.0" 

  # reverse a port on your computer 
  # in our case it is 12138 but it 
  # can be anything 
  port = 12138
  s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
  s.bind((host, port)) 
  print("socket binded to port", port) 

  # put the socket into listening mode 
  s.listen(5) 
  print("socket is listening") 

  # a forever loop until client wants to exit 
  while True: 
    # establish connection with client 
    c, addr = s.accept() 

    # lock acquired by client 
    #print_lock.acquire() 
    print('Connected to :', addr[0], ':', addr[1]) 

    # Start a new thread and return its identifier 
    start_new_thread(threaded, (c,)) 

  s.close() 


if __name__ == '__main__': 
  Main() 
