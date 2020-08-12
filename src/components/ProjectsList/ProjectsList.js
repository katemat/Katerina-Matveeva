import React from 'react';
import ProjectsDetails from '../../ProjectsDetails';
import './ProjectsList.css';
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
              <div key={idx} className="ProjectsList-project-container">
                <h2>{project.title}</h2>

                <div
                  className="ProjectsList-project-box"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <a href={project.solution_url} target="blank">
                    <div className="project-overlay">
                      <div className="project-animation">
                        <p>{project.technologies}</p>

                        {project.password ? (
                          <p className="project-credentials">
                            username/email: <strong>{project.username}</strong>
                            <br></br>password: {project.password}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </Zoom>
      </div>
    </div>
  );
}

export default ProjectsList;
