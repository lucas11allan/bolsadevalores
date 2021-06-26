import React, { useEffect, useState } from 'react';

function CompanyCard(props) {
  const { symbol, companyName, change } = props;
  const [direction, changeDirection] = useState(false);

  useEffect(() => {

  }, [])
  
  return(
    <div>
      <img src={imageSource}></img>
      <div>{symbol}</div>
      <div>{companyName}</div>
      <div>
        <span>{change}</span>        
        <img src={change}></img>
      </div>
    </div>
  );
}

export default CompanyCard;
