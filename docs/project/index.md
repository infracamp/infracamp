---
title: Project Overview
layout: scrollspy
description: |
    On this page you find all projects currently maintained by infracamp.
---


## Kickstart containers

Intermediate containers help speeding up build and deployment times. Infracamp provides containers
for PHP, NodeJs, C++, Jekyll, Python. They are available on dockerhub and build daily, weekly and
with long time support.

<div class="row">
<div class="col-7" markdown="1">

Speed up builds and deployments with intermediate-containers. Dockers overlay-fs will
download images specified in `from:`-sections of Dockerfiles only once. It is common practice to install software used across multiple
services using 'intermediate-containers'. Kickstart flavors are publicly maintained *intermediates on steroids* for various
platforms, languages and frameworks.

See the [getting-started guide](/getting-started) on how to start your projects using these base-containers.

</div>
<div class="col-5" style="text-align: center" markdown="1">
<img src="logo-docker.png" alt="docker" style="height:200px">
</div>
</div>


{% include_relative _inc_kickstart_flavor.html %}


## Phore PHP7 libraries

<div class="row">
<div class="col-7" markdown="1">

Independent libraries with less dependencies. Phore libraries do what the should. 
No more.

Most parts are written for large scale stateless clustered microservices demanded by
big-data, infrastructural, IoT environments.

See the [core concepts page](phore/concepts/) for more information.

</div>
<div class="col-5" style="text-align: center" markdown="1">
<img src="logo-php.png" alt="docker" style="height:100px">
</div>
</div>



{% include_relative _inc_phore.html %}


## Development Tools

{% include_relative _inc_tools.html %}


## Working Documents 

{% include_relative _inc_documents.html %}


