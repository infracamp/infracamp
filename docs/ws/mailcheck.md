---
layout: ws-default
title: Mailtest - Free test endpoint for outbound mails
description: |
    Free testing webservice for outbound e-mails. Retrieve a tempoary e-mail address, send mail to 
    it and retrieve the contents of it
    with a simple REST Api call. E-Mail Unit-Test endpoint for outbound mail servers or
    mail sending applications.
---


<div class="alert alert-success">
This is a <b>free</b> service. <b>No registration is required </b>to use this service. <i>Service limits: 
10 Requests per Minute per IP. Mail size limit: 200kb</i>
</div>

<div class="alert alert-info">
This service is open-source. Help improving this service. The source code is available on github.
</div>

Register a tempoary e-Mail address (e.g. `imt-28Xz5B3A@imt.ws.infracamp.org`) by calling `https://imt.ws.infracamp.org/v1/register`.
Send a mail over your mailserver. Wait a few seconds for the message to arrive. Download the message by calling `https://imt.ws.infracamp.org/v1/load/<email>`.


## TL;DR;

A simple test-script for your outgoint mailservers look like:


```bash
#!/bin/bash

mail_to=$(curl "https://imt.ws.infracamp.org/v1/acquire")

sendmail -t $mail_to -s "testmail" -m "Message body"

sleep 10

mail=$(curl "https://imt.ws.infracamp.org/v1/get/$mail_to") || echo "Error: No Mail received!"

```

## API


### Register a tempoary E-Mail Account

Register a temporary E-Mail Address (valid for 10 Minutes)

**Request:**
```
GET http://mailtest.infacamp.org/aquire
```

Response:
```
test-X73kk20jhBb@mailtest.infracamp.org
```

The tempoary E-Mail Address to send mail to.

### View received Messages

**Request:**
```
GET: http://mailtest.infracamp.org/test-X73kk20jhBb@mailtest.infracamp.org
```

**Response:**

```json
{
  "message_count": 2,
  "messages": [
    
  ]
}
```


## Related services

- **[Inbound Mail Http Relay (IMHR)]()** - Send incoming emails to a http(s) webservice.
- **[Timeout Notifier (TN)]()** - Send a message when a url was not called for a defined period of time. (System check)


## Contribute

Do you want to help developing this service? It's open source and 
fully integrated in our continuous integration pipeline. See the
projects github page: