import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom'
import logo from '../../logo.svg';
import webHeaderSmall from '../../assets/images/web_header_small.png';
import headshot from "../../assets/images/RPD_headshot.jpg";
import '../../App.css';

class initSetup extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={webHeaderSmall} className="App-logo" alt="logo" />
          <img src={headshot} className="headshot" alt="headshot" />
          {/* <h2>Welcome to React</h2> */}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default initSetup;
