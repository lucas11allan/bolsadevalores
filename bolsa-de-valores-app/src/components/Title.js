import React from 'react';
import dash from '../images/dashboard.svg';

function Title() {
  return (
    <div className="user">
      <img src={dash}></img>
      <span>Dashboard</span>
    </div>
  );
}

export default Title;
