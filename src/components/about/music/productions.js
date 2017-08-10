import React, { Component } from "react";
import content from "../../../assets/content/content.js";
import "../../../App.css";

class Production extends Component {
  constructor(props) {
    super(props);
    this.title = props.data.title;
    this.composer = props.data.composer;
    this.role = props.data.role;
    this.company = props.data.company;
    this.language = props.data.language;
    this.years_performed = props.data.years_performed;
    this.opera_wiki = props.data.links.opera_wiki;
  }

  render() {
    return (
      <div>
        <h4><a href={this.opera_wiki}>{this.title}</a>, by <a href={this.composer.wiki}>{this.composer.last}</a></h4>
        <p>Performed the role of {this.role} in {this.language} with <a href={this.company.link}>{this.company.name}</a> in {this.company.location}</p>
        <p>Time Performed: {this.years_performed.join(', ')}</p>
        <br></br>
      </div>
    )
  }
}

class Productions extends Component {
  constructor(props) {
    super(props);
    this.productions = content.music_career.operas;
  }

  render() {
    return (
      <div className="productions-container">
        {this.productions.map(x => {
          return <Production data={x} />
        })}
      </div>
    )
  }
}

export default Productions;
