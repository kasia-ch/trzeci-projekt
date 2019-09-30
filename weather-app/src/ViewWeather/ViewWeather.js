import React from 'react';
import './ViewWeather.css';
import GeoCoords from './GeoCoords/GeoCoords';
import CurrentTemp from './CurrentTemp/CurrentTemp';
import DailyTemp from './DailyTemp/DailyTemp';
import Humidity from './Humidity/Humidity';
import Precipitation from './Precipitation/Precipitation';

class ViewWeather extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <City></City>
            <GeoCoords></GeoCoords>
            <CurrentTemp></CurrentTemp>
            <DailyTemp></DailyTemp>
            <Humidity></Humidity>
            <Precipitation></Precipitation>
        )
    }
}

export default ViewWeather;