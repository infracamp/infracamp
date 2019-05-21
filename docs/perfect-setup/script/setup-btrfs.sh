#!/bin/bash

rm -R /var/lib/docker/volumes

btrfs subvolume create /var/lib/docker/volumes

service docker restart

btrfs subvolume delete /srv/docker-volumes-backup
btrfs subvolume snapshot -r /var/lib/docker/volumes /srv/docker-volumes-backup


## Create a pgp key pair

gpg --gen-key

gpg --export --armor --output matthes_pgp.asc matthes@leuffen.de

#copy the file

gpg --import matthes_pgp.asc
gpg --list-keys
gpg --sign-key
gpg --edit-key matthes@leuffen.de
# => trust => 5



tar -cz /srv/docker-volumes-backup | gpg --output /srv/backup.tgz.enc --encrypt --recipient matthes@leuffen.de
