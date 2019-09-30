import React from 'react';
import './Humidity.css';

class Humidity extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h3>Wilgotność: 69%</h3>
            <h3>Ciśnienie: 1000 hPa</h3>
        )
    }
}

export default Humidity;