import React from 'react';
import dash from '../images/dashboard.svg';

function Title() {
  return (
    <div className="title">
      <img src={dash}></img>
      <span className="title-text">Dashboard</span>
    </div>
  );
}

export default Title;
