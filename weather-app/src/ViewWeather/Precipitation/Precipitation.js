import React from 'react';
import './Precipitation.css';

class Precipitation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h3>Opady: brak</h3>
            <h3>Wiatr: Wschodni, 15km/h</h3>
        )
    }
}

export default Precipitation;