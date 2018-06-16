import React, { Component } from 'react';
import './App.css';
import Routes from './containers/Routes';
import Login from './containers/Login';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: true,
      name: ''
    }
  }

  componentDidMount() {
    const authenticated = sessionStorage.getItem('authenticated');
    this.setState({ 
      isAuthenticated: authenticated
    });
  }

  hasAuthenticated = (authenticated) => {
    if(authenticated) {
      sessionStorage.setItem('authenticated', authenticated);
    } else {
      sessionStorage.removeItem('authenticated')
    }
    this.setState({
      isAuthenticated: authenticated,
      name: sessionStorage.getItem('name')
    })
  };

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      hasAuthenticated: this.hasAuthenticated,
      name: this.state.name
    }

    return (
      <div className="App">
        {this.state.isAuthenticated ? 
          <Routes 
            {...childProps}
          /> : 
          <Login
            {...childProps}
          />}
      </div>
    );
  }
}

export default App;
