import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import whiteHeart from '../images/whiteStarIcon.svg';
import blueHeart from '../images/blueStarIcon.svg';
import positive from '../images/positivePath.svg';
import negative from '../images/negativePath.svg';
import loadValuesExist from '../actions/loadValuesExist';

function CompanyCardFavorite(props) {
  const { organizedData, loadOrganizedData } = props;
  const { name, companyName, change, isFavorite } = props.companyObject;
  const [direction, changeDirection] = useState('');
  const [favoriteImg, setFavoriteImage] = useState(whiteHeart);
  const [isFav, setIsfav] = useState(false);

  useEffect(() => {
    if (isFavorite) {
      setFavoriteImage(blueHeart);
      setIsfav(true);
    }
    if (change >= 0) {
      changeDirection(positive)
    } else {
      changeDirection(negative)
    }
  })

  const handleClick = () => {
    const index = organizedData.findIndex(e => e.name === name)
    if (!isFav) {
      setIsfav(true);
      setFavoriteImage(blueHeart);
      organizedData[index].isFavorite = true;
    } else {
      setIsfav(false);
      setFavoriteImage(whiteHeart);
      organizedData[index].isFavorite = false;
    }
    
    loadOrganizedData(organizedData);
  }

  return(
    <div>
      <img src={favoriteImg} onClick={handleClick}></img>
      <div>{name}</div>
      <div>{companyName}</div>
      <div>
        <span>{change}</span>        
        <img src={direction}></img>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  dados: state.getPrice.data,
  organizedData: state.getCompany.companyInfo
});

const mapDispatchToProps = (dispatch) => ({
  loadOrganizedData: (e) => dispatch(loadValuesExist(e)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CompanyCardFavorite);