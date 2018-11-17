const mocks = {
  correctEvent: {
    title: 'hellodfsafasfasfa',
    eventdate: '2018-11-05 23:00',
    location: 'barca',
    coords: [41.3858788, 2.170833000000016],
    price: 2
  },
  eventWithErrors: {
    title: 'aa',
    eventdate: '2018-11-05 23:00',
    location: '   ',
    coords: [41.3858788, 2.170833000000016],
    price: 'fsdafs'
  },
  eventWithNulls: {
    title: null,
    eventdate: '2018-11-05 23:00',
    location: null,
    coords: [41.3858788, 2.170833000000016],
    price: 4
  },
  messageEventWithErrors: [
    'The title must be between 3 and 40 characters',
    'Please set the location of the event',
    'Price should be a number'
  ],
  messageEventWithNulls: ['Please title should be set']
};

module.exports = mocks;
