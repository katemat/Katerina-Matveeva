import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import ProjectsList from "./ProjectsList";
// import projectsDetails from "./ProjectsDetails";
import SingleProject from "./SingleProject";
import MainPage from "./MainPage";

function App() {
  return (
    <div className="App">
      <div>
        {/* <nav className="App-nav">
          <div className="App-name">
            <h2>Katerina M, Software Developer</h2>
          </div>
          <div className="App-menu">
            <Link to="/">Home</Link>
          </div>
          <div className="App-menu">
            <Link to="/about"> About</Link>
          </div>
          <div className="App-menu">
            <Link to="/projects">My Projects</Link>
          </div> */}
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
        </div> */}
        {/* </div> */}
        {/* </nav> */}

        <Switch>
          <Route exact path="/" render={() => <MainPage />} />

          <Route
            exact
            path="/:id"
            render={(props) => <SingleProject {...props} />}
          />
        </Switch>
      </div>

      <footer>
        &copy;2020 KM
        <div> enthusiastic and passionate about what I do</div>
      </footer>
    </div>
  );
}

export default App;
