const Sequelize = require('sequelize');
const eventsController = {};
const Op = Sequelize.Op;
// const eventsModel = require('../models/eventsModel');
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
    // where.description = {
    //   [Op.like]: `%${query}%`
    // };
  }

  if (age) {
    where.agefrom = {
      [Op.eq]: `${age}`
    };
  }

  if (date) {
    where.eventdate = {
      [Op.eq]: `${date}`
    };
  }
  if (free) {
    where.price = {
      [Op.eq]: 0
    };
  }
  return where;
};

eventsController.getAll = (req, res) => {
  const query = req.query.q;
  const agefrom = req.query.agefrom;
  const date = req.query.eventdate;
  const free = req.query.free;
  const where = buildWhereQuery(query, agefrom, date, free);
  console.log('where', where);
  return db.eventsModel.findAll({ where: where }).then(items => {
    const transformedEvents = items.map(transformEvent);
    res.status(200);
    return res.send(transformedEvents);
  });
};

eventsController.getEvent = (req, res) => {
  return db.eventsModel.findById(req.params.id).then(item => {
    const transformedEvent = transformEvent(item);
    res.status(200);
    return res.send(transformedEvent);
  });
};
eventsController.createEvent = (req, res) => {
  console.log(req.body);
  const event = req.body;
  return db.eventsModel
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
      res.sendStatus(200);
      return res.send(item);
    });
};

module.exports = eventsController;
