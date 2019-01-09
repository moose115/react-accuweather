import React, { Component } from 'react';

class Forecast extends Component {

    constructor(props) {
        super(props);

        this.state = {
            url: 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/',
            apiKey: '?apikey=ss1vjQVmHH3T2Go99GaAnl2Kc5qChPZg',
            isMetric: !this.props.isImperial,
            forecast: {},
            didFetch: false
        }
    }

    componentWillMount() {
        fetch(this.state.url + this.props.forecastKey + this.state.apiKey + '&metric=' + this.state.isMetric)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            this.setState({forecast: res, didFetch: true});
        });
    }

    render() {
        if(this.state.didFetch){
            let data = this.state.forecast;
            
            let date = new Date(data.DailyForecasts[0].EpochDate);
            
            return(
                <div>
                    <p>{date.toDateString()}</p>
                    <p>{data.Headline.Text}</p>
                    <p>Min: {data.DailyForecasts[0].Temperature.Minimum.Value}{data.DailyForecasts[0].Temperature.Minimum.Unit}</p>
                    <p>Max: {data.DailyForecasts[0].Temperature.Maximum.Value}{data.DailyForecasts[0].Temperature.Maximum.Unit}</p>
                </div>
            );
        } else return(
            <div></div>
        );
    }
}

export default Forecast;