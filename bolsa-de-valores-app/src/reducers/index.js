import { combineReducers } from 'redux';
import dadosAPI from './dadosAPI';
import companysInfo from './companysInfo';

export default combineReducers({
  dadosAPI,
  companysInfo,
});
