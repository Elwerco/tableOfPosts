import { combineReducers } from 'redux';

import addReducer from './addReducer';
import loadOrNotReducer from './loadOrNotReducer';

export default combineReducers({
  addReducer,
  loadOrNotReducer
});