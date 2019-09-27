---
title: Install and use gcloud and docker-machine on ubuntu 18.04
layout: scrollspy
---

# Install gcloud and docker-machine on debian / ubuntu

How to use `docker-machine` to provision and configure docker swarm cluster on google cloud platform.

Prerequisites:
- Linux or Windows WSL (Linux Bash)
- Google Cloud Platform Account

> Infracamp provides the the docker image `infracamp/kickstart-flavor-sdi` with everyting
> installed to log in to gcloud, spin up machines with docker-machine.
>
> If you want do do it your own, follow this document.

## Manual install gcloud and docker-machine

First of all we install `google-cloud-sdk` and `docker-machine` and some additional
packages.

```bash
sudo apt-get update && sudo apt-get -y install lsb-release gnupg2 docker.io

# Create environment variable for correct distribution
export CLOUD_SDK_REPO="cloud-sdk-$(lsb_release -c -s)"

# Add the Cloud SDK distribution URI as a package source
echo "deb http://packages.cloud.google.com/apt $CLOUD_SDK_REPO main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

# Import the Google Cloud Platform public key
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

# Update the package list and install the Cloud SDK
sudo apt-get update && sudo apt-get -y install google-cloud-sdk

# Install docker-machine
base=https://github.com/docker/machine/releases/download/v0.16.0 &&
  curl -L $base/docker-machine-$(uname -s)-$(uname -m) >/tmp/docker-machine &&
  sudo mv /tmp/docker-machine /usr/local/bin/docker-machine &&
  chmod +x /usr/local/bin/docker-machine

```
## Log in to gcloud

Use your default browser to log in as google user:

```bash
gcloud auth application-default login
```
Copy the url displayed and open it in your browser

## Provision a docker swarm cluster

This script will spin up one docker swarm master and 10 workers:

```bash
#!/usr/bin/env bash
set -e

CLUSTER_NAME="jupp"
MANAGER_NAME="$CLUSTER_NAME-manager"
GOOGLE_PROJECT="<ADD_YOUR_PROJECT_HERE>"
GOOGLE_ZONE="us-central1-f"
CONF_GOOGLE_IMAGE="https://www.googleapis.com/compute/v1/projects/ubuntu-os-cloud/global/images/family/ubuntu-1804-lts"

docker-machine rm -f $MANAGER_NAME || true
docker-machin create $MANAGER_NAME \
    -d google \
    --google-machine-image $CONF_GOOGLE_IMAGE \
    --google-machine-type n1-standard-1 \
    --google-zone $GOOGLE_ZONE \
    --google-disk-size "50" \
    --google-tags swarm-cluster \
    --google-project $GOOGLE_PROJECT

MGR_ENV=$(docker-machine env $MANAGER_NAME)
eval $MGR_ENV
docker swarm init
MGR_WORKER_JOIN_CALL=$(docker swarm join-token worker | grep "docker swarm join")

function startWorker() {
    local INDEX=$1
    local CUR_WORKER_NAME="$CLUSTER_NAME-worker-$INDEX";

    echo "Creating worker: $CUR_WORKER_NAME...";
    docker-machine rm -f  $CUR_WORKER_NAME || true
    docker-machine create $CUR_WORKER_NAME \
        -d google \
        --google-machine-image $CONF_GOOGLE_IMAGE \
        --google-machine-type n1-standard-1 \
        --google-zone $GOOGLE_ZONE \
        --google-disk-size "50" \
        --google-tags swarm-cluster \
        --google-project $GOOGLE_PROJECT

    eval $(docker-machine env $CUR_WORKER_NAME)
    eval $MGR_WORKER_JOIN_CALL
}

for i in {1..5}
do
    startWorker $i &
done
wait

echo "Docker swarm ready..."
echo "$MGR_ENV"
```
### Control the docker swarm cluster

The `docker` command will connect to this cluster, if the environmet is set
correctly:

Execute:

```bash
eval $(docker-machine env jupp-manager)
```
will set the appropriate environment variables.

After that you will be able to run docker commands remotely: List the nodes.

```bash
docker node ls
```


### Start rudl-cloudfront / rudl-principal

> This is an example how to deploy rudl_principal and rudl_cloudfront manually.
> See the rudl integration guild if you want to automate this.

```bash
#!/usr/bin/env bash
set -e -o pipefail

echo "Please unlock the principal secret:"
cat secrets/rudl_principal_secret.enc | base64 -d | ccrypt -d | docker secret create rudl_principal_secret -

echo "Creating new rudl_cf_secret..."
pwgen 64 -s -1 | docker secret create rudl_cf_secret -

echo "Adding ssh key.."
cat secrets/rudl_principal_ssh_key | docker secret create rudl_principal_ssh_key -

#echo "Creating cloudfront network..."
#docker network create --driver overlay --attachable rudl-cf-net


docker stack deploy rudl -c rudl-startup.yml
```

## Conclusion

It's really easy to autodeploy docker swarm clusters to google cloud platform.

Instead of updating nodes, you can spin up a new cluster. Deploy the services and
switch over DNS names without the risk of downtime due to updates.


