import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Graphic from '../components/Graphic';
import CompanyCard from '../components/CompanyCard';

class MainPage extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Graphic />
        <div>
          {Array.map(()=> <CompanyCard />)}
        </div>
      </div>
    );
  }
}

export default MainPage;
