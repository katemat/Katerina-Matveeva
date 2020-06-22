import React from "react";
import ProjectsDetails from "./ProjectsDetails";
import "./SingleProject.css";
import Links from "./Links";
import { Link } from "react-router-dom";

function SingleProject(props = {}) {
  let data = ProjectsDetails;
  let project = data[props.match.params.id];

  console.log(project);

  return (
    <div className="SingleProject-container">
      <nav className="singleProject-nav">
        <div className="singleProject-nav-name" title="back to Home Page">
          <Link to="/">Katerina M, Software Developer</Link>
        </div>
        <div>
          <Links />
        </div>
      </nav>
      <h1>Project {project.title} </h1>
      <div className="SingleProject-image">
        <img src={project.image} alt="screenshot" />
      </div>
      <div className="SingleProject-details">
        <div>
          <h3>Overview:</h3> {project.description}
        </div>
        <div>
          <h3>Technologies used:</h3> {project.technologies}
        </div>
        <div>
          <h3>Challenges/ Lessons Learnt:</h3> {project.challenges}
        </div>
        <div>
          <h4>
            Check the Project Code{" "}
            <a href={project.git} target="blank">
              Here
            </a>
          </h4>
        </div>
        <div>
          <h4>
            Try the Project Live{" "}
            <a href={project.solution_url} target="blank">
              Here
            </a>
          </h4>
          <p>Please use the following credentials to login:</p>
          <li>
            {" "}
            email/username: <strong>{project.username}</strong>
          </li>
          <li>
            password: <strong>{project.password}</strong>
          </li>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
