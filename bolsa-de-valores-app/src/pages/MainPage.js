import React from 'react';
import SearchBar from '../components/SearchBar';
import Graphic from '../components/Graphic';
import RecentCompanys from '../components/RecentCompanys';

function MainPage() {
  return (
    <div>
      <SearchBar />
      <Graphic />
      <RecentCompanys />
    </div>
  );
}

export default MainPage;
