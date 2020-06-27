import React from "react";
import "./DrawerToggleButton.css";

const DrawerToggleButton = (props) => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line"></div>
    <div className="toggle-button__line"></div>
    <div className="toggle-button__line"></div>
  </button>
);

export default DrawerToggleButton;
