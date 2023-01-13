const express = require('express');
const request = require('supertest');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

mongoose.set('strictQuery', false);
dotenv.config();

const { DB_HOST, PORT = 3000, SECRET_KEY } = process.env;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth/login', require('./login'));

let server;
let loginResponse;

// Describe test logic
describe('test login controllers', () => {
  beforeAll(() =>
    mongoose
      .connect(DB_HOST)
      .then(() => {
        server = app.listen(PORT);
      })
      .catch(error => {
        console.log(error.message);
        process.exit(1);
      })
  );

  afterAll(() => {
    server.close();
  });

  test('status code', async () => {
    const requestBody = {
      email: 'exampleForTest@test.com',
      password: '12345678',
    };
    loginResponse = await request(app)
      .get('/api/auth/login')
      .send(requestBody)
      .set('Accept', 'application/json');
    expect(loginResponse.status).toBe(200);
  });

  test('verify token', () => {
    const token = loginResponse.body.data.token;

    jwt.verify(token, SECRET_KEY);
  });

  test('checking response body', () => {
    const { email, subscription, avatarURL } = loginResponse.body.data.user;

    expect(typeof email).toBe('string');
    expect(typeof subscription).toBe('string');
    expect(typeof avatarURL).toBe('string');
  });
});
