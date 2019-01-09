import React, {Component} from 'react';

class City extends Component {

    constructor(props) {
        super(props);

        this.getForecast = this.getForecast.bind(this);
    }

    getForecast() {
        this.props.setKey(this.props.forecastKey);
    }

    render() {
        return(
            <div className='city'>
                <h4>{this.props.name}, {this.props.data.LocalizedName}</h4>
                <p>{this.props.data.CountryID}, {this.props.data.ID}</p>
                <button onClick={this.getForecast}>Check weather</button>
            </div>
        );
    }
}

export default City;