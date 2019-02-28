---
layout: default
title: Test e-Mail with free api
---

## TL;DR;

When to use this service:
- Unittest outbound E-Mail (Online-Shops, etc)
- Test outbound Mail servers

Short function:
- You request a tempoary E-Mail Address (valid for 10 Minutes)
- You can request all incoming mails easily using our HTTP REST API

## API


### Register a tempoary E-Mail Account

Register a temporary E-Mail Address (valid for 10 Minutes)

**Request:**
```
GET http://mailtest.infacamp.org/createTestAddress
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




## Contribute

Do you want to help developing this service? It's open source and 
fully integrated in our continuous integration pipeline. See the
projects github page: