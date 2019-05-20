# The perfect setup: Debian 9.3, LVM, Crypt-FS, Docker-Swarm

## Install the Base System

- Guided Setup using LVM anc Cryptfs
- Complete Disk
- Enter passphrase
- Select / Partition and switch to btrfs

- Partition-Options: noatime


## Run our Provision-Script

[See setup-cluster-debian9.sh](script/setup-cluster-debian9.sh)

```
sudo apt-get update && sudo apt-get install -y curl && curl -o setup-cluster-debian9.sh https://infracamp.org/perfect-setup/script/setup-cluster-debian9.sh && chmod 755 setup-cluster-debian9.sh && ./setup-cluster-debian9.sh
```

