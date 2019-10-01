import React from 'react';
import './ViewWeather.css';


class ViewWeather extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>City:</td>
                        <td>Gliwice</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Geo coordinates:</td>
                        <td>[50.3, 18.68]</td>
                        <td></td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                        <td>Temperature:</td>
                        <td>15 °C</td>
                        <td></td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                        <td>Min & Max temperature:</td>
                        <td>5-17 °C</td>
                        <td></td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                        <td>Humidity:</td>
                        <td>58 %</td>
                        <td></td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                        <td>Pressure:</td>
                        <td>1009 hPa</td>
                        <td></td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                        <td>Precipitation:</td>
                        <td>0%</td>
                        <td></td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                        <td>Wind:</td>
                        <td>20 km/h</td>
                        <td></td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                        <td>Cloudiness:</td>
                        <td>20 km/h</td>
                        <td></td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                        <td>Sunrise:</td>
                        <td>20 km/h</td>
                        <td></td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                        <td>Sunset:</td>
                        <td>20 km/h</td>
                        <td></td>
                    </tr>

                </tbody>
            </table>
        )
    }
}

export default ViewWeather;