const db = require('../models');

module.exports = {
  up: () => {
    const defaultProps = {
      title: 'mock p',
      image: 'mock_image.jpg',
      eventdate: '2018-11-16',
      eventtime: '00:00',
      location: 'mock location',
      lng: '42.23445',
      lat: '2.3345',
      description: 'mock description',
      price: '15.56',
      agefrom: '3',
      ageto: '8'
    };

    return db.event.create(defaultProps);
  },

  down: id => {
    return db.event.destroy({ where: { id } });
  }
};
