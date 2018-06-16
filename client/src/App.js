import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, withRouter } from "react-router-dom";
import Routes from './Routes';
// or
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        {/* <Button /> */}
        {/* <ReactMic
          record={true}         // defaults -> false.  Set to true to begin recording
          className="ReactMic"       // provide css class name
          onStop={() => {console.log('Stop')}}        // callback to execute when audio stops recording
          strokeColor="#000000"     // sound wave color
          backgroundColor="#FF4081" // background color
        /> */}
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Routes /> */}
      </div>
    );
  }
}

export default withRouter(App);
