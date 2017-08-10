import React, { Component } from "react";
import "../../App.css";

class Description extends Component {
  constructor(title, description) {
    super();
    this.title = title;
    this.description = description;
  }
  render() {
    return (
      <div className="techbio-container">
        <h4>About the {this.title}: </h4>
        <p>{this.description}</p>
      </div>
    )
  }
}

export default Description;
