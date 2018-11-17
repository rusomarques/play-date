const request = require('supertest');
const app = require('./../server');
const eventWithErrors = require('./single-event');
const db = require('./../models');
const mocks = require('./mocks/mocks');

describe('Creating new event', () => {
  let event;

  afterEach(async () => {
    await eventWithErrors.down(event.id);
  });

  afterAll(async () => {
    await db.sequelize.close();
  });

  it('creating event should return response status 200', async () => {
    const response = await request(app)
      .post('/events')
      .send(mocks.correctEvent);
    event = response.body;
    expect(response.status).toEqual(200);
  });

  it('trying to creat event without required input should return 400', async () => {
    const response = await request(app)
      .post('/events')
      .send(mocks.eventWithErrors);
    event = response.body;
    expect(response.status).toEqual(400);
  });

  it('if the input does not fulfuill requirements, it should return an array of error messages', async () => {
    const response = await request(app)
      .post('/events')
      .send(mocks.eventWithErrors);
    event = response.body;
    expect(response.body).toEqual(mocks.messageEventWithErrors);
  });

  it('if required field is not post to create event (value === null), it should return an array with error message', async () => {
    const response = await request(app)
      .post('/events')
      .send(mocks.eventWithNulls);
    event = response.body;
    expect(response.body).toEqual(mocks.messageEventWithNulls);
  });
});
