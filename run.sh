#!/bin/sh
#By Allen

#This script is used for initialization and starting the web app
#Please run bootstrap.py before you run me, *IF* it is the *FIRST* time
#you start annotator.

#help information
usage()
{
   echo " USAGE: $0  [init|start]"
   echo ""
   echo " OPTIONS: "
   echo " init: for initialization when you run annotator first time"
   echo " start: start annotator application"
   exit 1
}

#init some environment variables which are needed by annotator
export SECRET_KEY="DibR3IsUqANtD6aBnMz9y+4jHubdOOYmGMsd8m7IEcI="
export RECAPTCHA_PUBLIC_KEY='6Lc0U-MSAAAAAFBFR8WI19Jj5bcVdYXg45kCvW0m'
export RECAPTCHA_PRIVATE_KEY='6Lc0U-MSAAAAANsOXWbMQxQ_SYwgBbnm-JM_mQXB'
export ELASTICSEARCH_HOST='http://127.0.0.1:9200'
export ELASTICSEARCH_INDEX='annotator'
export AUTH_ON='Ture'
export AUTHZ_ON='Ture'

#alias pip='/opt/python2.7/bin/pip'
#alias easy_install='/opt/python2.7/bin/easy_install'
#alias virtualenv='/opt/python2.7/bin/virtualenv'

#create a new virtual env of Python
if [ $start = 0 ];then
  virtualenv pyenv
fi
#active it and install required dependencies, see setup.py and requirements.txt
if [ -f "./pyenv/bin/activate" ]; then
  . pyenv/bin/activate
else
  echo "Please run 'sh run.sh init' first"
  exit 0
fi

if [ $start = 0 ];then
  pip install -r requirements.txt
  python bootstrap.py
fi
#consumer = readlift
#Primary consumer secret: 4c4e8dd4-96e2-4f22-9d95-b4f9c712d70f

#start web app
python run.py "$@"


