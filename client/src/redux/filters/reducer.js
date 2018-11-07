const initialState = { age: '', free: null };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AGE':
      return { ...state, age: action.payload.age };
    default:
      return state;
  }
};
