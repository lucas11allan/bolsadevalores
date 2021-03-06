import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import positive from '../images/positivePath.svg';
import negative from '../images/negativePath.svg';
import loadValuesExist from '../actions/loadValuesExist';
import trash from '../images/trash.svg';
import getCompany from '../actions/getCompany';
import companyLogos from '../services/companyLogos';
import '../styles/companyCardFavorite.css';

function CompanyCardFavorite(props) {
  const { organizedData, loadOrganizedData, handleClickCard } = props;
  const { name, companyName, change } = props.companyObject;
  const [direction, changeDirection] = useState('');
  const [logoImage, setlogoImage] = useState('');
  const [color, setcolor] = useState('');

  useEffect(() => {
    if (change >= 0) {
      changeDirection(positive);
      setcolor('color-green');
    } else {
      changeDirection(negative);
      setcolor('color-red');
    }
    if (companyLogos[name]) {
      setlogoImage(companyLogos[name]);
    }
  })

  const handleClick = () => {
    const index = organizedData.findIndex(e => e.name === name);
    organizedData[index].isFavorite = false;
    loadOrganizedData(organizedData);
  }

  const changeCompany = () => {
    handleClickCard(name);
  }

  return(
    <div className="complete-card click">
      <div key={name} className="card-favorite">
        <div onClick={changeCompany} className="inside-card">
          <div className="company-info">
            <img src={logoImage}></img>
            <div className="company">
              <div className="company-title">{name}</div>
              <div className="company-name">{companyName}</div>
            </div>
          </div>
          <div className={color}>
            <span>{change}</span>        
            <img src={direction}></img>
          </div>
        </div>
      </div>
      <img src={trash} onClick={handleClick}></img>
    </div>
  );
}

const mapStateToProps = (state) => ({
  organizedData: state.companysInfo.companyInfo
});

const mapDispatchToProps = (dispatch) => ({
  loadOrganizedData: (e) => dispatch(loadValuesExist(e)),
  handleClickCard: (e) => dispatch(getCompany(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyCardFavorite);
