import React, { Component } from 'react';
import './App.css';
import Results from './Results';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      check: false,
      hasSearched: false
    };

    this.cityHandler = this.cityHandler.bind(this);
    this.checkHandler = this.checkHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.noEnter = this.noEnter.bind(this);
  }

  cityHandler(event) {
    this.setState({query: event.target.value, hasSearched: false});
    event.preventDefault();
  }

  checkHandler(event) {
    this.setState({check: event.target.checked});
  }

  submitHandler(event) {
    this.setState({hasSearched: true});
    event.preventDefault();
  }

  noEnter() {
    document.addEventListener('keydown', (event) => {
      if(event.keyCode === 13) {
        event.preventDefault();
        return false;
      }
    });
  }
  
  componentDidMount() {
    this.noEnter();
  }

  render() {
    return (
      <div className="App">
        <h1>Accuweather API usage</h1>

        <form className='form-space'>
          <label className='city'>City:</label>
          <input className='input-text' type='text' onChange={this.cityHandler} placeholder='i.e. London' />
          <br />
          <label className='imperial'>Use imperial:</label>
          <input className='input-check' onClick={this.checkHandler} type='checkbox'/>
          <input type='submit' value='search' onClick={this.submitHandler} />
          <br />
        </form>
        {
          this.state.hasSearched ?
        <Results location={this.state.query} isImperial={this.state.check}/>
        :
        <div></div>
        }
      </div>
    );
  }
}

export default App;

//API KEY ss1vjQVmHH3T2Go99GaAnl2Kc5qChPZg