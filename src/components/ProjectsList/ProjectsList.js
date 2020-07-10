import React from 'react';
import ProjectsDetails from '../../ProjectsDetails';
import './ProjectsList.css';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

function ProjectsList() {
  let data = ProjectsDetails;
  return (
    <div className="ProjectsList">
      <h1>My Projects</h1>

      <div className="ProjectsList-wrapper">
        <Zoom>
          {data.map((project, idx) => {
            return (
              <Link to={`/${idx}`} key={idx}>
                <div className="ProjectsList-project-container">
                  <h2>{project.title}</h2>
                  <div className="ProjectsList-project-image">
                    <img src={project.image} alt="screenshot" />
                  </div>
                </div>
              </Link>
            );
          })}
        </Zoom>
      </div>
    </div>
  );
}

export default ProjectsList;
