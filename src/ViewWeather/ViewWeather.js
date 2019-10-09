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
        rain,
        snow,
        cloudiness
    } = props.weather

    const { error } = props

    if (error === true) {
        return (
            <h1 className="text-center">City not found</h1>
        )
    }

    let rainForecast, snowForecast;

    if (rain) {
        rainForecast = (
            <tr>
                <th scope="row"></th>
                <td>Rain:</td>
                <td>{rain["1h"]}mm</td>
                <td></td>
            </tr>
        )
    }

    if (snow) {
        snowForecast = (
            <tr>
                <th scope="row"></th>
                <td>Snow:</td>
                <td>{snow["1h"]}mm</td>
                <td></td>
            </tr>
        )
    }

    if (city && geoCoords) {
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
                            <td className='font-weight-bold'>Weather in:</td>
                            <td className='font-italic'>{city}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className='font-weight-bold'>Geo coordinates:</td>
                            <td>{[geoCoords]}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className='font-weight-bold'>Sunrise:</td>
                            <td>{moment(sunrise, 'X').format('HH:mm DD.MM.YYYY')}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className='font-weight-bold'>Sunset:</td>
                            <td>{moment(sunset, 'X').format('HH:mm DD.MM.YYYY')}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className='font-weight-bold'>Temperature:</td>
                            <td>{temp}&#176;C</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className='font-weight-bold'>Min. temperature:</td>
                            <td>{temp_min}&#176;C</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className='font-weight-bold'>Max. temperature:</td>
                            <td>{temp_max}&#176;C</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className='font-weight-bold'>Humidity:</td>
                            <td>{humidity}%</td>
                            <td></td>
                        </tr>
                        {rainForecast}
                        {snowForecast}
                        <tr>
                            <th scope="row"></th>
                            <td className='font-weight-bold'>Wind:</td>
                            <td>{wind}m/s</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className='font-weight-bold'>Cloudiness:</td>
                            <td>{cloudiness}%</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className='font-weight-bold'>Pressure:</td>
                            <td>{pressure} hPa</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    } else {
        return <h1 className="text-center">No city has been selected</h1>
    }
}

export default ViewWeather;
