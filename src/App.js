import React, { Component } from 'react';
import * as d3 from 'd3';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log({logo})
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">react-seqlogo</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    )
  }
}

export default App;

module.hot.accept();