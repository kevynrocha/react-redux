import { createStore, combineReducers } from 'redux';

import carsReducer from './cars';
import layoutReducer from './layout';

const rootReducers = combineReducers({
  cars: carsReducer,
  layout: layoutReducer
})

export default createStore(rootReducers);