import React, { useState } from 'react';
import ProjectsList from '../ProjectsList/ProjectsList';
import './Projects.css';

function Projects() {
  return (
    <div id="projects">
      <div className="Projects-container">
        <ProjectsList />
      </div>
    </div>
  );
}

export default Projects;
