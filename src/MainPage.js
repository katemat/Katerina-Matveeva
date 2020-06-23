import React from "react";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";

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
