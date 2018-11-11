import reduxApi from 'redux-api';
import adapterFetch from 'redux-api/lib/adapters/fetch';

export const rest = reduxApi({
  getEvents: {
    url: '/events',
    options: {
      method: 'GET'
    }
  },

  getSingleEvent: {
    url: '/events/:id',
    options: {
      method: 'GET'
    }
  },

  createEvent: {
    url: '/events',
    options: {
      method: 'POST'
    }
  }

  // updateEvent: {
  //   url: '/events/:id',
  //   options: {
  //     method: 'PATCH'
  //   }
  // },
  // deleteEvent: {
  //   url: '/events/:id',
  //   options: {
  //     method: 'DELETE'
  //   }
  // },
  // login: {
  //   url: '/login',
  //   options: {
  //     method: 'POST'
  //   }
  // }
});

rest.use('fetch', adapterFetch(fetch));
rest.use('rootUrl', 'http://localhost:3002');
// rest.use('rootUrl', 'http://localhost:3000');
rest.use('options', {
  // body: JSON.stringify(event),

  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});
