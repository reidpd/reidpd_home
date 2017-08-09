import React, { Component } from "react";
import content from "../assets/content/content.js";
import "../App.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact Reid!</h2>
        <p>Please feel free to contact me for contracting jobs, both vocal and programmatical!</p>
        <ul>
          <li>Email: {content.contact.email}</li>
          <li>Based in {content.contact.location}</li>
        </ul>
      </div>
    )
  }
}

export default Contact;
