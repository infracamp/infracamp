---
title: Auto-deploy docker swarm cluster on google cloud, azure, aws
layout: scrollspy
---
# Auto-deploy docker swarm cluster on google, azure, aws - the DevSecOps way

This article covers:
- Installation of gcloud, docker-machine
- Creating a I.a.a.S. Repository containing all configuration files including encrypted
  secrets.
- Provisioning a new Cluster and migrating services with one command.
- Removing SSH / Console Access even for administrators

## TL;DR

We show how to:
- Automatcally spin up a docker swarm cluster with 3 managers, 2 cloudfronts, and 40 workers on gcp
  in 5 minutes.
- Prohibit any SSH connections
- Migrate services, ssl-certificates, secrets to this new service
- Switch DNS records to point to the new cluster
- Tear down the old cluster
- And repeat this procedure daily
- Offer a full-stack two layer security model

### Rotating two layer security model

At least two layers of security have to be breached to have full access to the infrastructure.
Even if a single system has been compromised, there is always at least one second layer.

Tasks:
- SSH access to any system must be prohibited
    - After provisioning remote access to the machines is fully disabled
      by removing SSH server and resetting passwords. (default)
    - When necessary a new cluster can be provisioned with ssh access.
- Systems rotate frequently. VM won't be online for more than 5 Days.
- Also insider attacks should be impossible or at least detectable
- Make manual work, even debugging as hard as possible.
    - DevOps should provide reasonable logging and monitoring to
      their services without the need of logging into a server.
      Therefor logging into a server should be complicated or - even
      better - impossible.

### Procedure / Workflow

Spinning up a cluster works like charm:

- Logging into the gcloud account (Require admin user interaction)
- Unlocking of secrets without displaying them (Require 2/4/6-eyes user interaction - configurable)
- Automated steps:
    - Restricting access to the currently used IP in firewall
    - Spinning up a new swam master node
    - Optional: Spinning up and joining two or more master nodes
    - Spinning up at least one cloud front node (as worker) to the master nodes (public network)
    - Spinning up multiple (tested up to 500) worker nodes (private network)
    - Deploying cloudfront and principal services to the cluster
    - Uninstalling SSH, sudo, su commands (all command allowing direct access) from all nodes
    - Blocking any (also own) remote access by firewall rules
    - Opening HTTP/HTTPS/+Other Ports on the cloudfront nodes
    - `rudl-principal` will clone the repository and start all defined
      services and create ssl-certificate.



After that even a signed in administrator (gcloud) won't be able to access
secrets nor data.

### Centralized infrastructure configuration

We want to keep all configuration in one place, reproducable and well documented.

All infrastructure, provisioning should be done in one repository

### Collective code ownership

Also the infrasturcture is part of our collective code ownership. Even public
should be able to inspect our infrastructure repostiory without compromising
security.

Strong encryption of secrets must be enforced.


### Keeping security relevant services small

When it comes to security, there is always a single point of failure. The case is
to keep this as small as even possible.

A single service can be hardened, reviewed, monitored.



## The setup

When it comes to cloud-computing, we want to automaticly spin up, migrate clusters without
the need of manual work. Updates are no longer done by logging into a server via SSH but
by spinning up new instances and migrating the services.



This article covers automaticly provisioning of a docker swarm cluster on gpc with
multiple workers providing two-barrier security and full encryption of secrets.

Instead of updating virtual machines, we provide a I.a.a.S. way to spin up and
migrate services without the need for SSH and

## Goal



## Spin up the cluster

For easy handling, we provide a git repository.
 




