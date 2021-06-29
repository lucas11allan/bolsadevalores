import { combineReducers } from 'redux';
import getPrice from './getPrice';
import getCompany from './getCompany';

export default combineReducers({
  getPrice,
  getCompany,
});
