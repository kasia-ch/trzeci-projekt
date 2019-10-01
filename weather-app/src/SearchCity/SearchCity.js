import React from 'react';
import './SearchCity.css';

class SearchCity extends React.Component {
    constructor(props) {
        super(props)
    }

    this.onChange = this.onChange.bind(this)

    onChange(value){
        
    }

    render() {
        return (
            <div>
                <h1 className="mx-auto"  style={{"width" : "800px"}}> Current weather and forecasts in your city</h1>
                <div className="input-group mb-3 container">
                    <input type="text" className="form-control" placeholder="City name" aria-label="city name" 
                    aria-describedby="button-addon2" 
                    value={value}
                    onChange={(e)=>{
                        onChange(e.target.value)
                    }} />

                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">OK</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchCity;