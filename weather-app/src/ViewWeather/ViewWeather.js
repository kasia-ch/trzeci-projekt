import React from 'react';
import './ViewWeather.css';



const ViewWeather = (props)=>{
    const {date, city, geoCoords, sunrise, sunset, temp, pressure, wind, humidity, precipitation, cloudiness, error} = props.weather
    return ( 
    <div {String(props.weather.error)}> 
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
                    <td>{sunrise}</td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row"></th>
                    <td>Sunset:</td>
                    <td>{sunset}</td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row"></th>
                    <td>Temperature:</td>
                    <td>{temp}</td>
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
                    <td>{wind}</td>
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
                    <td>{pressure}</td>
                    <td></td>
                </tr>              
            </tbody>
        </table>
    </div>   
    )
}

export default ViewWeather;