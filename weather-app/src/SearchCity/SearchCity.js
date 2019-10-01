import React from 'react';
import './SearchCity.css';

class SearchCity extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (  
            <div className="input-group mb-3 container">
                <input type="text" className="form-control" placeholder="City name" aria-label="city name" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">OK</button>
                </div>
            </div>
        )
    }
}

export default SearchCity;