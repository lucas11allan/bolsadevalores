import React from 'react';
import CompanyCardFavorite from '../components/CompanyCardFavorite';
import { connect } from 'react-redux';
import blueStar from '../images/blueStarIcon.svg';

function FavoriteBar(props) {
  const { lastResearch } = props;

  return (
    <div className="favorite-container">
      <div className="container-title">
        <img src={blueStar}></img>
        <span className="favorite-title">Empresas Favoritas</span>
      </div>
      <div>
        {lastResearch.filter(e => e.isFavorite === true)
          .map((e)=> <CompanyCardFavorite companyObject={e} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lastResearch: state.companysInfo.companyInfo
});

export default connect(mapStateToProps)(FavoriteBar);
