import React from 'react';
import home from '../images/home.svg';
import '../styles/home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="monetus-logo">
        <img src={home}></img>
      </div>
      <div className="home-objects">
        <div className="rectangle"></div>
        <div className="icon-home">
          <div className="rec197 recPrimary"></div>
          <div className="rec195 recPrimary"></div>
          <div className="rec196 recPrimary"></div>
          <div className="rec194 recPrimaryDark"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
