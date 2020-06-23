import React from "react";
import ProjectsDetails from "../ProjectsDetails";
import "./ProjectsList.css";
import { Link } from "react-router-dom";

function ProjectsList() {
  let data = ProjectsDetails;
  return (
    <div className="ProjectsList-wrapper">
      {data.map((project, idx) => {
        return (
          <Link to={`/${idx}`} key={idx}>
            <div className="ProjectsList-container">
              <h2>{project.title}</h2>
              <div className="ProjectsList-image">
                <img src={project.image} alt="screenshot" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProjectsList;
