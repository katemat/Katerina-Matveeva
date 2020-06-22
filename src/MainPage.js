import React from "react";
import Projects from "./Projects";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";

function MainPage() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default MainPage;
