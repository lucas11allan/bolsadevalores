import React, { useState } from 'react';
import CompanyCard from '../components/CompanyCard';
import { connect } from 'react-redux';
import recent from '../images/stats.svg';

function RecentCompanys(props) {
  const { lastResearch } = props;

  return (
    <div className="recent-container">
      <div className="container-title">
        <img src={recent}></img>
        <span>Empresas Recentes</span>
      </div>
      <div className="carousel">
        {lastResearch.map((e)=> <CompanyCard companyObject={e} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lastResearch: state.getCompany.companyInfo
});

export default connect(mapStateToProps)(RecentCompanys);
