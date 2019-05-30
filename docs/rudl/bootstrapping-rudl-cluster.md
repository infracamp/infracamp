# Bootstrapping a new rudl cluster

## Preperation of the server

You'll need a bare-metal server, virtual machine, etc supporting docker.

## 1st time setup

```bash
apt update && apt install docker.io git ccrypt
docker swarm init
docker volume create _res_rudl_vol


``` 

**creating a secret for**

Everything within the service will be encrypted with a secret. Without this
secret you won't be able to recover your server and stored secrets. 

```bash
passwd=$(pwgen 512 -s -1) && echo $passwd | ccrypt | base64 -w 72 > cluster-secret.enc && echo $passwd | docker secret create _res_rudl_secret
```

Make sure to store `cluster-secret.enc` in a save place to recover your cluster.

If your password gets lost just reinject by calling:

```bash
cat cluster-secret.enc | base64 -d | ccrypt -d | docker secret create _res_rudl_secret
```


**spin up a new cluster**

```bash
docker run -it -v _res_rudl_vol:/mnt -v /var/run/docker.sock:/var/run/docker.sock infracamp/rudl-hypervise :provision
```

You might already specify the git repoitory and name of the cluster:

```bash
docker run -it \
    -v _res_rudl_vol:/mnt \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -e CONF_RUDL_REPO_URI=git@gitlab.com/path/to/repo.git \
    -e CONF_RUDL_NAME=c3po \
    -e CONF_RUDL_HOST=c3po.your.tld \
    infracamp/rudl-hypervise :provision
```

- This will ask you for a secret for the restore key. Make sure to remember the restore key.

- After that it will output the SSH Key to add to the Deploy Config of the configuration
repository. (Write access enabled!)

- Press enter to syncronize with the repository and retry until the data is ready.

- The service will create a `c3po-rudl.yml` and a `c3po-key.enc` file inside the repostory.

- The /var/lib/docker/volumes/_res_rudl_vol/_data looks this way:
  ```
  rudl-cluster-name.txt
  .git/id_ed25519
  repo/
    c3po-key.enc
    c3po-stack.yml
    c3po.yml
    c3po-cloudfront.yml
  ```
  
  
**c3po.yml**

```yaml

auth_users:
  - user: 02kjsalk
    pass_hash: $slkfjalfk$laksdfjlk

push_keys:
- "02ijdlfkjasoihklj"

stacks:
    rudl: 
      deploy_keys:
      - "92olkasdflksjfdh"
      online: true
      file: c3po-stack.yml
      
    dynamic: 
      deploy_keys:
      - "9284kfkalkdjsflk"
      online: true
      file: c3po-ci.yml

cloudfront:
  - some_cloud.yml

registry_auth:
  registry.gitlab.com:
    user: scz
    pass: ENC-20howulfahowhkjaldfiwkjfhkwllk    
   
nodes:
  h492h94k:
    manager: true
    labels:
      - some label
    
secrets:
  _rudl_manager_api:
    type: auto
  
  _rudl_manager_api_write:
    type: auto
    
  some_secret:
    type: auto
        
  some_other:
    type: auto
        
  google_key_cf:
    type: file
    file: sec/google_key_cf.enc
        
        
networks:
  _net_rudl_mgmt
  
        

```


**cloudfront.yml**

```yaml

login.xyz.de:
  alias:
    - www.login.xyz.de
  ssl: 
  paths:
    - path: /
      target: http://xyz_service/
    

```