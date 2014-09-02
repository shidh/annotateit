#!/bin/sh
#By Allen
#

#init some environment variables which are needed by annotator
export SECRET_KEY="DibR3IsUqANtD6aBnMz9y+4jHubdOOYmGMsd8m7IEcI="
export RECAPTCHA_PUBLIC_KEY='6Lc0U-MSAAAAAFBFR8WI19Jj5bcVdYXg45kCvW0m'
export RECAPTCHA_PRIVATE_KEY='6Lc0U-MSAAAAANsOXWbMQxQ_SYwgBbnm-JM_mQXB'
export ELASTICSEARCH_HOST='http://127.0.0.1:9200'
export ELASTICSEARCH_INDEX='annotator'
export AUTH_ON='Ture'
export AUTHZ_ON='Ture'

#create a new virtual env of Python
virtualenv pyenv
#active it and install required dependencies, see setup.py and requirements.txt
. pyenv/bin/activate
pip install -r requirements.txt


#consumer = readlift
#Primary consumer secret: 4c4e8dd4-96e2-4f22-9d95-b4f9c712d70f

#start web app
python run.py "$@"



