---
title: Kickstart project startup script
description: |
    kickstart.sh is a bash script meant to be placed into the root directory of each of your projects. It 
    will provide a unified access and startup point for microservice oriented development environment.
    Kickstart includes notification about updates and automated update procedure.
    With kickstart there will be no need for project-specific startup-scripts or checkout and setup
    instructions. Just clone a repository and run kickstart.sh.
---

## TL;DR;

Download the `kickstart.sh` and install it by executing the curl command provided blow and place and 
commit it within your project directory. To start-up a project you then just clone the repository and
execute `./kickstart.sh` inside the projects root directory.

On your local workstation, `kickstart.sh` will:
- Start up the container setting env `DEV_MODE=1` and giving you an **interactive shell** as user `user` inside the container.
- Mount the **project directory** to `/opt` inside the container so every user has the same absolute path.
- Expose **ports 80,4000,4100,4200** on localhost so you can access the service with any browser at `http://localhost`
  (configured by project in `.kickstartconfig` or global in `$HOME/.kickstartconfig`)
- **Detect operating system** and container service (OSx, Linux, WSL2)
- Set the **uid** of user `user` inside the container according to your actual uid so there will no permission problems
- Check for other running instances of the project (Choose between: Kill, Shell or Ignore)
- Securely mount your **ssh-key** into the container, so you can use git within your container
- Mount the **bash history** into the container
- Mount **cache directories** for **apt, npm, composer, pip** into the container
- Evaluate global `$HOME/.kickcstartonfig` file for additional mounts/ports/settings
- Securely provide developer's **secrets** from `$HOME/.kickstart/secrets/<project>/<secret_name>`to the container
- Set **environment variables** according to `.env`-file
- Detect and provide the **hosts's IP address** to the container (for running debuggers, etc) as env `DOCKER_HOST_IP`
- Start **additional services** from `.kick-stack.yml` in composer format
- Setup interactive shell (colors, screen-size, adjustments for osX, non-interactive shells)
- **Run commands** defined in `.kick.yml`-file in the project folder (if using kickstart-flavor-containers)
- Inform you about **updates** of `kickstart.sh` and provide auto-download updates by calling `./kickstart.sh --upgrade`
- Provide access to **skeleton projects** that can be defined in a central git repository (configurable)
- Provide your own repositories for updates on kickstart.sh (configured in $HOME/.kickstartconfig)

On testing stage `kickstart.sh` will:
- Execute the tests the same way they will be executed in CI/CD environment. So you can debug 
  on localhost instead of pushing over any over again.

On CI/CD pipeline `kickstart.sh` will:
- Ensure no ssh-keys or secrets are copied inside the container.
- **Auto-detect** `gitlab-ci`, `github-actions`, `jenkins` build environment and determine `TAG` and `BRANCH`
- Set permissions according to the build environment
- **Build the container** running `docker build` and tagging with the correct tags
- Logging into the **registry** accoring to the build environment
- **Pushing** to a registry defined inside the build environment

On Deploy-stage:
- Autodetect docker-swarm, kubernetes by environment inside build environment
- HTTP-PUSH to hooks urls

## Project setup: Kickstart

**Copy'n'Paste installer script**: (execute as user in your project-directory)
```bash
curl -o kickstart.sh "https://raw.githubusercontent.com/infracamp/kickstart/master/dist/kickstart.sh" && chmod +x kickstart.sh
```

The script will save [kickstart.sh](https://raw.githubusercontent.com/infracamp/kickstart/master/dist/kickstart.sh) to the
current directory and set the executable bit.

**Run kickstart:**
```bash
./kickstart.sh
```

Kickstart will create an empty `.kick.yml` file in the current directory. You might want to edit
at least the `from:`-Line.


## .kick.yml - Kickstart configuration file. *([Full Docs](doc/kick.yml.md))*

```yaml
version: 1
from: "infracamp/kickstart-flavor-ubuntu"

..more options..
```

Run `./kickstart.sh` - the container should start.

To select a special flavor select

```yaml
version: 1
from: "infracamp/kickstart-flavor-gaia"
```

## Secrets

You can provide secrets that will be mounted to `/run/secrets/<secret_name>` (the same way
they will be mounted on kubernetes oder docker swarm).

Just create a `$HOME/.kickstart/secrets/<project-name>/<secret_name>`. kickstart will detect these
secrets and mount them into the container. So you can keep developer credentials outside of the
repositories.

## Available Flavors

See [infracamp.org/container/](https://infracamp.org/container/) for
full list and links to their documentation.

## Writing config-files

`.kick.yml:`
```yaml
config_file:
  template: "config.php.dist"
  target: "config.php"
```

Will read `config.dist.php` file, which will be parsed copied into config.php.

`config.php.dist`
```php
<?php
define("CONF_MYSQL_HOST", "%CONF_MYSQL_HOST%");
define("VERSION_STRING", "%VERSION_STRING%");
```

The configuration will be loaded from environment variables.


## Development and Deploy Tool: `kick`

You can define commands and run it inside the container.

```
version: 1
from: "infracamp/kickstart-flavor-gaia"

command:
    build:
        - "echo 'Build called'"
    run:
        - "echo 'Run called'"
        
    do_something:
        - "echo 'doing something'"
```

- Will work from any directory
- All paths relative to .kickstart.yml
- Run commands: `kick do_something`


## Starting a stack of helper services

Kickstart will search for a file `.kick-stack.yml` in the project main
directory. If this file exists, it will be deployed as docker stack.

**Make sure, all services you want to access from within your container
are attached to the external network `project_name`**

Assume our project_name is `my_proj_1` and we want to provide a mysql service
```yaml
version: "3"
services:
  mysqld:
    image: mysql
    networks:
      - my_proj_1


networks:
  my_proj_1:
    external: true
```

The mysql service will be availabe as `my_proj_1_mysqld`.


## System-wide config file

Kickstart will read the user-config from:
```
~/.kickstartconfig
```

Available Options:

```
KICKSTART_DOCKER_RUN_OPTS=""        # Optional parameters passed to the docker run command
KICKSTART_PORTS="80:4200;25:25"     # Change the Port-Mappings
KICKSTART_WIN_PATH=                 # If running on windows - map bash 
```




## Project-wide config file

```
./kickstartconfig
```


## Defaults

### Networking

By default, kickstart will configure debuggers to send data to `10.10.10.10`. So 
this ip should be added to your pc's networks.


### Add links to other containers

Start one or more containers. If you are not using kickstart, make sure
you specify a name with the parameter `--name`.

Create, if not already exisitng a project-wide `.kickstartconfig` file.
Add a Line:

```
KICKSTART_DOCKER_RUN_OPTS="--link otherContainerName"
```





## Building containers

You can build ready-to-deploy containers with kickstart. Just add a `Dockerfile`
to your Project-Folder

```dockerfile
FROM infracamp/kickstart-flavor-gaia

ENV DEV_CONTAINER_NAME="some_name"
ENV HTTP_PORT=80

ADD / /opt
RUN ["bash", "-c",  "chown -R user /opt"]
RUN ["/kickstart/container/start.sh", "build"]

ENTRYPOINT ["/kickstart/container/start.sh", "standalone"]
```

Interval: A `kick interval` will be triggered every second (synchronous).

To save cpu-time you could add this to your `.kick.yml`
```yaml
command:
    interval:
      - "sleep 300"

```

## Continuous Integration Pipelines

kickstart includes the action `./kickstart.sh ci-build` which will build the image, login to 
a container registry and push the newly build image. It will run out of the box with *gitlab-ci* and
*github actions*.

For manual setup, provide the following environemnt variables to `./kickstart.sh ci-build`:

| Environment Variable  | Description | Example |
|-----------------------|-------------|---------|
| `CI_REGISTRY`         | Hostname of the registry to login and push to | `hub.docker.com`  |
| `CI_REGISTRY_IMAGE`   | The Image name (including registry url        | `registry.gitlab.com/some/image` |
| `CI_BUILD_NAME`       | * (Optional)* The tag for the image (Default: 'latest') | `latest` or `testing` |
| `CI_REGISTRY_USER`    | *(Optional)* Username to login to the registry (write access) | `username` |
| `CI_REGISTRY_PASSWORD` | *(Optional)* The password or token to login to the registry  | `password` |


### Example Gitlab CI

To use gitlab's build in registry and ci-pipeline, just create a `.gitlab-ci.yml` file into the root directory
of you repository. Nothing else needs to be configured (environment will be set from gitlab runners
directly): 

```
image: docker:stable
stages: [ build ]
services: [ docker:dind ]
before_script: [ apk update && apk add bash curl ]

latest:     # The images's tag (CI_BUILD_NAME)
  stage: build
  script:
    - ./kickstart.sh ci-build
```


### Example Jenkins File

To use kickstart's build in build and push service, you need do provide the correct environment variables
in the `Jenkinsfile` of your project's root directory:

```
pipeline {  
  environment {
    CI_REGISTRY          = 'some.registry.host'
    CI_REGISTRY_IMAGE    = 'some.registry.host/some/image'
    CI_BUILD_NAME        = 'latest'     // The images's tag
    CI_REGISTRY_USER     = $some_jenkins_secrets_user
    CI_REGISTRY_PASSWORD = $some_jenkins_secrets_secret
  }
  stage('Build and Push to registry') {
    sh './kickstart.sh ci-build'
  }
}
```

## Building own flavors

Feel free to build your own flavors.

Some rules:

- Each flavor should reside in an separate repository
- It must build the tags `latest` (stable release) and `testing` (current master branch build)
- It must provide tests
- And should provide easy to use documentation
- It should build using hub.docker.com public build service (free of charge!)

Flavor names derive from greek mystical names [click](https://de.wikipedia.org/wiki/Griechische_Mythologie)