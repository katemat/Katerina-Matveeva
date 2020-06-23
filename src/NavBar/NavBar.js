import React from "react";
import Scrollspy from "react-scrollspy";
import Links from "../Links";

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
      <Links />
    </div>
  );
}

export default NavBar;
