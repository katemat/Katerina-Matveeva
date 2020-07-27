import React from 'react';

import './Home.css';
import sample from './Animation - 4517.mp4';
import Fade from 'react-reveal/Fade';

export default function Home() {
  return (
    <div className="Home-wrapper" id="home">
      <video autoPlay muted loop id="myVideo">
        <source src={sample} type="video/mp4"></source>
      </video>

      <div className="Home-intro">
        <Fade right>
          <h1>Making great things possible</h1>
        </Fade>

        <Fade right>
          <h2>Hi, I'm Katerina</h2>
        </Fade>
        <Fade bottom cascade>
          <div className="Home-intro-div">
            <p>Full Stack Developer</p>
            <p>Creative problem solver, team player and tech enthusiast</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
