import React, { Component } from "react";
import {
  Route,
  Link
} from "react-router-dom";
import Description from '../description_comp';
import Productions from "./productions";
import content from "../../../assets/content/content.js";
import "../../../App.css";

class Music extends Component {
  constructor(props) {
    super(props);
    this.musicbio = content.music_career.music_bio;
  }

  render() {
    return (
      <div className="about-music-container">
        <div className="links">
          <Link to="/about/music/productions">Past Productions</Link>
          <Link to="/about/music/peeps&places">Peoples & Places</Link>
          <Link to="/about/music/media">Watch/Listen</Link>
        </div>
        <div>
          <Description title="Musician" description={this.musicbio} />
        </div>
        <Route path="/about/music/productions" component={Productions} />
        {/* <Route path="/about/music/media" component={MediaPage} /> */}
        {/* <Route path="/about/music/peeps&places" component={PeopleAndPlaces} /> */}
      </div>
    )
  }
}

export default Music;
