virtualenv pyenv
. pyenv/bin/activate
pip install -r requirements.txt
export SECRET_KEY="DibR3IsUqANtD6aBnMz9y+4jHubdOOYmGMsd8m7IEcI="
export RECAPTCHA_PUBLIC_KEY='6Lc0U-MSAAAAAFBFR8WI19Jj5bcVdYXg45kCvW0m'
export RECAPTCHA_PRIVATE_KEY='6Lc0U-MSAAAAANsOXWbMQxQ_SYwgBbnm-JM_mQXB'
export ELASTICSEARCH_HOST='http://192.168.195.144:9200'

#consumer = readlift
# Primary consumer secret: 4c4e8dd4-96e2-4f22-9d95-b4f9c712d70f

#exec python init_custom.py
exec python run.py "$@"
