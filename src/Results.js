import React, { Component } from 'react';
import City from './City';
import Forecast from './Forecast';

class Results extends Component {

    constructor(props) {
        super(props);

        this.state = {
            url: 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=ss1vjQVmHH3T2Go99GaAnl2Kc5qChPZg&',
            results: [],
            forecastKey: 0
        };

        this.setKey = this.setKey.bind(this);
    }

    componentWillMount() {
        fetch(this.state.url + 'q=' + this.props.location)
        .then(res => res.json())
        .then(res => {
            this.setState({results: res});
        })
    }

    setKey(key) {
        this.setState({forecastKey: key});
    }

    render() {

        console.log(this.state.results);
        let cities = this.state.results.map( el => {
            let data = el.AdministrativeArea;

            return <City data={data} key={el.Key} name={el.LocalizedName} setKey={this.setKey}  forecastKey={el.Key}/>

        } );

        return (
            <div>
                <div className='cities-wrapper'>{cities}</div>
            {
                this.state.forecastKey === 0 ?
                <div></div>
                :
                <Forecast forecastKey={this.state.forecastKey} isImperial={this.props.isImperial} />
            }
            </div>
        )
    }
}

export default Results;