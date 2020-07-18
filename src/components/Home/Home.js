import React from 'react';
// import "../App.css";
import './Home.css';
import sample from './Animation - 4517.mp4';
import Fade from 'react-reveal/Fade';

// import "../About/About";
// import Scrollspy from "react-scrollspy";
// import Links from "../Links";

export default function Home() {
  return (
    <div className="Home-wrapper" id="home">
      <video autoPlay muted loop id="myVideo">
        <source src={sample} type="video/mp4"></source>
      </video>
      {/* <div className="motto"> */}
      <div className="Home-intro">
        <Fade right>
          <h1>Making great things possible</h1>
        </Fade>

        <Fade left>
          <h2>Hi, I'm Katerina</h2>
        </Fade>
        <Fade right>
          <div className="Home-intro-div">
            Full Stack Developer
            <p>Creative problem solver, team player and tech enthusiast</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
