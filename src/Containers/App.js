import React, { Component } from 'react';
import Logo from '../Components/Logo/Logo';
import Calculator from '../Components/Calculator/Calculator';
import Report from '../Components/Report/Report';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const initialState = {
  route: 'cal',
  basicSalary: 13500,
  dob: '1995-10-26'
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'cal',
      bs: 13500,
      dob: '1995-10-26'
    }
  }

  setBSalary = (salary) => {
      this.setState({bs: salary})
  }

  setDOB = (dob) => {
      this.setState({dob: dob})
  }

  onRouteChange = (route) => {
      if (route === 'cal') {
        this.setState(initialState);
      } else {
        this.setState({route: route});
      }
    }

  render() {
    return (
      <div className="App">
        <Particles params={particlesOptions} className='particles' />
        { this.state.route === 'cal' ? <div> <Calculator  state={this.state} setBSalary={this.setBSalary} setDOB={this.setDOB} onRouteChange={this.onRouteChange}/> </div> : <div> <Report state={this.state} onRouteChange={this.onRouteChange}/> </div>}
        <footer className="f5 black">
          © 2020 | Made by <a className="dim hover-white b" href="https://yousefalturkey.sa/" target="_blank" style={{textDecoration: "none"}}> Yousef Alturkey</a>.
        </footer>
      </div>
    );
  }
}

export default App;
