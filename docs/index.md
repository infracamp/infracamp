---
layout: default
title: Open Source Incubator
description: Infracamp is an open source community to provide platform services for webdevelopers across multiple companies and private projects. All services are free and will always be free.
og_description: Infracamp - We think microservice-containers are the future of IoT and BigData development. Developers cooperate to deliver first class experience. Let us share our know-how across company boundaries and do even better together. 
---

<script type="application/ld+json" id="json-ld-data">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "https://infracamp.org",
  "logo": "https://infracamp.org/assets/infracamp.png"
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Infracamp.org",
    "item": "https://infracamp.org/"
  },{
        "@type": "ListItem",
        "position": 2,
        "name": "Home",
        "item": "https://infracamp.org/"
      }]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is kickstart.sh?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "kickstart.sh is a bash script reading information about the container to start from .kick.yml and executing docker run with the correct parameters."
    }
  }, {
    "@type": "Question",
    "name": "What are kickstart flavor containers?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Flavor containers are intermediate containers. They provide preinstalled enviromnents but it is no application yet inside. Flavors are normally referred to in the from-section of .kick.yml and Dockerfile."
    }
  }, {
    "@type": "Question",
    "name": "What is Phore?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Phore is a set of PHP7.2+ libraries designed to support development of highly scalable microservices."
    }
  }]
  }
</script>

<div class="jumbotron pt-4 pb-4">
    <div class="row">
        <div class="col-10">
           <h1 class="display-4 mt-2">infracamp.org  <small> - incubator for open-source frameworks</small></h1>
           <p class="lead">
             Infracamp is a non-profit organization coordinating and maintaining open-source frameworks
             developed by enterprises. We focus on <i>business automation</i>, <i>cloud computing</i>, <i>microservices</i>.
           </p>
           <a href="/mission" class="btn btn-primary">Our mission...</a> <span class="ml-4 mr-4">or</span> 
            <a href="/getting-started" class="btn btn-danger">See it in action, now!</a>
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
          <img class="card-img-top" src="/assets/img/server2.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">automate everything</h5>
            <h6 class="card-subtitle mb-2 text-muted">continuous integration</h6>
            <p class="card-text">
                 Zero configuration. Save time. Deliver fast. Best pactice develop on linux, windows and MacOS.
                 Its open-source and free.
            </p>
            <a href="/webservices/" class="card-link">See web services</a>
            
            <h6 class="card-subtitle mb-2 text-muted">platform agnostic tooling</h6>
            <p class="card-text">
                Deploy on GCS, AWS, Azure, BareMetal and HVM (libvirt). 
                Verified concepts for scaleing and high-availibility.
            </p>
            <a href="/webservices/" class="card-link">See web services</a>
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
           <a href="/container/" class="card-link">Containers</a>
         </div>
       </div>
   </div>
   
   <div class="col-sm-4">
        <div class="card">
            <img class="card-img-top" src="/assets/img/coding2.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">our frameworks</h5>
                <h6 class="card-subtitle mb-2 text-muted">Phore</h6>
                <p class="card-text">PHP 7.2 modular microservice framework with small footprint, developed to educate and develop faster</p>
                <a href="/phore" class="card-link">See documentation</a>
            
                <h6 class="card-subtitle mb-2 text-muted">comp-js</h6>
                <p class="card-text">javascript library build on the new custom webcomponents</p>
                <a href="http://github.com/phore/" class="card-link">See on GitHub</a>
            
            </div>
        </div>
   </div>
</div>






<div class="row">
    <div class="container">
    <h2>News</h2>
    <p>Discussion: <a href="mission/user-stories">Product development using User Stories</a></p>
    </div>
</div>



