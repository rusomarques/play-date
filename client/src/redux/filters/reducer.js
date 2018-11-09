import moment from 'moment';

const initialState = { age: '', free: false, Search: '', date: moment() };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AGE':
      return { ...state, age: action.payload.age };
    case 'SET_FREE':
      return { ...state, free: action.payload.free };
    case 'SET_DATE':
      return { ...state, date: action.payload.date };
    case 'SEARCH_EVENTS':
      return Object.assign({}, state, {
        searchText: action.text
      });

    default:
      return state;
  }
};
