import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function Graphic(props) {
  const { organizedData, actualCompany } = props;
  const [data, changeData] = useState([]);

  useEffect(() => {
    const index = organizedData.findIndex(e => e.name == actualCompany.toUpperCase())
    if (index != undefined) {
      changeData(organizedData[index].price);
    }
  })

  return (
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="valor" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}

const mapStateToProps = (state) => ({
  organizedData: state.getCompany.companyInfo,
  actualCompany: state.getCompany.name
});

export default connect(mapStateToProps)(Graphic);
