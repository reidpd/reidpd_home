import React, { Component } from 'react';
import {
  // BrowserRouter,
  // Route,
  Link,
} from 'react-router-dom'
import webHeaderSmall from '../../assets/images/web_header_small.png';
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
      </div>
    );
  }
}

export default Header;
