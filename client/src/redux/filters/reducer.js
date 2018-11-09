const initialState = { age: '', free: null };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AGE':
      return { ...state, age: action.payload.age };
    case 'FILTER_PRICE':
      return { ...state, free: action.payload.free };
    default:
      return state;
  }
};
