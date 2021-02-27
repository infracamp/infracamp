---
layout: default
title: Open-Source Support Organisation
description: Infracamp is an open source community to provide platform services for webdevelopers across multiple companies and private projects. All services are free and will always be free.
og_description: Infracamp - We think microservice-containers are the future of IoT and BigData development. Developers cooperate to deliver first class experience. Let us share our know-how across company boundaries and do even better together. 
---

<div class="jumbotron pt-4 pb-4">
    <div class="row">
        <div class="col-10">
           <h1 class="display-4 mt-2">infracamp.org  <small> - Open-Source Support Organisation</small></h1>
           
           <p class="lead">
               Unveil the real power of microservices, micro-frontends, automation tools: <i>Experiment, Migrate, 
               Benefit.</i> We support open-minded agile infrastructure. Ready <i>now</i> for the future to come.
           </p>
            <a href="/getting-started/" class="btn btn-danger">Getting started!</a>
        </div>
        <div class="col-2">
            <img src="/assets/infracamp.svg" width="200" class="rounded-circle shadow-sm">
        </div>
    </div>
  
  <!-- a class="btn btn-primary btn-lg" href="/mission" role="button">Learn more</a-->
</div>

{% include_relative title.inc.html %}


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



