const initialState = { age: '', free: null, Search: '' };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AGE':
      return { ...state, age: action.payload.age };
    case 'FILTER_PRICE':
      return { ...state, free: action.payload.free };
    case 'SEARCH_EVENTS':
      return Object.assign({}, state, {
        searchText: action.text
      });

    default:
      return state;
  }
};
