---
layout: ws-default
title: Noop-Alert - Send mail if nothing happens for a desired time
---

## TL;DR;

Sometimes you want to be informed if things don't happen. E.g. a cronjob
stopped working, a script doesn't finish.

Noop service informs you, if a specified url wasn't called for a longer
time.



## API

### Register the service

- Use the following form to register up to 3 E-Mail addresses
- Confirm you are owner of the E-Mail Addresses
- You'll find the trigger-URL in the Body of the mail


### Pull the service

```
POST: http://noop.infracamp.org/group-28hlkhe0nsli4hh/timeout-name1?timeout=3600&trigger_url=&email_subject=&email_body=
```


