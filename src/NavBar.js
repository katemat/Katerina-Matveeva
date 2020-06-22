import React from "react";
import Scrollspy from "react-scrollspy";
import Links from "./Links";

function NavBar() {
  return (
    <div className="App-nav">
      <Scrollspy
        items={["home", "about", "projects"]}
        currentClassName="is-current"
        offset={0}
        className="nav-list"
      >
        <div className="nav-name">
          <li>
            <a className="nav-link" href="#home">
              Katerina M, Software Developer
            </a>
          </li>
        </div>
        <div className="nav-item">
          <li>
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
        </div>
        <div className="nav-item">
          <li>
            <a className="nav-link" href="#projects">
              My Projects
            </a>
          </li>
        </div>
      </Scrollspy>
      {/* <div className="App-icons">
        <div className="cv-icon">
          <a
            href="https://drive.google.com/file/d/1hQRtNkrUFEjs4_O8APZa8QPipd03y4OX/view"
            target="blank"
          >
            <i className="fas fa-file"></i>
          </a>
        </div>
        <div className="github-icon">
          <a href="https://github.com/katemat" target="blank">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="linkedin-icon">
          <a
            href="https://www.linkedin.com/in/katerina-matveeva/"
            target="blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div> */}
      <Links />
    </div>
  );
}

export default NavBar;
