import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPrice } from '../actions/fetchPriceApi';
import getCompany from '../actions/getCompany';
import loadValues from '../actions/loadValues';
import loadValuesExist from '../actions/loadValuesExist';
import handleDate from '../services/handleDate';
import search from '../images/search.svg';


function SearchBar(props) {
  const [name, changeName] = useState('');

  const { handleClick, callApi, dados, organizedData, loadOrganizedData, loadOrganizedDataExist} = props;

  const clickButton = () => {
    handleClick(name);
    callApi(name);
  }

  useEffect(() => {
    if(dados.price != undefined){
      if(organizedData.find(e => e.name === name) !== undefined) {
        const index = organizedData.findIndex(e => e.name === name)
        organizedData[index].price.push({name: handleDate(dados.price.lastTradeTime), valor: dados.price.latestPrice});
        organizedData[index].timeResearch = new Date();
        loadOrganizedDataExist(organizedData);
      } else {
        const input = {
          name: dados.price.symbol.toUpperCase(),
          companyName: dados.price.companyName,
          price: [{name: handleDate(dados.price.lastTradeTime), valor: dados.price.latestPrice}],
          change: dados.price.changePercent,
          changeValue: dados.price.change,
          isFavorite: false,
          timeResearch: new Date()
        };
        loadOrganizedData(input);
      }
    }
  }, [dados])

  return (
    <div>
      <div htmlFor="filter-name">
        <input
          name="company-name" type="text" placeholder="Buscar empresa"
          onChange={(e) => changeName(e.target.value.toUpperCase())}
        />
        <button onClick={clickButton}><img src={search}></img></button>
      </div>
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
