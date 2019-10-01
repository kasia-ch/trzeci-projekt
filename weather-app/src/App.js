import React from 'react';
import './App.css';
import SearchCity from './SearchCity/SearchCity';
import ViewWeather from './ViewWeather/ViewWeather';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      "key":'weather',
      "imBusy":'false'
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="app container">
          <SearchCity></SearchCity>
          <ViewWeather></ViewWeather>
        </div>
      </div>
    );
  }
}

export default App;
