import React, { Component } from 'react';
import {
  // BrowserRouter,
  // Route,
  Link,
} from 'react-router-dom'
import webHeaderSmall from '../../assets/images/web_header_small.png';
import headshot from "../../assets/images/RPD_headshot.jpg";
import '../../App.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={webHeaderSmall} className="App-logo" alt="logo" />
          <br></br>
          <Link to="/">Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          {/* <Link to="/techlinks"> Tech Learned </Link> */}
        </div>
        <img src={headshot} className="headshot" alt="headshot" />
      </div>
    );
  }
}

export default Header;
