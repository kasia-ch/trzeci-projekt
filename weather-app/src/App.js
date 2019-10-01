import React from 'react';
import './App.css';
import SearchCity from './SearchCity/SearchCity';
import ViewWeather from './ViewWeather/ViewWeather';

function App() {
  return (
    <div className="wrapper">
      <div className="app container">
        <SearchCity></SearchCity>
        <ViewWeather></ViewWeather>
      </div>
    </div>
  );
}

export default App;
