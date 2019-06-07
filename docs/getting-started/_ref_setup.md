
# Copy'n'Paste setup

Setting up a new workstation is no big deal. You don't need dependent sdks, libraries and tools.

The only required software is part of featured linux distributions.


## Setup your workstation <small>on Debain/Ubuntu, [see here for other platforms](setup/)</small>

<pre>
<code data-toggle="tooltip" data-placement="left" 
title="Install required packages"
>sudo apt-get update && sudo apt-get install -y docker.io curl git ssh</code>
<code data-toggle="tooltip" data-placement="left" 
title="Add your normal user to docker group so you can execute docker without root priveleges"
>sudo gpasswd -a $USER docker</code>
<code data-toggle="tooltip" data-placement="left" 
title="Set your user name for git commit messages"
>git config --global user.name "John Doe"</code>
<code data-toggle="tooltip" data-placement="left" 
title="Set your email address for git commit messages"
>git config --global user.name "johndoe@example.com"</code>
<code data-toggle="tooltip" data-placement="left" 
title="We suggest this flat directory as root for all of your projects"
>mkdir -p $HOME/Projects</code>
<code data-toggle="tooltip" data-placement="left" 
title="Create a ssh key to access git repositories. Select a good password."
>ssh-keygen -t ed25519 && cat $HOME/.ssh/id_ed25519.pub</code>
</pre>

The last command will output your *public ssh key*:

```
ssh-ed25519 AAA..............some..more..chars...........J3jAPTge jondoe@example
```

Add this key to your favorite development platform:
- [github.com](https://github.com): <kbd>Personal settings</kbd> > <kbd>SSH and GPG Keys</kbd> > <kbd>New SSH key</kbd>
- [gitlab.com](https://gitlab.com): <kbd>User Settings</kbd> > <kbd>SSH Keys</kbd>

Finally install your favorite IDE. And that's it.

