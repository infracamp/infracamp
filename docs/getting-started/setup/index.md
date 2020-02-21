---
title: setup your workstation
---

# Setup your workstation

This document covers
- [Setup Windows 10 workstation](#Setup-Windows-10-workstation)
- FAQ

## Setup Windows 10 workstation
This setup only works if your projects are located under `C:\`

### Requirements
- Docker for windows installed
- Ubuntu WSL installed

### Required Options in Docker for Windows
- Open Docker for Windows settings
    - Expose docker deamon
        1. Go to `General` settings
        2. To expose the docker deamon enable the marked option in the picture below
        ![docker deamon expose](./docker-deamon.png)
    
    - Enable fileshare in docker
        1. Go to `Resources` open the Subsetting `File Sharing`
        2. Mark all windows drives you want to share with docker like in the image shown below
        ![docker fileshare](./docker-fileshare.png)


### Required settings in ubuntu shell
For `kickstart` to be able to work you need to enter the following commands:
- `sudo apt update && upgrade`
- `sudo apt install docker.io`
- `echo "export DOCKER_HOST=tcp://0.0.0.0:2375" >> ~/.kickstartconfig`
- `echo "export KICKSTART_WIN_PATH=C:/" >> ~/.kickstartconfig`

You will find your `C:/` drive under `/mnt/c`.<br> Navigate with cd to your project folder and run `./kickstart.sh`

