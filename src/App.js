import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <h1 style={{ textAlign: 'center' }}>
        <button style={{ fontSize: '50px', marginTop: '100px' }}>
          <a style={{ textDecoration: 'none' }} href="http://currencyup.surge.sh/">
          Welcome to currencyUP! <br/>
          <span> proceed here ---> </span>
        </a>
        </button>
      </h1>
    );
  }
}

export default App;
