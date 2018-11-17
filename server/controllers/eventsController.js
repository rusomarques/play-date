const Sequelize = require('sequelize');
const eventsController = {};
const Op = Sequelize.Op;
const db = require('../models');

const transformEvent = item => {
  return Object.assign({}, item.toJSON(), { coords: [item.lng, item.lat] });
};

const buildWhereQuery = (query, age, date, free) => {
  const where = {};
  if (query) {
    where.title = {
      [Op.iLike]: `%${query}%`
    };
  }

  if (age) {
    where.agefrom = {
      [Op.eq]: `${age}`
    };
  }

  if (date) {
    where.eventdate = {
      [Op.eq]: date
    };
  }
  if (free) {
    where.price = {
      [Op.eq]: '0'
    };
  }
  return where;
};

eventsController.getAll = (req, res) => {
  const query = req.query.q;
  const agefrom = req.query.agefrom;
  const date = req.query.eventdate;
  const free = req.query.price;
  const where = buildWhereQuery(query, agefrom, date, free);

  db.event
    .findAll({ where: where }, { order: [['eventdate', 'ASC']] })
    .then(items => {
      const transformedEvents = items.map(transformEvent);
      res.status(200);
      return res.send(transformedEvents);
    });
};

eventsController.getEvent = (req, res) => {
  db.event
    .findByPk(req.params.id)
    .then(item => {
      const transformedEvent = transformEvent(item);
      res.status(200);
      return res.send(transformedEvent);
    })
    .catch(() => res.status(404).send('from catch'));
};

eventsController.createEvent = (req, res) => {
  const event = req.body;
  const { title, eventdate, location, coords, price } = req.body;
  if (title && eventdate && location && coords && price) {
    return db.event
      .create({
        image: event.image,
        title: event.title,
        eventdate: event.eventdate,
        eventtime: event.eventtime,
        location: event.location,
        lng: event.coords[0],
        lat: event.coords[1],
        description: event.description,
        price: event.price,
        agefrom: event.agefrom,
        ageto: event.ageto
      })
      .then(item => {
        return res.send(item).status(200);
      });
  } else res.status(400).send('Sorry, missing data to create event');
};

module.exports = eventsController;
