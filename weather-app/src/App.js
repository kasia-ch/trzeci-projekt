import React from 'react';
import './App.css';
import SearchCity from './SearchCity/SearchCity';
import ViewWeather from './ViewWeather/ViewWeather';

function App() {
  return (
    <div className="app">
      <SearchCity></SearchCity>
      <ViewWeather></ViewWeather>
    </div>

  );
}

export default App;
