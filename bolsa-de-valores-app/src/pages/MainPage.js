import React from 'react';
import SearchBar from '../components/SearchBar';
import Graphic from '../components/Graphic';
import RecentCompanys from '../components/RecentCompanys';
import FavoriteBar from '../components/FavoriteBar';
import Home from '../components/Home';
import User from '../components/User';
import Title from '../components/Title';
import '../styles/index.css';

function MainPage() {
  return (
    <div className="flexHorizontal">
      <Home />
      <div className="main-container">
        <Title />
        <SearchBar />
        <Graphic />
        <RecentCompanys />
      </div>
      <div>
        <User />
        <FavoriteBar /> 
      </div>
         
    </div>
  );
}

export default MainPage;
