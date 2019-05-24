# Developing arm32 on x86 

We recommend using qemu-multiarch to execute arm32 containers on x86 
computers.

kickstart.sh will automaticly detect the plattform and ask you if it should run `multiarch/qemu-user-static`.

## Building arm32 

Building on ci-platforms will require the same qemu/multiarch libs to be present.
The sections below show, how to enable it for various platforms.

It is also required to add `qemu-arm-static` to `/usr/bin/qemu-arm-static`. This
is already done in `infracamp/kickstart-flavor-arm32v7-base`.

**hub.docker.com**

Create a file `hooks/pre_build`, make it executable (`chmod 755 hooks/pre_build`).

```
#!/bin/bash
# Register qemu-*-static for all supported processors except the
# current one, but also remove all registered binfmt_misc before
docker run --rm --privileged multiarch/qemu-user-static:register --reset
```