import { combineReducers } from 'redux';

import signUp from './signUp';
import signIn from './signIn';
import fetchEvents from './events';

export default combineReducers({
  signUp,
  signIn,
  fetchEvents,
});
