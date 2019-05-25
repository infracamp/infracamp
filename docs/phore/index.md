---
title: Phore Microservice Framework for PHP >7.2
layout: scrollspy

description: Phore is a loosely coupled modular framework for PHP7.2+ cloud-based microservice applications. Librarys have few dependencies and can installed using composer.
og_description: Phore libraries are optimized for development performance, a steep learning-curve and security in highly scalable cluster configurations for IoT and BigData setups.
---

# Phore Microservice Framework for PHP 7.2

Why another framework? Popular PHP Frameworks are monoliths. You need months to
fully understand what happens behind the scenes.

We try to build loosely coupled packages that do no more than they should do.
And should be easily and secure to handle by professionals and beginners.

See the [core concepts page](concepts) for more information.

## General Usage

All packages are build to be installed using [composer](http://getcomposer.org) and
work inside Docker/-Containers.

```bash
composer require phore/phore-core
```

## HTTP Client <small>phore/http-client</small>

[![Project page](https://img.shields.io/badge/info-readme-blue.svg)](https://github.com/phore/phore-http-client)

> **phore/http-client** is a core library when doing microservices. This library
> is used whenever one microservice connects to another. You'll save yourself a lot
> of time looking at the rich examples.

This script will load the html-contents of a remote url. It is a wrapper around
the popular [cURL](https://www.php.net/manual/en/book.curl.php) library.

**Basic Example**

```php
echo phore_http_request("https://infracamp.org")->send()->getBody();
```

**Extended example**

```php
try {
    $response = phore_http_request("http://server.tld/{param}/load", ["param" => "some unencoded string"])
        ->withPostBody(["some"=>"data"])                // Set Request-Method to POST and attach parameter as JSON Data
        ->withQueryParams(["param1"=>"value1"])         // Append ?param1=value1 to the URL
        ->send();
        
} catch (PhoreHttpRequestException $e) {
    // Catch HTTP Error Response types
    echo "Error: $e->getCode() returned. $e->getResponse()->getBody()";
    exit(1);
}
$respones->getHeader("Expires");
$data = $response->getBodyJson();                       // Parse the JSON Body
```

Other features:
- [Parallel requests]() 
- [Authentication Basic/Bearer]()
- [Error handling]()



## Sending Mails <small>phore/mail</small>

[![Project page](https://img.shields.io/badge/info-readme-blue.svg)](https://github.com/phore/phore-mail)

A wrapper around the famous [PHPMailer](https://github.com/PHPMailer/PHPMailer) library combining it with
the powerful and secure [TextTemplate](https://github.com/dermatthes/text-template) template system.

**Basic example**

```php
$mailer = new PhoreMailer();
$mailer->send();
```

- [SMTP Authentication and multple (failover) Mailservers](https://github.com/phore/phore-mail/blob/master/docs/smtp-auth-demo.php)
- [Sending a template](https://github.com/phore/phore-mail/blob/master/docs/setting-charset.php)
- [Sending multipath / html mail](https://github.com/phore/phore-mail/blob/master/docs/simple-demo.php)


## HTML Elements <small>phore/html</small>

[![Project page](https://img.shields.io/badge/info-readme-blue.svg)](https://github.com/phore/phore-html)

Plain-text html is a pain. phore/html is a fluent api for generating fast and secure pages.


**Basic example**

```php
echo fhtml("div @class=some_class @style=display:none");
```

```html
<div class="some_class" style="display:none"></div>
```

**Complex example**

```php

$p = fhtml(["div @class=text" => ["b" => "some text here"]])
$p["div"] = [
    "a @href=http://link.tld" => "Click here"
];
```

```html
<div class="text">
    <b>some text here</b>
    <div>
        <a href="http://link.tld">Click here</a>
    </div>
</div>

```

- Auto-Escaping
- Altering documents


## Execute external programs <small>phore/system</small>

[![Project page](https://img.shields.io/badge/info-readme-blue.svg)](https://github.com/phore/phore-html)

> `exec()`, `system()`, `passthrou()`, `popen()` are very dangerous and complex functions when dealing with
> user-data. This library makes usage easy and helps escaping the phore escaping system.

**Basic example**

```php
echo phore_exec("ls -l :path", ["path" => "unescapedFilename"]);
```

**Complex example**

```php
try {
    $result = phore_proc("ls -l :path", ["path" => "unescapedFilename"])->wait();
    echo "Stdout: " . $result->getSTDOUTContents();
    echo "StdErr: " . $result->getSTDERRContents();
} catch (\Exception $e) {
}
```

- Accessing STDIN/STDERR 
- Stream reading
- Executing parallel commands


## Manage git/svn - repositories <small>phore/vcs</small>

[![Project page](https://img.shields.io/badge/info-readme-blue.svg)](https://github.com/phore/phore-vcs)

A wrapper around the [git]() command to push/pull/commit repositories using ssh-auth.

**Basic example**

```php
$vcsFactory = new VcsFactory();
$repository = $vcsFactory->repository("/tmp/repo", "git@github.com:phore/phore-vcs.git");
$repository->pull();
$repository->commit("my commit message here");
$repository->push();
```

## Micro-App Framework <small>phore/micro-app</small>

[![Project page](https://img.shields.io/badge/info-readme-blue.svg)](https://github.com/phore/phore-micro-app)

> A small microservice / container ready framework. 
>
> A skeleton project exists for kickstart. Run `./kickstart.sh skel install php-app-base` to install
> a out of the box base application with kickstart. 

- Routing
- Dependency Injection
- Content Handling
- Access Control lists
- Error Handling
- Events


## Core library <small>phore/core</small>

[![Project page](https://img.shields.io/badge/info-readme-blue.svg)](https://github.com/phore/phore-core)

> A project with libraries used by other packages. You should know the
> basics of this project

**phore_out([string $msg, [$return=false]])**

Simple logging function. Alternative to `echo`.

**phore_pluck(mixed $key, mixed $input [, $default])**

Tiered of doing `if(isset())`- constructs when parsing structs? `phore_pluck()` returns
the value of the data-path specified in $key. If path was not found, it returns `$default`.
(See [Concepts: $default](concepts))

```php
$data = ["some"=>["path"=>"data"]];
assert( "data" === phore_pluck("some.path", $data) );
```

- `startsWith() : bool`: Check if string starts with an other string
- `endsWith() : bool`: Check if a string ends with an other string
- `phore_random_str() : string`: Generate encyption-grade random string
- `phore_text_unindent() : string`: Unindent a text
- `phore_array_transform() : array`: Transform input array to another array
- `phore_escape() : string`: The phore flexible escaping api.
- `phore_json_pretty_print()`: Print json-string pretty formated
- `phore_json_encode($input) : string`: Encode data to json
- `phore_json_decode(string $input) : array`: Decode json string or throw exception

**Exceptions**

- `PhoreException`: Phore internal Exception
    - `InvalidDataException`: Should be thrown if user input is invalid
    - `NotFoundException`: Thrown if a key/entity/file was not found
