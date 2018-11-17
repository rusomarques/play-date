const mocks = {
  correctEvent: {
    title: 'hellodfsafasfasfa',
    eventdate: '2018-11-05 23:00',
    location: 'barca',
    coords: [41.3858788, 2.170833000000016],
    price: 2
  },
  eventWithErrors: {
    title: null,
    eventdate: '2018-11-05 23:00',
    location: '',
    coords: [41.3858788, 2.170833000000016],
    price: 'fsdafs'
  }
};

module.exports = mocks;
