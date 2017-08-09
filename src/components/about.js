import React, { Component } from "react";
// import logo from '../../logo.svg';
import content from "../assets/content/content.js";
import '../App.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.techbio = content.tech_career.resume_bio;
  }

  render() {
    return (
      <div className="App">
        <div className="techbio-container">
          <h4>About the Developer: </h4>
          <p>{this.techbio}</p>
        </div>
        <br></br>
        {/* <h3>About the Singer: </h3> */}
      </div>
    );
  }
}

export default About;
