import React, { useState } from 'react';
import ProjectsList from '../ProjectsList/ProjectsList';
import './Projects.css';
import projectsDetails from '../../ProjectsDetails';

function Projects() {
  const [flipcards, setFlipCards] = useState(projectsDetails);
  return (
    <div id="projects">
      <div className="Projects-container">
        <ProjectsList flipcards={flipcards} />
      </div>
    </div>
  );
}

export default Projects;
