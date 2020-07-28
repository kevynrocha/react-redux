import { createStore, combineReducers } from 'redux';

import carsReducer from './cars'

const rootReducers = combineReducers({
  cars: carsReducer
})

export default createStore(rootReducers);