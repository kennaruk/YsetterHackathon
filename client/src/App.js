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

  componentDidMount() {
    this.setState({ 
      isAuthenticated: localStorage.getItem('authenticated')
    });
  }

  hasAuthenticated = (authenticated) => {
    localStorage.setItem('authenticated', authenticated);
    this.setState({
      isAuthenticated: authenticated
    })
  };

  render() {
    return (
      <div className="App">
        {this.state.isAuthenticated ? 
          <Routes/> : 
          <Login 
            hasAuthenticated={this.hasAuthenticated}
          />}
      </div>
    );
  }
}

export default App;
