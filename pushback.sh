#!/bin/sh
set -e -x

mkdir -p ~/.ssh
echo "$SSH_PRIV_KEY" > ~/.ssh/id_rsa
chmod 700 ~/.ssh/id_rsa

git config --global user.email "you@example.com"
git config --global user.name "Your Name"
GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -i ~/.ssh/id_rsa" git clone git@github.com:infracamp/infracamp.git
cd infracamp
echo "wurst" > wurst.txt
git add .
git commit -m "autobuild"
GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -i ~/.ssh/id_rsa" git push