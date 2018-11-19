const request = require('supertest');
const app = require('../server');
const singleEventWithErrors = require('./single-event');
const db = require('../models/index');

describe('events', () => {
  let event;
  describe('no results', () => {
    it('return an empty array if no event exists', async () => {
      const response = await request(app).get('/events');
      expect(response.body).toEqual([]);
    });
    it('return nothing if the id is unknown', async () => {
      const response = await request(app).get('/events/9999');
      expect(response.statusCode).toBe(404);
    });
  });

  describe('valid results', () => {
    beforeEach(async () => {
      event = await singleEventWithErrors.up();
    });

    afterEach(async () => {
      await singleEventWithErrors.down(event.id);
    });

    afterAll(async () => {
      await db.sequelize.close();
    });

    it('return the event page if the event id match', async () => {
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
    it('return the event if event match the filter age from', async () => {
      const response = await request(app).get('/events?agefrom=3');
      expect(response.body[0].title).toEqual(event.title);
    });
    it('return the event if event match the filter date', async () => {
      const response = await request(app).get('/events?eventdate=2018-11-16');
      expect(response.body.length).toEqual(1);
    });
  });
});
