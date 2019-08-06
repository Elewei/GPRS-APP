# GPRS-APP


启动程序
export FLASK_APP=gprs

export FLASK_ENV=development

flask run



waitress-serve --listen=*:80 --call 'gprs:create_app' 


