import React from 'react';
import './SearchCity.css';

class SearchCity extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="nazwa miasta" aria-label="nazwa miasta" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">OK</button>
                </div>
            </div>
        )
    }
}

export default SearchCity;