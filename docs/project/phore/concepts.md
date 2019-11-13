---
title: Phore Library - core concepts, design goals
description: |
    Building a modularized php library for microservice development. The
    key features are: Loosely coupled elements, strong testing, flat responsibility,
    strong orientation on PSR
---


## $default - Setting Default values / throwing exceptions

Methods return values like `get($key [, $default = null])` should provide a `$default`-Parameter which
value will be returned if the key was not found.

The default `$default`-Value should be `null`, so null is returned if the Key was not found.

If `$default` is a Object extending `Exception`-Class this exception will be thrown:

**Example**

```php
$entity->get("key1", null);
$entity->get("key1", "some Value");
$entity->get("key1", new InvalidDataException("Key $key1 not found"));
```

**Used by**

```php
phore_pluck()
...
```


## *with*Xy() - Method <small>create clone with different option</small>


## method($command [, array $params]) <small>Quick escaping syntax</small>

Methods/functions expecting escaped input, offer escaping parameters


```php
phore_http_request("http://some.tld/{arg1}/{arg2}", ["arg1"=>"unescaped Input", "arg2" => ""]);
phore_http_request("http://some.tld/?", ["unescaped input"]);

phore_exec("ls -l {arg1}", ["arg1"=>"some value"]);

```


## *phore_xy()* - Prefiing <small>function prefixing</small>

To optimize ide-code-assistence, all functions should be prefixed with `phore_`.

