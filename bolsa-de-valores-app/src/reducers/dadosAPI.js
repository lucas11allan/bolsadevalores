import {
  RECEIVE_PRICE_FAILURE,
  RECEIVE_PRICE_SUCCESS,
  REQUEST_PRICE,
} from '../actions/fetchPriceApi';

const INITIAL_STATE = {
  isFetching: false,
  data: {},
};

const companysInfo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PRICE:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_PRICE_SUCCESS:
      return {
        ...state,
        data: action,
        isFetching: false,
      };
    case RECEIVE_PRICE_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default companysInfo;
