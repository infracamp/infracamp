---
layout: default
title: Getting Started with kickstart
---
# Kickstart

`kickstart.sh` is a wrapper around `docker run` to provide a easy-to-use container running, upgrades and deployments.

<div class="alert alert-success shadow">
<h2 class="alert-heading">Quick Access: Download kickstart.sh for your project</h2>
<hr/>
<div class="row">
<div class="col col-9 col-md-11" markdown="1">

<div class="form-group">
<input type="text" class="form-control" readonly id="kick_text" value="curl -o kickstart.sh 'https://raw.githubusercontent.com/infracamp/kickstart/master/dist/kickstart.sh' && chmod +x kickstart.sh"/>
</div>


</div>

<div class="col col-3 col-md-1">
<button id="kickstart-code-copy" class="btn btn-primary" title="Copy code to clipboard" onclick="$('#kick_text').select();document.execCommand('copy');">
    <i class="fas fa-copy"></i>
</button>
</div>
</div>
<small>
    This code requires <code>curl</code> to be installed on your computer. On debian type <code>sudo apt install curl</code> to install.
</small>
</div>


## Step 1: Install docker 

Kickstart requires [Docker](http://docker.io) to be installed on your system for orchestration. See our best practice
installation how-tos for various platforms: 

- [**Windows** 8/10 or **any OS** using VirtualBox (kickguest)](../projects/kickguest-virtualbox/)
- [**Linux** (Debian/Ubuntu) or **MacOS** native Installation](../projects/install_linux_mac.html)


## Step 2: Clone the demo repository

<div class="alert alert-info" role="alert">
<small markdown="1">

This step requires [git](https://git-scm.com). For your convenience, git is already included in our
[VirtualBox](../projects/kickguest-virtualbox/) images. So you don't need to install it your own. 

</small>
</div>

Clone the [kickstart-demo](https://github.com/infracamp/kickstart-demo) project from github by running:

```bash
git clone https://github.com/infracamp/kickstart-demo.git
```


You'll have a new directory `/kickstart-demo`. Change to this directory by typing `cd kickstart-demo`.


## Step 3: Run kickstart

To run the demo-project inside a container, just type

```bash
./kickstart.sh
```

Open your browser and open `http://localhost` (Native install / Linux / MacOS) or `http://local.infracamp.org` (Windows 10).

Open the file `www/index.php` and change something. Save the file and reload the browser-page: Your changes take
effect immediately.



