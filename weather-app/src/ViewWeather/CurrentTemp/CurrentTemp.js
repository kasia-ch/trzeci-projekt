import React from 'react';
import './CurrentTemp.css';

class CurrentTemp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h3>Aktualna temperatura:  14 C</h3>
        )
    }
}

export default CurrentTemp;