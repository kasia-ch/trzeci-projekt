import React from 'react';
import './ViewWeather.css';
import GeoCoords from './GeoCoords/GeoCoords';
import CurrentTemp from './CurrentTemp/CurrentTemp';
import DailyTemp from './DailyTemp/DailyTemp';
import Humidity from './Humidity/Humidity';
import Precipitation from './Precipitation/Precipitation';
import City from './City/City';


class ViewWeather extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>


            <div>

                <City></City>
                <GeoCoords></GeoCoords>
                <CurrentTemp></CurrentTemp>
                <DailyTemp></DailyTemp>
                <Humidity></Humidity>
                <Precipitation></Precipitation>
            </div>
        )
    }
}

export default ViewWeather;