#!/bin/bash

set -e -x

if [ "$USER" <> "root" ]
then
    echo "Error: script must be run as root. (using sudo)"
    exit 1
fi



apt-get update

apt-get install -y \
    apt-transport-https \
    ca-certificates \
    gnupg2 \
    software-properties-common \
    ufw

curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -

add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"
apt-get update

apt-get install -y docker-ce docker-ce-cli containerd.io

gpasswd -a $SUDO_USER docker

ufw allow 22
ufw allow 80
ufw allow 443
ufw enable


