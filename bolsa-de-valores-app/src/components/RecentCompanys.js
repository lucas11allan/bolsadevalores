import React, { useState } from 'react';
import CompanyCard from '../components/CompanyCard';
import { connect } from 'react-redux';

function RecentCompanys(props) {
  const { lastResearch } = props;

  return (
    <div>
      <span>Empresas Recentes</span>
      <div>
        {lastResearch.map((e)=> <CompanyCard companyObject={e} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lastResearch: state.getCompany.companyInfo
});

export default connect(mapStateToProps)(RecentCompanys);
