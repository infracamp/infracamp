---
title: Kasimir JavaScript Libraries
layout: scrollspy
description: |
    A browser-side template system library. Nothing more.
    Small footprint. Oriented on angular / vuejs templates.
    Maintain existing objects.
    Complete eval'ed() javscript expressions wherever possible
    Based on web components
    Fits into one ethernet frame (1500 Byte) when gzip handler is active
---
<script>this.customElements||document.write('<script src="//unpkg.com/document-register-element"><\x2fscript>');</script>
<script src="//unpkg.com/@ungap/custom-elements-builtin"></script>

<script src="lib/kasimir-tpl.js"></script>
<script src="lib/kasimir-form.js"></script>
<script type="application/javascript" src="lib/w3codecolor.js"></script>
<link rel="stylesheet" href="lib/docs.css">

## Render Template

Some Updates


<template is="ka-include" src="tpl/main_expl1.html" auto="" raw=""></template>

<template is="ka-include" src="tpl/auto_time.html" auto="" raw=""></template>


## Data Forms

Welcome

<template is="ka-include" src="form/form-expl1.html" auto="" raw=""></template>


<template is="ka-include" src="form/form-expl2.html" auto="" raw=""></template>

## General Tools

General