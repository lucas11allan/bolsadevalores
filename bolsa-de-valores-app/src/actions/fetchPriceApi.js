import getQuote from '../services/bolsaAPI';

export const RECEIVE_PRICE_FAILURE = 'RECEIVE_PRICE_FAILURE';
export const RECEIVE_PRICE_SUCCESS = 'RECEIVE_PRICE_SUCCESS';
export const REQUEST_PRICE = 'REQUEST_PRICE';


const requestPrice = () => ({
  type: REQUEST_PRICE,
});

const receivePriceFailure = (error) => ({
  type: RECEIVE_PRICE_FAILURE,
  error,
});

const receivePriceSuccess = (price) => ({
  type: RECEIVE_PRICE_SUCCESS,
  price,
});

export function fetchStarWar_PRICE() {
  return (dispatch) => {
    dispatch(requestPrice());

    return getQuote()
      .then(
        (companyInfo) => dispatch(receivePriceSuccess(companyInfo)),
        (error) => dispatch(receivePriceFailure(error.message)),
      );
  };
}
