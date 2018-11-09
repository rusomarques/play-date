export const setAge = age => {
  return {
    type: 'SET_AGE',
    payload: {
      age
    }
  };
};

export const setFree = value => {
  return {
    type: 'SET_FREE',
    payload: {
      free: !!value
    }
  };
};

export const setDate = date => {
  return {
    type: 'SET_DATE',
    payload: {
      date
    }
  };
};

export const searchEvents = searchText => {
  return {
    type: 'SEARCH_EVENTS',
    payload: {
      searchText
    }
  };
};
