import React, { Component } from 'react';
import content from "../../../assets/content/content.js";
import '../../../App.css';

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

class ProjectGithubButton extends Component {
  constructor(props) {
    super(props);
    this.name = props.data.name;
    this.repo = props.data.github_repo;
  }

  render() {
    return (
      <button class="repo-button">
        <a href={this.repo}>{this.name} on GitHub</a>
      </button>
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
          {/* {this.projects.map(project_obj => <Project data={project_obj} /> )} */}
        <ul class="no-bullets-list">
          {this.projects.map(project_obj => <li><ProjectGithubButton data={project_obj} /></li>)}
        </ul>
      </div>
    )
  }
}

export default Projects;
