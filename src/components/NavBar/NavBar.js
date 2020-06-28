import React from "react";
import Links from "../SocialLinks/SocialLinks";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./NavBar.css";

const NavBar = (props) => (
  <header className="NavBar">
    <nav className="NavBar__navigation">
      <div className="drawertogglebtn-div">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="NavBar__logo">
        <a href="#home">Home</a>
      </div>
      <div className="spacer"></div>
      <div className="NavBar_navigation-items">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <Links />
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
