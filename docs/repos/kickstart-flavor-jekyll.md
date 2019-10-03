
# kickstart-flavor jekyll :: Jekyll (~>3.8) Github Pages development container

[![Docker Build status](https://img.shields.io/docker/cloud/build/infracamp/kickstart-flavor-jekyll.svg)](https://cloud.docker.com/repository/docker/infracamp/kickstart-flavor-jekyll/builds)
[![Docker Pulls](https://img.shields.io/docker/pulls/infracamp/kickstart-flavor-jekyll.svg)](https://github.com/infracamp/kickstart-flavor-jekyll)
[![See Website](https://img.shields.io/badge/info-website-blue.svg)](http://infracamp.org/container)


Jekyll is a static website generator used by github pages. This container
lets you on the fly develop websites.

- [Jekyll Documentation](https://jekyllrb.com/docs/home/)
- [GitHub Pages Docs](https://pages.github.com/)
- [Skel Project](https://github.com/infracamp/kickstart-skel/blob/master/jekyll-base/)

Jekyll comes with an Apache webserver. So you can deploy this container as 
Static homepage not only for github-pages but as standalone server too. 


## Working with the container

### Container specific `.kick.yml`-directives

Demo kick.yml content:

```
command:
  build:
    - "jekyll build -s /opt/docs -d /var/www/html"
    
  dev:
    - "jekyll watch -s /opt/docs -d /var/www/html --force_polling"
```


### Apache2


## Skeleton *([Code](https://github.com/infracamp/kickstart-skel/tree/master/jekyll-base))*

Install a demo page (including config-file etc.) from [kickstart-skel](http://github.com/infracamp/kickstart-skel)

```
./kickstart.sh --skel jekyll-base
```

