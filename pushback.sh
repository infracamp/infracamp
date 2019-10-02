#!/bin/sh
set -e -x

env
mkdir -p ~/.ssh
echo $SSH_PRIV_KEY > ~/.ssh/id_rsa


git config --global user.email "you@example.com"
git config --global user.name "Your Name"
git clone git@github.com:infracamp/infracamp.git
cd infracamp
echo "wurst" > wurst.txt
git add .
git commit -m "autobuild"
git push