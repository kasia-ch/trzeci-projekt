import React from 'react';
import './SearchCity.css';


class SearchCity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'input': ''
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })

    }

    render() {
        return (
            <div>
                <h1 className="mx-auto" style={{ "width": "800px" }}> Current weather and forecasts in your city</h1>
                <div className="input-group mb-3 container">
                    <input type="text" name="input" className="form-control" placeholder="City name" aria-label="city name"
                        aria-describedby="button-addon2"
                        onChange={(e) => {
                            this.onChange(e.target.value)
                        }} />

                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button"
                            id="button-addon2"
                            onClick={(event)=>(
                                event.preventDefault()
                            )}>OK</button>
                    </div>
                </div>
                {JSON.stringify(this.state)}
            </div>
        )
    }
}

export default SearchCity;