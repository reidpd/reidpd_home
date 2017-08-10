import React, { Component } from "react";
import {
  Route,
  Link
} from "react-router-dom";
import Description from '../description_comp';
import content from "../../../assets/content/content.js";
import "../../../App.css";

class Code extends Component {
  constructor(props) {
    super(props);
    this.techbio = content.tech_career.resume_bio;
  }
  render() {
    return (
      <div className="about-code-container">
        <div className="links">
          <Link to="/about/code/projects">_Projects_</Link>
          <Link to="/about/code/tech_exp">_Tech-Stacks_</Link>
        </div>
        <div>
          <Description title="Developer" description={this.techbio} />
        </div>
      </div>
    )
  }
}

export default Code;
