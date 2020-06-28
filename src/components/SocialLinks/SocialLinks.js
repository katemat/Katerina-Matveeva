import React from "react";
import "../NavBar/NavBar.css";

function Links() {
  return (
    <div className="SocialLinks-icons">
      <div className="cv-icon">
        <a
          href="https://drive.google.com/file/d/1yXSWduAKEAjkrsbcS6tTfXcmaQYeNd6I/view?usp=sharing"
          target="blank"
          title="download CV"
        >
          <i className="fas fa-file-pdf"></i>
        </a>
      </div>
      <div className="github-icon">
        <a href="https://github.com/katemat" target="blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="linkedin-icon">
        <a href="https://www.linkedin.com/in/katerina-matveeva/" target="blank">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
}

export default Links;
