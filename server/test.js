const request = require('supertest');
const app = require('./server');

describe('Test the root path', () => {
<<<<<<< HEAD
  test('It should response the GET method', async () => {
    const response = await request(app).get('/events');
    expect(response.statusCode).toBe(200);
  });
=======
    test('It should response the GET method', async () => {
        const response = await request(app)
        .get('/events');
        expect(response.statusCode)
        .toBe(200);

    });
});

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app)
        .get('/');
        expect(response.statusCode)
        .toBe(404);

    });
>>>>>>> test: added a test for the route / 404
});
