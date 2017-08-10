import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
// import logo from '../../logo.svg';
import Description from "./about/description_comp";
import content from "../assets/content/content.js";
import '../App.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.techbio = content.tech_career.resume_bio;
    this.musicbio = content.music_career.music_bio;
  }

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
        <Route path="/about/code" render={ () => (
          <div className="techbio-container">
            <h4>About the Developer: </h4>
            <p>{this.techbio}</p>
          </div>
        )} />
        <Route path="/about/music" render={ () => (
          <div className="techbio-container">
            <h4>About the Musician: </h4>
            <p>{this.musicbio}</p>
          </div>
        )} />
      </div>
    );
  }
}

export default About;
