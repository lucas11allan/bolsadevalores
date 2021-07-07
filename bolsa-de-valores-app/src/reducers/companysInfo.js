import { GET_COMPANY } from '../actions/getCompany';
import { LOAD_VALUES } from '../actions/loadValues';
import { LOAD_VALUES_EXIST } from '../actions/loadValuesExist';

const INITIAL_STATE = {
  name: '',
  companyInfo: []
};

const dadosAPI = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COMPANY:
      return {
        ...state,
        name: action.companyName
      };
    case LOAD_VALUES:
      return {
        ...state,
        companyInfo: [...state.companyInfo, action.values]
      }
    case LOAD_VALUES_EXIST:
      return {
        ...state,
        companyInfo: [...action.values]
      }  
    default:
      return state;
  }
};

export default dadosAPI;
