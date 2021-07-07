import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import GraphicBody from './GraphicBody';

function Graphic(props) {
  const { organizedData, actualCompany } = props;
  const [data, changeData] = useState([]);

  useEffect(() => {
    const index = organizedData.findIndex(e => e.name == actualCompany.toUpperCase());
    if (index >= 0 && organizedData.length > 0) {
      changeData(organizedData[index].price);
    }
  })

  return (
    <div>
      <GraphicBody data={data}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  organizedData: state.companysInfo.companyInfo,
  actualCompany: state.companysInfo.name
});

export default connect(mapStateToProps)(Graphic);
