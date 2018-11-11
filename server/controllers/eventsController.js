const Sequelize = require('sequelize');
const eventsController = {};
const Op = Sequelize.Op;
// const eventsModel = require('../models/eventsModel');
const db = require('../models');

const transformEvent = item => {
  return Object.assign({}, item.toJSON(), { coords: [item.lng, item.lat] });
};

const buildWhereQuery = (query, ageFrom) => {
  const where = {};
  if (query) {
    where.title = {
      [Op.like]: `%${query}%`
    };
    // where.description = {
    //   [Op.like]: `%${query}%`
    // };
  }
  if (ageFrom) {
    // Do something else.
  }
  return where;
};

eventsController.getAll = (req, res) => {
  const query = req.query.q;
  const ageFrom = req.query.ageFrom;
  const where = buildWhereQuery(query, ageFrom);
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
  const event = req.body;
  return db.eventsModel
    .create({
      image: event.image,
      title: event.title,
      date: event.date,
      location: event.location,
      lng: event.coords[0],
      lat: event.coords[1],
      description: event.description,
      price: event.price,
      ageFrom: event.ageFrom,
      ageTo: event.ageTo
    })
    .then(item => {
      res.sendStatus(200);
      return res.send(item);
    });
};

// eventsController.createEvent = async function(req, res) {
//   try {
//     const newEvent = await eventsModel.set(req.body); //set or create??
//     res.status(201);
//     return res.send(newEvent);
//   } catch (error) {
//     res.status(400);
//     res.send(error);
//   }
// };

module.exports = eventsController;

// eventsController.getAll = (req, res) => {
//   res.json(eventsModel.getAll());
// };
