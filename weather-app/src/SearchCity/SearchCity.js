import React from 'react';
import './SearchCity.css';

class SearchCity extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="nazwa miasta" aria-label="nazwa miasta" aria-describedby="button-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">OK</button>
                    </div>
            </div>
        )
    }
}
        
export default SearchCity;