# Phone book REST API

REST API for controlling your phone book.

## Overview

There is a public REST API for controlling your phone book. To implement this
project were used Data Base [MongoDB](https://account.mongodb.com/). For public
access to the server (hosting) was used the service -
[Render](https://render.com/).

## How work with this REST API?

### API base URL

```bash
https://phonebook-mongodb.onrender.com
```

### Get all contacts

**Method -** `GET`\
**Path -** `/api/contacts`\
**Example answer:**

```javascript
  status: 'success',
  code: 200,
  data: {
    contacts: [
      {
        _id: '63a3847a6db6e38ffadff622',
        name: 'Allen Raymond',
        email: 'nulla.ante@vestibul.co.uk',
        phone: '(992) 914-3792',
        favorite: false,
      },
      {
        _id: '63a3847a6db6e38ffadff623',
        name: 'Chaim Lewis',
        email: 'dui.in@egetlacus.ca',
        phone: '(294) 840-6685',
        favorite: true,
      },
      {
        _id: '63a3847a6db6e38ffadff624',
        name: 'Kennedy Lane',
        email: 'mattis.Cras@nonenimMauris.net',
        phone: '(542) 451-7038',
        favorite: false,
      },
    ],
  }
```

### Get contact by ID

**Method -** `GET`\
**Path -** `/api/contacts/{contactId}`\
**Example answer:**

```javascript
  status: 'success',
  code: 200,
  data: {
    contact: {
      _id: '63a3847a6db6e38ffadff622',
      name: 'Allen Raymond',
      email: 'nulla.ante@vestibul.co.uk',
      phone: '(992) 914-3792',
      favorite: false,
    },
  },
```

### Add contact

**Method -** `POST`\
**Path -** `/api/contacts/`\
**Example body:**

```javascript
{
    "name": "Jekie Kolya",
    "email": "nulla.ante@vestibul.co.uk",
    "phone": "(095) 837-0388"
}
```

**Example answer:**

```javascript
  status: 'success',
  cose: 201,
  data: {
    addedContact: {
      name: 'Jekie Kolya',
      email: 'nulla.ante@vestibul.co.uk',
      phone: '(095) 837-0388',
      favorite: false,
      _id: '63a75c22653787158843d81a',
      createdAt: '2022-12-24T20:08:02.370Z',
      updatedAt: '2022-12-24T20:08:02.370Z',
    },
  }
```

### Update contact by ID

**Method -** `PUT`\
**Path -** `/api/contacts/{contactId}`\
**Example body:**

```javascript
{
    "name": "NEW Jekie",
    "email": "jekiekolya@vestibul.co.uk",
    "phone": "(992) 914-3343"
}
```

**Example answer:**

```javascript
  status: 'success',
  cose: 200,
  data: {
    updatedContact: {
      _id: '63a75c22653787158843d81a',
      name: 'NEW Jekie',
      email: 'jekiekolya@vestibul.co.uk',
      phone: '(992) 914-3343',
      favorite: false,
      createdAt: '2022-12-24T20:08:02.370Z',
      updatedAt: '2022-12-24T20:18:52.530Z',
    },
  }
```

### Update favorite status for a contact by ID

**Method -** `PATCH`\
**Path -** `/api/contacts/{contactId}`\
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
  cose: 200,
  data: {
    updatedContact: {
      _id: '63a47091038e437cb177c215',
      name: 'NEW Jekie',
      email: 'jekiekolya@vestibul.co.uk',
      phone: '(992) 914-3343',
      favorite: true,
      createdAt: '2022-12-22T14:58:25.962Z',
      updatedAt: '2022-12-24T20:24:06.315Z',
    },
  },
};
```

### Delete contact by ID

**Method -** `DELETE`\
**Path -** `/api/contacts/{contactId}`\
**Example answer:**

```javascript
{
  status: 'success',
  code: 200,
  message: 'contact deleted',
}
```

## Good luck :santa: !!!
