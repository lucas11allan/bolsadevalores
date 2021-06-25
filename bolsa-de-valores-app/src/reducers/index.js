import { combineReducers } from 'redux';
import getPrice from './getPrice';
import history from './history';

export default combineReducers({
  getPrice,
  history,
});
