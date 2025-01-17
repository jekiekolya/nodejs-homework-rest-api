# Phone book REST API

REST API for controlling your phone book.

## Overview

There is a public REST API for controlling your phone book. To implement this
project were used Data Base [MongoDB](https://account.mongodb.com/). For public
access to the server (hosting) was used the service -
[Render](https://render.com/).

:sunglasses::rocket: You can use all HTTP requests in
[Swagger](https://swagger-phonebook-by-jekiekolya.onrender.com/docs/#/) or the
public workplace by POSTMAN -
[REST API by Jekiekolya](https://www.postman.com/winter-firefly-414317/workspace/rest-api-by-jekiekolya/collection/23575916-dbf7edac-7ee9-4f8c-9a3f-455621620422?action=share&creator=23575916)

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
      avatarURL: '//www.gravatar.com/avatar/23463b99b62a72f26ed677cc556c44e8',
      subscription: 'starter',
      verificationToken: '1k4dz29ld1ralye',
    },
  },
};
```

### Verification user email

**Method -** `GET`\
**Path -** `/api/auth/verify/{verificationToken}`\

**Example answer:**

```javascript
{
  status: 'success',
  code: 201,
  data: {
      message: 'Verification successful',
  },
};
```

### Update verification user email (Use it for resent letter with verification user email)

**Method -** `POST`\
**Path -** `/api/users/verify`\
**Example body:**

```javascript
{
    "email": "example@example.com",
}
```

**Example answer:**

````javascript
{
  status: 'success',
  code: 200,
  data: {
    user: {
      email: 'example@example.com',
      verificationToken: '1k4dz29ld1ralye',
    },
    message: "A verification letter was sent to the email - example@example.com",
  },
};

### Login user

**Method -** `POST`\
**Path -** `/api/auth/login`\
**Example body:**

```javascript
{
    "email": "example@example.com",
    "password": "123456"
}
````

**Example answer:**

```javascript
{
  status: 'success',
  code: 200,
  data: {
    user: {
      email: 'example@example.com',
      subscription: 'starter',
      avatarURL: '//www.gravatar.com/avatar/23463b99b62a72f26ed677cc556c44e8',
    },
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzNlZDdhZDgwN2JjMjgzOTk4Y2UyYyIsImlhdCI6MTY3Mzc4NDc2MiwiZXhwIjoxNjczNzg4MzYyfQ.gkvHFaL3a8pKOa-Z0zooHoJuRAKFONj7feaiEzaS4Co',
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

### Update avatar for user

**Method -** `PATCH`\
**Path -** `/api/users/avatars`\
**Headers -** `Authorization: Bearer {Token}`\
**Example body (Form-data):**

```javascript
{
    "avatar": SELECTED-FILE
}
```

**Example answer:**

```javascript
{
  status: 'success',
  code: 200,
  data: {
    avatarURL:
      'https://res.cloudinary.com/dpvkleqce/image/upload/v1673785351/avatars_phonebook/jdiqgiz8wlagptuqlekr.jpg',
  },
};
```

For saving avatars, was used **Cloudinary.com**

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
