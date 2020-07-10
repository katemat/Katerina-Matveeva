import React from 'react';
import ProjectsList from '../ProjectsList/ProjectsList';
import './Projects.css';

function Projects() {
  return (
    <div id="projects">
      <div className="Projects-container">
        {/* <h1>My Projects</h1> */}
        <ProjectsList />
      </div>
    </div>
  );
}

export default Projects;
