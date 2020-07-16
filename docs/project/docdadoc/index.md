# Project Name

There is only one h1 element per page. Here is short
abstract about the project.

**Table of Contents**

1. [Installation](#installation)
2. [Api](#api)
3. [Rest API](#rest-api)
4. [Contributing]()

## Installation

    provide some shell script

## Api

### connect

**Description:** Remove all keys from the current database.

#### Parameters

- *host*: string. can be a host, or the path to a unix domain socket. Starting from version 5.0.0 it is possible to specify schema 
- *port*: int, optional  
- *timeout*: float, value in seconds (optional, default is 0 meaning unlimited) 

#### Return values

BOOL: `true` if success, `false` else.

#### Examples

```php
$some = example("code");
```

Output:

```
Some Output
```

[See example connect](examples/connect)



## Rest Api

For more complex Apis, the documentation should be
split for each route. This makes it easier to get an
overview.

### Open Endpoints

- [Show info](api-show-info.md): `GET /v1/show/:user`

### Endpoinds that require Authentication

- [Show info](api-show-info.md): `GET /v1/show/:user`
- [Show info](api-show-info.md): `GET /v1/show/:user`


