import React from 'react';
import './SearchCity.css';
//import axios from 'axios';

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

        /*componentDidMount() {
    axios.get(`https://openweathermap.org/current`)
    .then(res => {
      const input = res.data;
      this.setState({ input });
    })
    .catch(function (error) {
    console.log(error);
  });*/
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
                                event.preventDefault
                            )}>OK</button>
                    </div>
                </div>
                {JSON.stringify(this.state)}
            </div>
        )
    }
}

export default SearchCity;