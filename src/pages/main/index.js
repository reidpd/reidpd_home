import React, { Component } from 'react';
import {
  // BrowserRouter,
  // Route,
  Link,
} from 'react-router-dom';
import Projects from '../../components/about/code/projects.js';
import content from '../../assets/content/content.js';
import '../../App.css';

class Main extends Component {
  render() {
    return (
      <div>
        <div id="header" style={{height:window.innerHeight}}>
          <div id="name-box">
            <h2 id="name">Reid Delahunt</h2>
            <h5 id="job-titles">CODER AND MUSICIAN</h5>
          </div>
        </div>
        <div id="content-container">
          <div id="contact-box">
            <p id="phone-number">415-343-2772</p>
            <a id="email" href="mailto:reidpierredelahunt@gmail.com">reidpierredelahunt@gmail.com</a>
          </div>
          <div id="small-bio-box">
            <p>As a lifelong musician, and lover of maths and language, Reid Delahunt is pursuing web development and coding work with a set of generous skills that crossover lines of critical thinking. He has a reputation for professional discipline, organizational detail, multi-lingual expertise and a friendly demeanor. Currently seeking an entry level position as a web developer on a serious project team while continuing to dig into process and practice.</p>
            <p>Coming to coding from a music conservatory education, Reid has accomplished a long career of study and performance as an instrumentalist and opera singer with a Bachelor degree from the Manhattan School of Music in New York City, and a Masters degree from the San Francisco Conservatory of Music. A 2017 six month course of study at Galvanize in San Francisco has prepared Reid to code and create work that assists online presence.</p>
          </div>
          {/* Projects Listing */}
          <Projects />
        </div>
      </div>
    );
  }
}

export default Main;
