import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  // Link,
} from 'react-router-dom'
import './App.css';
import Header from "./components/init/header";
import About from "./components/about";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      // <initSetup />
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={Header} />
          {/* <NavBar /> */}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Route path="/tech" component={TechPage} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
