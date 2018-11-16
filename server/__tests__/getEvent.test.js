const request = require('supertest');
const app = require('../server');
const singleEventWithErrors = require('./singleEvent.test');
const db = require('../models/index');

describe('test', () => {
  let event;
  beforeEach(async () => {
    event = await singleEventWithErrors.up();
  });

  afterEach(async () => {
    await singleEventWithErrors.down(event.id);
  });

  afterAll(async () => {
    await db.sequelize.close();
  });

  it('runs migrations', async () => {
    const response = await request(app).get(`/events/${event.id}`);
    expect(response.body.title).toEqual(event.title);
  });
  it('return answer 200 on events route', async () => {
    const response = await request(app).get('/events');
    expect(response.statusCode).toBe(200);
  });
  it('return list of events on events route', async () => {
    const response = await request(app).get('/events');
    expect(response.body[0].title).toEqual(event.title);
  });
  it('return a 404 page not exist message on a wrong route', async () => {
    const response = await request(app).get('/*');
    expect(response.text).toEqual('page not found');
  });
});
