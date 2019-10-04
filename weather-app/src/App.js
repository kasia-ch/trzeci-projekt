import React from 'react';
import './App.css';
import SearchCity from './SearchCity/SearchCity';
import ViewWeather from './ViewWeather/ViewWeather';
import axios from 'axios';

const APIKey = '05508bb378ad891b493b0c886cca7a57';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: "",
      weather: {
        date: "",
        city: "",
        geoCoords: "",
        sunrise:"",
        sunset:"",
        temp: "",
        temp_min: "",
        temp_max: "",
        pressure: "",
        wind: "",
        humidity: "",
        precipitation: "",
        cloudiness: ""},
      imBusy: false,
      error: false,
      }
  }

  handleInputChange = (event) => {
    this.setState({
      value:event.target.value
    })
  }

  handleCitySubmit =(event) => {
    event.preventDefault()

        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`)
        .then(res => {
          const weatherData = res.data;
          console.log(weatherData)
          
          this.setState({ 
            error: false,
            weather: {
              date: "",
              city: state.value,
              geoCoords: weatherData.coord.lon.lat,
              sunrise: weatherData.sys.sunrise,
              sunset: weatherData.sys.sunset,
              temp: weatherData.main.temp,
              temp_min: weatherData.main.temp_min,
              temp_max: weatherData.main.temp_max,
              pressure: weatherData.main.pressure,
              wind:  weatherData.wind.speed,
              humidity: weatherData.main.humidity,
              precipitation: weatherData.main.rain.description,
              cloudiness: weatherData.clouds.all,
          }});
          
        })
        .catch(error => {
          this.setState(prevState => ({ 
            error: true,
            city: prevState.value }));
        })
    }

    let content = null;

    if(!error && city) {
      content = (
        <div>
          <h3>Weather in <em>{city}</em></h3>
        </div> 
      )
    }

    /*render() {*/
      return (
        <div className="wrapper">
          {error ? 'Not found ${city}': content}

          {/*<div className="app container">
            <SearchCity 
            value={this.state.value} 
            change={this.handleInputChange}
            submit={this.handleCitySubmit}
            />
            <ViewWeather weather = {this.state.weather}/>
          </div>*/}
        </div>
      );
    /*}*/
  }

  export default App;
