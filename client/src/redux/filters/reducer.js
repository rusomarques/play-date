const initialState = {
  age: '',
  free: false,
  searchText: '',
  date: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AGE':
      return { ...state, age: action.payload.age };
    case 'SET_FREE':
      return { ...state, free: action.payload.free };
    case 'SET_DATE':
      return { ...state, date: action.payload.date };
    case 'SEARCH_EVENTS':
      return { ...state, searchText: action.payload.searchText };

    default:
      return state;
  }
};
