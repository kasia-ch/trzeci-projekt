import React from 'react';
import moment from 'moment';
import './ViewWeather.css';

const ViewWeather = (props) => {
    const {
        date,
        city,
        geoCoords,
        sunrise,
        sunset,
        temp,
        temp_min,
        temp_max,
        pressure,
        wind,
        humidity,
        precipitation,
        cloudiness
    } = props.weather

    const { error } = props

    if (error === true) {
        return (
            <h1>City not found</h1>
        )
    }

    if (city && geoCoords && temp_min) {
        return (
            <div>
                <table className="table table-borderless">
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
                            <td>Weather in:</td>
                            <td>{city}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Geo coordinates:</td>
                            <td>{[geoCoords]}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Sunrise:</td>
                            <td>{moment(sunrise,'X').format('HH:mm DD.MM.YYYY')}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Sunset:</td>
                            <td>{moment(sunset,'X').format('HH:mm DD.MM.YYYY')}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Temperature:</td>
                            <td>{temp}&#176;C</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Min. temperature:</td>
                            <td>{temp_min}&#176;C</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Max. temperature:</td>
                            <td>{temp_max}&#176;C</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Humidity:</td>
                            <td>{humidity}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Precipitation:</td>
                            <td>{precipitation}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Wind:</td>
                            <td>{wind}m/s</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Cloudiness:</td>
                            <td>{cloudiness}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Pressure:</td>
                            <td>{pressure}hPa</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    } else {
        return <h1>No city has been selected</h1>
    }
}

export default ViewWeather;