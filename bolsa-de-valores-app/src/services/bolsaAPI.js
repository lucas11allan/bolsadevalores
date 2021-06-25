const getQuote = (company) => (
  fetch(`https://cloud.iexapis.com/stable/stock/${company}/quote?token=pk_0309486b398e49d990746dc6c1fe0b1a`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getQuote;
