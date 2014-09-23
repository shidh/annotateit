#!/bin/bash
#
#help information
usage()
{
   echo " USAGE: $0  [pip version number]"
   echo ""
   echo " Example: updatePip.sh 1.2.1"
   echo " version can be 1.5.6, 1.2.1 or so on."
   exit 1
}

#Receiving the value of the parameter
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
sudo rm -rf /usr/bin/easy_install
sudo rm -rf /usr/local/bin/pip
sudo rm -rf /usr/local/bin/virtualenv
sudo ln -s /opt/python2.7/bin/easy_install  /usr/bin/easy_install
sudo ln -s /opt/python2.7/bin/pip /usr/local/bin/pip
sudo ln -s /opt/python2.7/bin/virtualenv /usr/local/bin/virtualenv

echo""
echo""
echo "####pip version now is: "
pip --version
