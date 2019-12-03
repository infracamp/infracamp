---
layout: default
title: Tools for Agnostic Development in Interdisciplinary Teams
description: Infracamp is an open source community to provide platform services for webdevelopers across multiple companies and private projects. All services are free and will always be free.
og_description: Infracamp - We think microservice-containers are the future of IoT and BigData development. Developers cooperate to deliver first class experience. Let us share our know-how across company boundaries and do even better together. 
---

<div class="jumbotron pt-4 pb-4">
    <div class="row">
        <div class="col-10">
           <h1 class="display-4 mt-2">infracamp.org  <small> - Agnostic Development Support Organisation</small></h1>
           <p class="lead">
               <i>What's the best programming language? The best framework for now and in eternity?</i>
           </p>
           <p class="lead">
               Unveil the real power of <i>microservices</i>, <i>micro-frontends</i>, <i>automation tools</i>: Experiment, Migrate, 
               Benefit: We support agile open-minded infrastructure. Ready for the future to come.
           </p>
            <a href="/mission/" class="btn btn-primary">Our mission...</a> <span class="ml-4 mr-4">or</span> 
            <a href="/getting-started/" class="btn btn-danger">Onboard now!</a>
        </div>
        <div class="col-2">
            <img src="/assets/infracamp.svg" width="200" class="rounded-circle shadow-sm">
        </div>
    </div>
  
  <!-- a class="btn btn-primary btn-lg" href="/mission" role="button">Learn more</a-->
</div>

<div class="row">
    <div class="col-sm-4">
        <div class="card">
          <img class="card-img-top" src="/assets/img/coding2.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">develop as one team</h5>
            <h6 class="card-subtitle mb-2 text-muted">5 minute onboarding</h6>
            <p class="card-text">
                 Get your workstation ready in less than 5 minutes and develop inside
                 containers. See our onboarding documentation.
            </p>
            <a href="/getting-started/" class="card-link">with kickstart</a>
            
            <h6 class="card-subtitle mb-2 text-muted">prebuild containers</h6>
            <p class="card-text">
                Choose from best practice development/deployment environments 
                for Python, NodeJS, PHP, Python in our kickstart-flavors 
            </p>
            <a href="/project/" class="card-link">kickstart-flavors</a>
            <!--a href="http://github.com/infracamp" class="card-link">Visit on GitHub</a-->
          </div>
        </div>
    </div>
    
   <div class="col-sm-4">
       <div class="card">
         <img class="card-img-top" src="/assets/img/coding1.jpg" alt="Card image cap">
         <div class="card-body">
           <h5 class="card-title">ready to use containers</h5>
           <h6 class="card-subtitle mb-2 text-muted">Kickstart </h6>
           <p class="card-text">Development containers for PHP, Python, JS/Node.js - supporting x86 and ARM32 (RaspberryPi) platforms.</p>
           <p class="card-text">Seamless integrated to gitlab, github, dockerhub.</p>

           <a href="/getting-started/" class="card-link">Getting started</a>
           <a href="/project/" class="card-link">Containers</a>
         </div>
       </div>
   </div>
   
   <div class="col-sm-4">
        <div class="card">
            <img class="card-img-top" src="/assets/img/server2.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">our frameworks</h5>
                <h6 class="card-subtitle mb-2 text-muted">Phore</h6>
                <p class="card-text">PHP 7.2 modular microservice framework with small footprint, developed to educate and develop faster</p>
                <a href="/project/phore" class="card-link">See documentation</a>
            
                <h6 class="card-subtitle mb-2 text-muted">comp-js</h6>
                <p class="card-text">javascript library build on the new custom webcomponents</p>
                <a href="http://github.com/phore/" class="card-link">See on GitHub</a>
            
            </div>
        </div>
   </div>
</div>






<div class="row">
    <div class="container">
    <h2>Recent Posts</h2>
      {% for post in site.posts %}
          <h4 style="margin-bottom: -8px"><a href="{{ post.url }}">{{ post.title }}</a>
          {% for tag in post.tags %}
          <span class="h6 badge badge-primary">{{ tag }}</span>
          {% endfor %} </h4>
          {{ post.description }}  
          <small>({{post.date | date_to_string}})</small>      
      {% endfor %}
</div>



