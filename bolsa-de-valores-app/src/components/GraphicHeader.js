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

  useEffect(() => {
    const index = organizedData.findIndex(e => e.name === symbol);
    setCompanyObject(organizedData[index]);
    console.log(companyObject);
    if (companyObject) {
      console.log('teste');
      if (companyObject.isFavorite) {
        setFavoriteImage(blueHeart);
      } else {
        setFavoriteImage(whiteHeart);
      }
      if (companyObject.change >= 0) {
        changeDirection(positive)
      } else {
        changeDirection(negative)
      }
    }    
  })

  const handleClick = () => {
    const index = organizedData.findIndex(e => e.name === organizedData.name)
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
    <div key={companyObject.name} className="card auto-layout white">
      <div className="insideCard">
        <img src={favoriteImg} onClick={handleClick} className=""></img>
        <div className="text-card">
          <div>
            <div className="name">{companyObject.name}</div>
            <div className="companyName">{companyObject.companyName}</div>
          </div>
          <div>
            <span>{companyObject.change}</span>        
            <img src={direction}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  dados: state.getPrice.data,
  organizedData: state.getCompany.companyInfo,
  symbol: state.getCompany.name
});

const mapDispatchToProps = (dispatch) => ({
  loadOrganizedData: (e) => dispatch(loadValuesExist(e)),
  handleClickCard: (e) => dispatch(getCompany(e))
});


export default connect(mapStateToProps, mapDispatchToProps)(GraphicHeader);
