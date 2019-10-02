#!/bin/sh
set -e

mkdir -p ~/.ssh
echo "$SSH_PRIV_KEY" > ~/.ssh/id_rsa
chmod 700 ~/.ssh/id_rsa

git config --global user.email "you@example.com"
git config --global user.name "CI Builder"
GIT_SSH_COMMAND="ssh -i ~/.ssh/id_rsa" git clone git@github.com:infracamp/infracamp.git
cd infracamp
echo "wurst2" > wurst.txt
git add .
git commit -m "autobuild"

if [ "$?" != "0" ]
then
  echo "no changes"
  exit 0;
fi;

GIT_SSH_COMMAND="ssh -i ~/.ssh/id_rsa" git push