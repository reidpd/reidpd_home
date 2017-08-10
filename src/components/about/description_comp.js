import React, { Component } from "react";
import "../../App.css";

class Description extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.description = props.description;
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
