const express = require('express');
const request = require('supertest');

const getAllContacts = require('./getAll');

const app = express();

app.get('/api/contacts', getAllContacts);

describe('test getAllContacts controllers', () => {
  beforeAll(() =>
    app.listen(3000, () => {
      console.log('Server running. Use our API on port: 3000');
    })
  );

  // afterAll(() => process.exit(1));

  test('status code', async () => {
    const res = await request(app).get('/api/contacts');
    console.log(res.status);
    expect(res.status).toBe(200);
  });
});
