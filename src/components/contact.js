import React, { Component } from "react";
import content from "../assets/content/content.js";
import "../App.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.social_media = content.social_media;
  }

  render() {
    return (
      <div>
        <h2>Contact Reid!</h2>
        <p>Please feel free to contact me for contracting jobs, both vocal and programmatical!</p>
        <ul>
          <li>Email: {content.contact.email}</li>
          {this.social_media.map(x => <li><a href={x.link}>{x.title}</a></li>)}
          <li>Based in {content.contact.location}</li>
        </ul>
      </div>
    )
  }
}

export default Contact;
