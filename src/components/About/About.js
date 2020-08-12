import React from 'react';
import './About.css';
import Skills from '../Skills/Skills';
import Fade from 'react-reveal/Fade';
import skillsData from '../../skillsData';

function About() {
  let skills = skillsData;
  return (
    <div id="about" className="About-container">
      <aside>
        <div className="About-img">
          <img src="/images/photo.png" alt="personal" />
        </div>
      </aside>
      <main>
        <Fade right>
          <h1>Learning is my hobby and creating is my passion</h1>
          <p>
            I am a creative problem-solver, have a curious mind and treat
            learning as a lifelong journey.{' '}
          </p>
        </Fade>
      </main>

      <div className="About-newChapter">
        <Fade left>
          {/* <p>
            I am a creative problem-solver, have a curious mind and treat
            learning as a lifelong journey.{' '}
          </p> */}
          <p>
            I see my main mission as a Software Developer is to deliver
            efficient solutions to customers. I’m driven to bring a long lasting
            positive impact on people’s lives by the power of programming. I
            enjoy working on projects when challenged and surrounded by a
            passionate team.
          </p>

          {/* <p>
            I am highly efficient at solving problems and providing workflow
            solutions to deliver the best possible outcome.
          </p>
          <p>
            Having background in hospitality industry allowed me to develop
            great time-managment and leadership skills, being organized and
            focused team player that collaborates for positive and healthy
            environment, seeking challenges and oppotunities to grow and
            improve.
          </p> */}
          <p>
            I would be happy to join the team that focuse on success, the team
            who put people on first place and aiming to deliver efficient
            solutions to their customers.
          </p>
        </Fade>
        <div className="about__tech-stack">
          <h3>Tech Stack</h3>
          <Skills skills={skills[0]} />
        </div>
        <p>
          I'm excited to dive into new technologies, just mention a few as I
          opened to any exciting opportunities that will give me a chance to
          enchance my skill set, to achieve new goals in my professional
          developement:
        </p>
        <Skills skills={skills[1]} />
      </div>
      {/* <div className="btn-wrapper">
        <a
          href="https://drive.google.com/file/d/1jR8gNUcF5TfHOH8KWwM1Lfa5bTLkPnDP/view?usp=sharing"
          target="blank"
        >
          <button className="cv-btn">Download CV</button>
        </a>
      </div> */}
    </div>
  );
}

export default About;
