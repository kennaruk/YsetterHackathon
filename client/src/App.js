import React, { Component } from 'react';
import './App.css';
import Routes from './containers/Routes';
import Login from './containers/Login';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: true,
      name: '',
      role: ''
    }
  }

  componentDidMount() {
    var authenticated = localStorage.getItem('authenticated');
    var role = localStorage.getItem('role');
    var name = localStorage.getItem('name');
    this.setState({ 
      isAuthenticated: authenticated,
      role: role,
      name: name
    });
  }

  hasAuthenticated = (authenticated, name, role) => {
    if(authenticated) {
      localStorage.setItem('authenticated', authenticated);
      localStorage.setItem('name', name);
      localStorage.setItem('role', role);
    } else {
      localStorage.removeItem('authenticated')
      localStorage.removeItem('name')
      localStorage.removeItem('role')
    }
    this.setState({
      isAuthenticated: authenticated,
      name: localStorage.getItem('name'),
      role: localStorage.getItem('role')
    })
  };

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      hasAuthenticated: this.hasAuthenticated,
      name: this.state.name,
      role: this.state.role
    }
    {console.log('childProps:', childProps);}
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
