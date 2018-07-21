---
layout: default
title: kickstart container runner
---
# Kickstart

`kickstart.sh` is a bash-script you might want to include in your projects. It is
a easy-to-use wrapper to the `docker`-command, to help you develop awesome software.

It uses the projects `.kick.yml` as configuration file.

## Download / install kickstart

**Copy'n'Paste installer script**: (execute as user in your project-directory)

```bash
curl -o kickstart.sh "https://raw.githubusercontent.com/infracamp/kickstart/master/dist/kickstart.sh" && chmod +x kickstart.sh
```
<p id="kickstart-code" style="display:none">
curl -o kickstart.sh "https://raw.githubusercontent.com/infracamp/kickstart/master/dist/kickstart.sh" && chmod +x kickstart.sh
</p>

<button id="kickstart-code-copy" class="btn btn-primary" title="Copy code to clipboard">
    <i class="fas fa-copy"></i>
</button>
<link rel="import" href="/component/copy-paste.html">

The script will save [kickstart.sh](https://raw.githubusercontent.com/infracamp/kickstart/master/dist/kickstart.sh) to the
current directory and set the executable bit.

**Run kickstart:**
```bash
./kickstart.sh
```
