# Phone book REST API

REST API for controlling your phone book.

## Overview

There is a public REST API for controlling your phone book. To implement this
project were used Data Base [MongoDB](https://account.mongodb.com/). For public
access to the server (hosting) was used the service -
[Render](https://render.com/).

:male-astronaut: You can use all HTTP requests in the public workplace by
POSTMAN -
[REST API by Jekiekolya](https://elements.getpostman.com/redirect?entityId=23575916-a3bcd6b0-da4f-402c-8841-fdc3650c4ad2&entityType=collection)

# How work with this REST API?

## API base URL

```bash
https://phonebook-mongodb.onrender.com
```

## Authentication

### Register user

**Method -** `POST`\
**Path -** `/api/auth/register`\
**Example body:**

```javascript
{
    "email": "example@example.com",
    "password": "123456"
}
```

**Example answer:**

```javascript
{
  status: 'success',
  code: 201,
  data: {
    user: {
      email: 'example@example.com',
      subscription: 'starter',
    },
  },
};
```

### Login user

**Method -** `GET`\
**Path -** `/api/auth/login`\
**Example body:**

```javascript
{
    "email": "example@example.com",
    "password": "123456"
}
```

**Example answer:**

```javascript
{
  status: 'success',
  code: 200,
  data: {
    user: {
      email: 'example@example.com',
      subscription: 'starter',
    },
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWI1MWY5MDU2MGY0Y2MyMWViZGYxOCIsImlhdCI6MTY3MjE3MjMwMCwiZXhwIjoxNjcyMTc1OTAwfQ.tdyqNfPfS_qa9ND8jkByf6WJp8ygLe21aykIig-MiZ0',
  },
};
```

:boom: Save your 'token' for the next steps.

### Logout user

**Method -** `POST`\
**Path -** `/api/auth/logout`\
**Headers -** `Authorization: Bearer {Token}`\
**Example answer:**

```javascript
204 No Content
```

## Users requests

### Get current user

**Method -** `GET`\
**Path -** `/api/users/current`\
**Headers -** `Authorization: Bearer {Token}`\
**Example answer:**

```javascript
{
  status: 'success',
  code: 200,
  data: {
    user: {
      _id: '63ab51f90560f4cc21ebdf18',
      email: 'example@example.com',
      subscription: 'starter',
    },
  },
};
```

### Update subscription for user

**Method -** `PATCH`\
**Path -** `/api/users/subscription`\
**Headers -** `Authorization: Bearer {Token}`\
**Example body:**

```javascript
{
    "subscription": "pro"
}
```

**Example answer:**

```javascript
{
  status: 'success',
  code: 200,
  data: {
    user: {
      _id: '63ab51f90560f4cc21ebdf18',
      email: 'example@example.com',
      subscription: 'pro',
    },
  },
};
```

## Contacts requests

### Get all contacts

**Method -** `GET`\
**Path -** `/api/contacts`\
**Headers -** `Authorization: Bearer {Token}`\
**Example answer:**

```javascript
  {
  status: 'success',
  code: 200,
  data: {
    contacts: [
      {
        _id: '63ab5d8b92ae89f0b7efe633',
        name: 'Allen Raymond',
        email: 'nulla.ante@vestibul.co.uk',
        phone: '(992) 914-3792',
        favorite: false,
        owner: {
          _id: '63ab51f90560f4cc21ebdf18',
          email: 'example@example.com',
          subscription: 'pro',
        },
        createdAt: '2022-12-27T21:03:07.903Z',
        updatedAt: '2022-12-27T21:03:07.903Z',
      },
      {
        _id: '63ab5da792ae89f0b7efe636',
        name: 'Chaim Lewis',
        email: 'dui.in@egetlacus.ca',
        phone: '(294) 840-6685',
        favorite: false,
        owner: {
          _id: '63ab51f90560f4cc21ebdf18',
          email: 'example@example.com',
          subscription: 'pro',
        },
        createdAt: '2022-12-27T21:03:35.122Z',
        updatedAt: '2022-12-27T21:03:35.122Z',
      },
      {
        _id: '63ab5dc892ae89f0b7efe639',
        name: 'Kennedy Lane',
        email: 'mattis.Cras@nonenimMauris.net',
        phone: '(542) 451-7038',
        favorite: false,
        owner: {
          _id: '63ab51f90560f4cc21ebdf18',
          email: 'example@example.com',
          subscription: 'pro',
        },
        createdAt: '2022-12-27T21:04:08.101Z',
        updatedAt: '2022-12-27T21:04:08.101Z',
      },
    ],
  },
};
```

:boom: Also, you can use query string for **pagination**
`{{host}}/api/contacts?page=3&limit=2` or for **filter** your favorite contacts
`{{host}}/api/contacts?favorite=true`.

### Get contact by ID

**Method -** `GET`\
**Path -** `/api/contacts/{contactId}`\
**Headers -** `Authorization: Bearer {Token}`\
**Example answer:**

```javascript
  {
  status: 'success',
  code: 200,
  data: {
    contact: {
      _id: '63ab5dc892ae89f0b7efe639',
      name: 'Kennedy Lane',
      email: 'mattis.Cras@nonenimMauris.net',
      phone: '(542) 451-7038',
      favorite: false,
      owner: {
        _id: '63ab51f90560f4cc21ebdf18',
        email: 'example@example.com',
        subscription: 'pro',
      },
      createdAt: '2022-12-27T21:04:08.101Z',
      updatedAt: '2022-12-27T21:04:08.101Z',
    },
  },
};
```

### Add contact

**Method -** `POST`\
**Path -** `/api/contacts/`\
**Headers -** `Authorization: Bearer {Token}`\
**Example body:**

```javascript
{
    "name": "Jekie Kolya",
    "email": "Jekie@gmail.com",
    "phone": "(097) 678-0388"
}
```

**Example answer:**

```javascript
  {
  status: 'success',
  code: 201,
  data: {
    addedContact: {
      name: 'Jekie Kolya',
      email: 'Jekie@gmail.com',
      phone: '(097) 678-0388',
      favorite: false,
      owner: '63ab51f90560f4cc21ebdf18',
      _id: '63ab616992ae89f0b7efe644',
      createdAt: '2022-12-27T21:19:37.781Z',
      updatedAt: '2022-12-27T21:19:37.781Z',
    },
  },
};
```

### Update contact by ID

**Method -** `PUT`\
**Path -** `/api/contacts/{contactId}`\
**Headers -** `Authorization: Bearer {Token}`\
**Example body:**

```javascript
{
    "name": "NEW Jekie Kolya",
    "email": "Jekie@gmail.com",
    "phone": "(097) 678-0388"
}
```

**Example answer:**

```javascript
 {
  status: 'success',
  code: 200,
  data: {
    updatedContact: {
      _id: '63ab616992ae89f0b7efe644',
      name: 'NEW Jekie Kolya',
      email: 'Jekie@gmail.com',
      phone: '(097) 678-0388',
      favorite: false,
      owner: '63ab51f90560f4cc21ebdf18',
      createdAt: '2022-12-27T21:19:37.781Z',
      updatedAt: '2022-12-27T21:21:28.658Z',
    },
  },
};
```

### Update favorite status for contact by ID

**Method -** `PATCH`\
**Path -** `/api/contacts/{contactId}/favorite`\
**Headers -** `Authorization: Bearer {Token}`\
**Example body:**

```javascript
{
    "favorite": true
}
```

**Example answer:**

```javascript
{
  status: 'success',
  code: 200,
  data: {
    updatedContact: {
      _id: '63ab616992ae89f0b7efe644',
      name: 'NEW Jekie Kolya',
      email: 'Jekie@gmail.com',
      phone: '(097) 678-0388',
      favorite: true,
      owner: '63ab51f90560f4cc21ebdf18',
      createdAt: '2022-12-27T21:19:37.781Z',
      updatedAt: '2022-12-27T21:39:29.798Z',
    },
  },
};
```

### Delete contact by ID

**Method -** `DELETE`\
**Path -** `/api/contacts/{contactId}`\
**Headers -** `Authorization: Bearer {Token}`\
**Example answer:**

```javascript
{
  status: 'success',
  code: 200,
  message: 'contact deleted',
}
```

### Good luck :santa: !!!
