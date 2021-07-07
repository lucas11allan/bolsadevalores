import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import whiteHeart from '../images/whiteStarIcon.svg';
import blueHeart from '../images/blueStarIcon.svg';
import positive from '../images/positivePath.svg';
import negative from '../images/negativePath.svg';
import loadValuesExist from '../actions/loadValuesExist';
import getCompany from '../actions/getCompany';
import companyLogos from '../services/companyLogos';
import '../styles/companyCard.css';

function CompanyCard(props) {
  const { organizedData, loadOrganizedData, handleClickCard } = props;
  const { name, companyName, change, isFavorite } = props.companyObject;
  const [direction, changeDirection] = useState('');
  const [favoriteImg, setFavoriteImage] = useState(whiteHeart);
  const [logoImage, setlogoImage] = useState('');

  useEffect(() => {
    if (isFavorite) {
      setFavoriteImage(blueHeart);
    } else {
      setFavoriteImage(whiteHeart);
    }
    if (change >= 0) {
      changeDirection(positive)
    } else {
      changeDirection(negative)
    }
    if (companyLogos[name]) {
      setlogoImage(companyLogos[name]);
    }
  })

  const handleClick = () => {
    const index = organizedData.findIndex(e => e.name === name)
    if (!isFavorite) {
      setFavoriteImage(blueHeart);
      organizedData[index].isFavorite = true;
    } else {
      setFavoriteImage(whiteHeart);
      organizedData[index].isFavorite = false;
    }
    loadOrganizedData(organizedData);
  }

  const changeCompany = () => {
    handleClickCard(name);
  }

  return(
    <div key={name} className="card auto-layout white click" onClick={changeCompany}>
      <div className="insideCard">
        <img src={favoriteImg} onClick={handleClick} className=""></img>
        <img src={logoImage} className="logo-empresa"></img>
        <div  className="text-card">
          <div>
            <div className="name">{name}</div>
            <div className="companyName">{companyName}</div>
          </div>
          <div>
            <span>{change}</span>        
            <img src={direction}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  dados: state.dadosAPI.data,
  organizedData: state.companysInfo.companyInfo
});

const mapDispatchToProps = (dispatch) => ({
  loadOrganizedData: (e) => dispatch(loadValuesExist(e)),
  handleClickCard: (e) => dispatch(getCompany(e))
});


export default connect(mapStateToProps, mapDispatchToProps)(CompanyCard);
