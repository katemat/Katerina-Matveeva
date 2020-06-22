import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about" className="About-container">
      <aside>
        <div className="About-img">
          <img src="/images/photo.png" alt="personal" />
        </div>
      </aside>
      <main>
        <h2>About me</h2>
        <p>
          I am a Software Developer who knows she can outwork the rest. I have
          an extended career history in hospitality, I have successfully managed
          large teams and love working with people.
        </p>
        <p>
          I am a highly efficient at solving problems and providing workflow
          solutions to deliver the best possible outcome.
        </p>
        <p>
          I am ready to dive into development world bringing new ideas to life.
          {/* Learning is my hobby and creating is my passion. */}
        </p>

        <div className="btn-wrapper">
          <a
            href="https://drive.google.com/file/d/1hQRtNkrUFEjs4_O8APZa8QPipd03y4OX/view"
            target="blank"
          >
            <button className="cv-btn">Download CV</button>
          </a>
        </div>
      </main>
    </div>
  );
}

export default About;
