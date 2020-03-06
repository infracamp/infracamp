# Login

Used to collect a Token for a registered User.

**URL** : `/api/login/:user`

**Method** : `POST`

**Auth required** : NO

## Request

### Path parameters

- *user*: string, the client id to provide

### Headers

### Query Parameters

### Form Data Parameters

### Body Parameters

**Data constraints**

```json
{
    "username": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "username": "iloveauth@example.com",
    "password": "abcd1234"
}
```
## Response

### 200 OK

**Code** : Data was successful received

**Content example**

```json
{
    "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d"
}
```

### 500 Internal Server Error

**Condition** : If 'username' and 'password' combination is wrong.

**Content** :

```json
{
    "non_field_errors": [
        "Unable to login with provided credentials."
    ]
}
```

## Example

**Send request with curl**
```bash
curl http://localhost/v1/wurst
```
**Response:**

```

```


