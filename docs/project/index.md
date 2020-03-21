---
title: Project Overview
description: |
    On this page you find all projects currently maintained by infracamp.
---

## Kickstart development containers

<table>
    <thead>
        <td>Name</td>
        <td>Description</td>
        <td></td>
    </thead>
    <tbody>
    {% for item in site.data.projects.kickstart %}
        <tr>
            <td><a target="_blank" href="https://github.com/{{item.project}}/{{item.name}}/blob/master/README.md"><code><b>{{item.name}}</b></code></a></td>
            <td>{{item.desc}}</td>
            <td>
                <a target="_blank" href="https://github.com/{{item.project}}/{{item.name}}/actions"><img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2F{{item.project}}%2F{{item.name}}%2Fbadge&style=flat"></a>
                <br/><a target="_blank" href="https://github.com/{{item.project}}/{{item.name}}/releases"><img src="https://img.shields.io/github/release/{{item.project}}/{{item.name}}.svg"></a>
                <br/><a target="_blank" href="https://cloud.docker.com/repository/docker/{{item.project}}/{{item.name}}/builds"><img src="https://img.shields.io/docker/pulls/{{item.project}}/{{item.name}}.svg"></a>
            </td>
        </tr>
    {% endfor %}
    </tbody>
    
</table>


## Phore PHP7+ librarys

<table>
    <thead>
        <td>Name</td>
        <td>Description</td>
        <td></td>
    </thead>
    <tbody>
    {% for item in site.data.projects.phore %}
        <tr>
            <td><a href="https://github.com/{{item.project}}/{{item.name}}/blob/master/README.md"><code><b>{{item.name}}</b></code></a></td>
            <td>{{item.desc}}</td>
            <td>
                <a href="https://github.com/{{item.project}}/{{item.name}}/actions"><img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2F{{item.project}}%2F{{item.name}}%2Fbadge&style=flat"></a>
                <br/><a href="https://github.com/{{item.project}}/{{item.name}}/releases"><img src="https://img.shields.io/github/release/{{item.project}}/{{item.name}}.svg"></a>
            </td>
        </tr>
    {% endfor %}
    </tbody>
    
</table>


## Tools

<table>
    <thead>
        <td>Name</td>
        <td>Description</td>
        <td></td>
    </thead>
    <tbody>
    {% for item in site.data.projects.tools %}
        <tr>
            <td><a href="https://github.com/{{item.project}}/{{item.name}}/blob/master/README.md"><code><b>{{item.name}}</b></code></a></td>
            <td>{{item.desc}}</td>
            <td>
                <a href="https://github.com/{{item.project}}/{{item.name}}/actions"><img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2F{{item.project}}%2F{{item.name}}%2Fbadge&style=flat"></a>
                <br/><a href="https://github.com/{{item.project}}/{{item.name}}/releases"><img src="https://img.shields.io/github/release/{{item.project}}/{{item.name}}.svg"></a>
            </td>
        </tr>
    {% endfor %}
    </tbody>
    
</table>

