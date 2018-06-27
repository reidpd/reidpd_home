import React, { Component } from 'react';
import content from "../../../assets/content/content.js";

class Project extends Component {
  constructor(props) {
    super(props);
    this.name = props.data.name;
    this.repo = props.data.github_repo;
    this.deployed = props.data.deployed;
    this.comments = props.data.comments;
    // this.image = props.data.image;
    // this.tech = props.data.tech_used;
  }

  render() {
    return (
      <div className="project-container">
        <h4>{this.name}</h4>
        <p>
          <a href={this.repo}>Github Repo</a>,
          <a href={this.deployed}>Deployed Version</a>
        </p>
        <p>{this.comments}</p>
        <br></br>
      </div>
    )
  }
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.projects = content.tech_career.projects;
  }

  render() {
    return (
      <div className="projects-container">
        <h3>Reid's Projects</h3>
          {this.projects.map(project_obj => <Project data={project_obj} /> )}
      </div>
    )
  }
}

export default Projects;
