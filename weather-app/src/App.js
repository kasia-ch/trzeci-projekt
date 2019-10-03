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
            city: "",
            geoCoords: "",
            sunrise:"",
            sunset:"",
            temp: weatherData.main.temp,
            pressure: "",
            wind: "",
            humidity: "",
            precipitation: "",
            cloudiness: ""
          }});
          

        /*const time = new Date().toLocaleString()
          this.setState(state => ({ 
            ,
            date: time,
            city: state.value,
            geoCoords: data.coord.lon.lat,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind:  data.wind.speed,
            humidity: data.main.humidity,
            precipitation: data.main.rain.description,
            cloudiness: data.clouds.all,
          }));
          */
        })
        .catch(error => {
          this.setState(state => ({ 
            error: true,
            city: this.state.value }));
        })
    }

    render() {
      return (
        <div className="wrapper">
          <div className="app container">
            <SearchCity 
            value={this.state.value} 
            change={this.handleInputChange}
            submit={this.handleCitySubmit}
            />
            <ViewWeather weather = {this.state.weather}/>
          </div>
        </div>
      );
    }
  }

  export default App;
