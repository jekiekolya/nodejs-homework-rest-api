const express = require('express');
const request = require('supertest');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth/login', require('./login'));

let server;
describe('test login controllers', () => {
  beforeAll(() => (server = app.listen(3000)));

  afterAll(() => {
    server.close();
  });

  test('status code', async () => {
    const requestBody = {
      email: 'bogdan1@gmail.com',
      password: '123456',
    };
    const res = await request(app)
      .get('/api/auth/login')
      .send(requestBody)
      .set('Accept', 'application/json');
    console.log(res.status);
    // expect(res.status).toBe(404);
  });
});
