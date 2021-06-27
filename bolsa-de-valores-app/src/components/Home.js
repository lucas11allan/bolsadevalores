import React from 'react';
import home from '../images/home.svg';

function Home(props) {
  return (
    <div className="navigation">
      <div className="home">
        <div className="monetus-logo">
          <div className="shape">
            <img src={home}></img>
          </div>
        </div>
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
