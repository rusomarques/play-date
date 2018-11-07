import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rest } from './rest';
import { filters } from './filters';

const rootReducer = combineReducers({
  ...rest.reducers,
  filters: filters.reducer
});

export const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunk))
);
