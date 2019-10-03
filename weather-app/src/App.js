import React from 'react';
import './App.css';
import SearchCity from './SearchCity/SearchCity';
import ViewWeather from './ViewWeather/ViewWeather';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: "",
      weather: {},
      imBusy: false
    }
  }

  handleInputChange = () => {
    this.setState({
      value:event.target.value
    })
  }

    componentDidMount() {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Lublin&appid=05508bb378ad891b493b0c886cca7a57`)
        .then(res => {
          const input = res.data;
          this.setState({ weather: res.data });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    render() {
      return (
        <div className="wrapper">
          <div className="app container">
            <SearchCity value={this.state.value} change={this.handleInputChange}/>
            <ViewWeather/>
          </div>
        </div>
      );
    }
  }

  export default App;
