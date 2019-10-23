---
layout: ws-default
title: Freestore - Free storage api for json/yaml data
description: |
    Sometimes you just need to store some small metadata (max 50kb) anywhere from your
    microservice. Freestore stores your data securely encrypted for up to 6 months.
---


<div class="alert alert-success">
This is a <b>free</b> service. <b>No registration is required </b>to use this service. <i>Service limits: 
60 Reads per Minute; 10 Sets per minute. Maximal storage ttl: 6 Months</i>
</div>

<div class="alert alert-info">
This service is open-source. Help improving this service. The source code is available on github.
</div>

Just send your json or yaml data as POST request to `https://freestore.ws.infracamp.org/v1/<entity_name>`. Afterwards
you will be able to poll it by requesting the same url.

The data will be encrypted using a <b>secret</b> provided by http basic authentication. All data will
be encrypted using this secret and only available for clients providing exactly this secret.

Objectives:
- Store State data
- Store Service discovery data
- Store encrypted SSL Certificates 

## TL;DR;

A simple script setting json data to the endpoint and returning it.


```bash
#!/bin/bash

# Set the data
curl --data "{some: json-data}" -u yourName:someSecretString https://freestore.ws.infracamp.org/v1/someUniqueKey

# Retrieve the data
echo $(curl -u yourName:someSecretString https://freestore.ws.infracamp.org/v1/someUniqueKey)
```

> If storing mission critical data (SSL-Certificates, etc), we recommend you encrypting
> the data with another key before sending it to our endpoint. This will provide double
> security against sniffing attacks.

## API


### POST Data to Endpoint

Register a temporary E-Mail Address (valid for 10 Minutes)

**Request:**
```
GET https://freestore.ws.infracamp.org/v1/<user_defined_unique_storage_key>
```

OK Response:
```
{success: true}
```

Failed Response:
```
{success: false, msg: "encryption failed: wrong key."}
```

### Retrieve data 

**Request:**
```
GET: https://freestore.ws.infracamp.org/v1/<user_defined_unique_storage_key>
```

**Response:**

```json
{"some": "json message"}
```

## Contribute

Do you want to help developing this service? It's open source and 
fully integrated in our continuous integration pipeline. See the
projects github page: