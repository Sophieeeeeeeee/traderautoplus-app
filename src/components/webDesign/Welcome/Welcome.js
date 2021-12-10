import React, { Component } from "react";
import { Button } from "../Button/Button";
import "../../../app/App.css";
import "./Welcome.css";
import ReactPlayer from "react-player/youtube";

/**
 * Renders Welcome (home) page with all the fancy buttons
 */
class WelcomeSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-container">
        <section className="videoplayer">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=8m9vzffbae4"
            playing
            loop
            muted
            width="100%"
            height="80%"
          />
        </section>

        <h1>Find your most suitable car and loan.</h1>

        <p>Get Started Here</p>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            link="/sign-up"
          >
            Get Started
          </Button>

          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
            link="/sign-in"
          >
            Sign In <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
    );
  }
}

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <WelcomeSection />
      </>
    );
  }
}

export default Welcome;
