import React from 'react';
import './About.css';

function About() {
  return (
    <div id="about" className="About-container">
      <aside>
        <div className="About-img">
          <img src="/images/photo.png" alt="personal" />
        </div>
      </aside>
      <main>
        <div>
          <h2>About me</h2>
          <p>My name is Katerina Matveeva. </p>
          <p>
            I was born in Russia and moved to Australia with my family 5 years
            ago.
          </p>
          <div className="btn-wrapper">
            <a
              href="https://drive.google.com/file/d/1hQRtNkrUFEjs4_O8APZa8QPipd03y4OX/view"
              target="blank"
            >
              <button className="cv-btn">Download CV</button>
            </a>
          </div>
        </div>
      </main>
      <div className="About-newChapter">
        <h3>Learning is my hobby and creating is my passion</h3>
        <p>
          To become a Software Developer was my dream for a long time and every
          day I tried to get closer and closer to achieve it. Udemy
          tutorials,youtube tutorials, reading articles, code challenges ... it
          was all great but I was missing some structural learning, some proper
          guidence. That's why at the end of 2019 I made a decision to quit my
          job and devote all my time to make my dream come true.
        </p>
        <h3>March 2020... New Chapter in my Life Begins</h3>
        <p>
          Four months later I graduated from{' '}
          <strong>
            General Assembly <em>Software Engineering Immersive Program </em>
          </strong>
          - more than <strong>400 contact hours</strong> and{' '}
          <strong>200 plus hours outside of class</strong>. I have been taught
          to look at the problem from different angles, split the task into
          steps and implement one after another, all these skills ultimately
          gave me confidence in coding. During this Program I completed several
          Projects, growing my development skills and polishing soft skills,
          when working in a team.
        </p>
        <p>
          Now I can proudly say that I am ready to dive into development world
          bringing new ideas to life.
        </p>
        <p>
          I am <strong>highly efficient at solving problems</strong> and{' '}
          <strong>providing workflow solutions</strong> to deliver the best
          possible outcome.
        </p>
        <p>
          My background in hospitality industry enchanced my{' '}
          <strong>ability to work in a team</strong>. My leadership skills
          allowed me in my previous role to create a  supportive and inspiring
          working environment for all my colleagues. I have developed great
          time-managment skills, being organized and focused team player that
          collaborates for positive and healthy environment seeking challenges
          and oppotunities to grow and improve, while also developing and
          delivering.
        </p>
        <h3>Future Plans</h3>
        <p>
          I would be happy to join the team that focuse on success, the team who
          put people on first place and aiming to deliver efficient solutions to
          their customers.
          <h3>Tech Stack</h3>
          <ul>
            <li>HTML, CSS</li>
            <li>JavaScript</li>
            <li>Ruby</li>
            <li>Node.js</li>
            <li>React</li>
          </ul>
          I'm excited to dive into new technologies, just mention a few as I
          openned to any exciting opportunities that will give me a chance to
          enchance my skills set, to achieve new goals in my professional
          developement:
          <ul>
            <li>Vue</li>
            <li>Python</li>
            <li>Cloud Technologies</li>
          </ul>
        </p>
      </div>
      {/* <div className="btn-wrapper">
        <a
          href="https://drive.google.com/file/d/1hQRtNkrUFEjs4_O8APZa8QPipd03y4OX/view"
          target="blank"
        >
          <button className="cv-btn">Download CV</button>
        </a>
      </div> */}
    </div>
  );
}

export default About;
