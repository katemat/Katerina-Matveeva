import React from 'react'
import './Contact.css'
import ContactForm from '../ContactForm/ContactForm'
// import sample2 from './Animation - 4519.mp4';
import LightSpeed from 'react-reveal/LightSpeed'
import Spin from 'react-reveal/Spin'

function Contact() {
  return (
    <div id="contact" className="Contact">
      {/* <video autoPlay muted loop id="myVideo-contact">
        <source src={sample2} type="video/mp4"></source>
      </video> */}

      <div className="Contact-container">
        <div className="contact-offer">
          <LightSpeed left cascade>
            {/* <h4>
              It's always a pleasure for me<br></br> to meet new people
            </h4> */}
            <h4>Want to share ideas or has an offer</h4>
            {/* <h4>Drop me a line</h4> */}
          </LightSpeed>
          <ContactForm />

          <div className="contact__links">
            <Spin>
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/katerina-matveeva/"
                  target="blank"
                  title="linkedin"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </Spin>
            <Spin>
              <div className="github">
                <a
                  href="https://github.com/katemat"
                  target="blank"
                  title="github"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </Spin>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
