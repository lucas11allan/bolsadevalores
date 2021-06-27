import React from 'react';
import CompanyCardFavorite from '../components/CompanyCardFavorite';
import { connect } from 'react-redux';
import blueStar from '../images/blueStarIcon.svg';

function FavoriteBar(props) {
  const { lastResearch } = props;

  return (
    <div>
      <div className="container-title">
        <img src={blueStar}></img>
        <span>Empresas Favoritas</span>
      </div>
      <div>
        {lastResearch.filter(e => e.isFavorite === true)
          .map((e)=> <CompanyCardFavorite companyObject={e} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lastResearch: state.getCompany.companyInfo
});

export default connect(mapStateToProps)(FavoriteBar);