---
title: rudl - a continuous deployment infrastructure service
---

# rudl - a continuous deployment infrastructure service

rudl is a software package coming as prebuild docker images from public
source to spin up docker swarm clusters, provide redundant ssl cloud termination
and running rolling updates in docker swarm clusters.

Each commit and push to the master branch of the repostitory will be automatically
tested, build and deployed to the target infrastructure. Configuration management
is kept in a central repository for all clusters and backend services.

Each user with server access is a potential security risk. With git as central
platform for managing, testing and revising changes, we can apply different
security levels based on the security relevance of each service.

## What we want to archieve

The trade between development velocity and security:

In microservice infrastructures there should be only a few services with 
direct impact into security or availability of the whole platform.
These few services need extensive testing and eventually revision and
approval by a second, experienced developer. This is very costly. Not only
in time spent for reviewing but also in motivation in individual development.

In opposite, most services should have no or low impact in availability and
no impact in security. These services should be very flexible and deployed
as changes arrive.

We recommend a classification of services by its impact on both, security and
overall system availability. 

- Red flag service: Central service with direct impact on security (dealing with
  user credentials, access to sensitive data, etc.)
  - Minimal codebase
  - Protected master branch (pull request)
  - extended static metrics, code coverage
  - manual testing checklist
  
- Yellow flag service: Central service with direct impact on availability of the
  whole service.
  
- Blue flag service: Robust against outage of other Blue flag services. 

To mitigate considerations for red and yellow flag services, we want to use
collaboration tooling like git.


## Deploy multiple times per day

Benefits:
- Fastest feature delivery. 
- Developer is responsible for deployment, testing, monitoring for failures and
  error recovery
- Fully automated deployment without need for server access

Security considerations:
- 


## References

- [Continuous delivery at Netflix](https://www.youtube.com/watch?v=7oEvlcUMqpE)

- [Martin Fowler - Continuous Delivery](https://www.youtube.com/watch?v=aoMfbgF2D_4)

- [10 companies killing devops](https://techbeacon.com/devops/10-companies-killing-it-devops)

- [How to get to Continuous Deployment](https://de.atlassian.com/continuous-delivery/continuous-deployment)

