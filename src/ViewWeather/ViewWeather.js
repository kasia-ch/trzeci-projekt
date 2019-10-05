import React from 'react';
import './ViewWeather.css';



const ViewWeather = (props)=>{
    const {date, city, geoCoords, sunrise, sunset, temp, temp_min, temp_max,
        pressure, wind, humidity, precipitation, cloudiness} = props.weather
    
        const {error} = props


    if (error===true) {
        return (
            <h1>City not found</h1>
        )
    }
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
}

export default ViewWeather;