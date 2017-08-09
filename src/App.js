import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import initSetup from "./components/init/init";

class App extends Component {
  render() {
    return (
      // <initSetup />
      <BrowserRouter>
        <div>
          <Route exact path="/" component={initSetup} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
