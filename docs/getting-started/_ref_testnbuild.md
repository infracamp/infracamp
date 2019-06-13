
# .kick.yml - the container config file

The <kbd>.kick.yml</kbd> file is the central configuration file for 
the container. It specifies the docker image to start. And is responsible
for configuring the container. Inside the container it is evaluated by the
<kbd>kick</kbd> command.

<kbd>.kick.yml</kbd> defines commands to be executed at build, dev, production
and test time. You can run these commands by running <kbd>kick [command]</kbd>.
This has the advantage to test your scripts incremental inside the container
instead of rebuilding your container over and over again.


## Defining commands and build stages in <kbd>.kick.yml</kbd>

```yaml
version: 1
from: infracamp/kickstart-flavor-base:testing

command:
  build:
    - "sudo apt-get update && sudo apt-get install -y some packages"
    - "composer update"
    - "npm install"
    - "npm build"
    
  dev:
    - npm build --watch
    
  run:
  
  test:
    - phpunit
```

Inside the container you can now execute e.g. the tests with <kbd>kick test</kbd>.

## The Dockerfile <small></small>

Keeping the container configuration inside <kbd>.kick.yml</kbd> helps reducing your
<kbd>Dockerfile</kbd> to only a few lines:

```dockerfile
FROM infracamp/kickstart-flavor-base:testing
ENV DEV_CONTAINER_NAME="your-project-name"

ADD / /opt
RUN ["bash", "-c",  "chown -R user /opt"]
RUN ["/kickstart/flavorkit/scripts/start.sh", "build"]

ENTRYPOINT ["/kickstart/flavorkit/scripts/start.sh", "standalone"]
```
*Make sure to adjust `FROM` and `DEV_CONTAINER_NAME` to the settings in
 <kbd>.kick.yml</kbd>*


## Integration into CI/CD pipeline

This example shows how to integrate in <kbd>.gitlab-cl.yml</kbd>:

```yaml
image: docker:stable
stages:
  - build

services:
  - docker:dind

before_script:
  - apk update && apk add bash curl

latest:
  stage: build
  script:
    - ./kickstart.sh :test
    - ./kickstart.sh ci-build
  only:
    - master
```

This will execute the unit-tests defined in <kbd>command > test</kbd>-section 
and then build the container running <kbd>command > build</kdb> command.

The command <kbd>kickstart.sh ci-build</kbd> will build the container using
Dockerfile and push the newly created container to gitlab's registry.