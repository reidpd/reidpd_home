import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
// import logo from '../../logo.svg';
import Description from "./about/description_comp";
import Code from "./about/code/about_code";
import Music from "./about/music/about_music";
import content from "../assets/content/content.js";
import '../App.css';

class About extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/about/code">The_Coder </Link>
          <Link to="/about/music"> The_Musician</Link>
        </div>
        <Route exact path="/about" render={() => (
          <div className="techbio-container">
            <h3>Click the links above to learn more about Reid.</h3>
          </div>
        )} />
        <Route path="/about/code" component={Code} />
        <Route path="/about/music" component={Music} />
      </div>
    );
  }
}

export default About;
