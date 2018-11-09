export const setAge = age => {
  return {
    type: 'SET_AGE',
    payload: {
      age
    }
  };
};

export const filterPrice = free => {
  return {
    type: 'FILTER_PRICE',
    payload: {
      free
    }
  };
};

export const searchEvents = value => {
  return {
    type: 'FILTER_PRICE',
    payload: {
      value
    }
  };
};
