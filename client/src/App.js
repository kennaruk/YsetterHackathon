import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './containers/Routes';
import Login from './containers/Login';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: true
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.isAuthenticated ? <Routes/> : <Login/>}
      </div>
    );
  }
}

export default App;
