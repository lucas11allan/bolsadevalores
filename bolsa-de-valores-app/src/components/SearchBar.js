import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchPrice } from '../actions/fetchPriceApi';
import getCompany from '../actions/getCompany';
import loadValues from '../actions/loadValues';
import loadValuesExist from '../actions/loadValuesExist';


function SearchBar(props) {
  const [name, changeName] = useState('');

  const { handleClick, callApi, dados, organizedData, loadOrganizedData, loadOrganizedDataExist} = props;

  const clickButton = () => {
    handleClick(name);
    callApi(name);
  }

  useEffect(() => {
    if(dados.price != undefined){
      if(organizedData.find(e => e.name == name.toUpperCase()) != undefined) {
        const index = organizedData.findIndex(e => e.name == name.toUpperCase())
        organizedData[index].price.push({name: new Date(dados.price.lastTradeTime), uv: dados.price.latestPrice});
        loadOrganizedDataExist(organizedData);
      } else {
        const input = {
          name: dados.price.symbol,
          companyName: dados.price.companyName,
          price: [{name: new Date(dados.price.lastTradeTime), uv: dados.price.latestPrice}],
          change: dados.price.changePercent,
          isFavorite: false
        };
        loadOrganizedData(input);
      }
    }
  }, [dados])

  return (
    <div>
      <label htmlFor="filter-name">
        Procurar
        <input name="company-name" type="text" onChange={(e) => changeName(e.target.value)} />
        <button onClick={clickButton}>Procurar</button>
      </label>
    </div>
  );
}

const mapStateToProps = (state) => ({
  dados: state.getPrice.data,
  organizedData: state.getCompany.companyInfo
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (e) => dispatch(getCompany(e)),
  callApi: (e) => dispatch(fetchPrice(e)),
  loadOrganizedData: (e) => dispatch(loadValues(e)),
  loadOrganizedDataExist: (e) => dispatch(loadValuesExist(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
