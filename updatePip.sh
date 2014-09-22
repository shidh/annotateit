#!/bin/bash
#

. ~/.bashrc

sudo rm -rf /opt/python2.7/bin/easy_install* /opt/python2.7/bin/pip* /opt/python2.7/bin/virtualenv*
ls -l /opt/python2.7/bin/
sleep 2
sudo rm -rf /opt/python2.7/lib/python2.7/site-packages/*
ls -l /opt/python2.7/lib/python2.7/site-packages/
sleep 2
sudo wget https://bitbucket.org/pypa/setuptools/raw/bootstrap/ez_setup.py -O - |sudo python

if [ -z "$1" ];then
	sudo /opt/python2.7/bin/easy_install  pip
else
	sudo /opt/python2.7/bin/easy_install  pip==$1
fi

sudo /opt/python2.7/bin/easy_install  virtualenv
echo""
echo""
echo "####pip version now is: "
pip --version
