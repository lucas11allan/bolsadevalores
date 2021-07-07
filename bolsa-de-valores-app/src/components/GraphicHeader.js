import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import whiteHeart from '../images/whiteStarIcon.svg';
import blueHeart from '../images/blueStarIcon.svg';
import positive from '../images/positivePath.svg';
import negative from '../images/negativePath.svg';
import loadValuesExist from '../actions/loadValuesExist';
import getCompany from '../actions/getCompany';
import '../styles/companyCard.css';

function GraphicHeader(props) {
  const { organizedData, loadOrganizedData, symbol } = props;
  const [direction, changeDirection] = useState('');
  const [favoriteImg, setFavoriteImage] = useState(whiteHeart);
  const [companyObject, setCompanyObject] = useState(null);
  const [color, setcolor] = useState('');

  useEffect(() => {
    const index = organizedData.findIndex(e => e.name === symbol);
    setCompanyObject(organizedData[index]);
    if (companyObject) {
      if (companyObject.isFavorite) {
        setFavoriteImage(blueHeart);
      } else {
        setFavoriteImage(whiteHeart);
      }
      if (companyObject.change >= 0) {
        changeDirection(positive);
        setcolor('color-green');
      } else {
        changeDirection(negative);
        setcolor('color-red');
      }
    }    
  })

  const handleClick = () => {
    const index = organizedData.findIndex(e => e.name === symbol);
    if (!companyObject.isFavorite) {
      setFavoriteImage(blueHeart);
      organizedData[index].isFavorite = true;
    } else {
      setFavoriteImage(whiteHeart);
      organizedData[index].isFavorite = false;
    }
    loadOrganizedData(organizedData);
  }

  if (!companyObject) return <div></div>;

  return(
    <div key={companyObject.name} className="graph-header">
      <div className="identification">
        <img src={favoriteImg} onClick={handleClick} className=""></img>
        <div className="text-card">
          <div>
            <div className="name">{companyObject.name}</div>
            <div className="companyName">{companyObject.companyName}</div>
          </div>
        </div>
      </div>
      <div className="info">
          <div>
            <div>     
              <img src={direction}></img>
              <span>{`$${companyObject.price.slice(-1)[0].valor}`}</span>   
            </div>
            <span className={color}>{`$${companyObject.changeValue}(${companyObject.change}%)`}</span>
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = (state) => ({
  dados: state.dadosAPI.data,
  organizedData: state.companysInfo.companyInfo,
  symbol: state.companysInfo.name
});

const mapDispatchToProps = (dispatch) => ({
  loadOrganizedData: (e) => dispatch(loadValuesExist(e)),
  handleClickCard: (e) => dispatch(getCompany(e))
});


export default connect(mapStateToProps, mapDispatchToProps)(GraphicHeader);
