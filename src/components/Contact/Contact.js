import React from 'react';
import './Contact.css';
import ContactForm from '../ContactForm/ContactForm';
import sample2 from './Animation - 4519.mp4';
import Popup from 'reactjs-popup';

function Contact() {
  return (
    <div id="contact" className="Contact">
      <video autoPlay muted loop id="myVideo-contact">
        <source src={sample2} type="video/mp4"></source>
      </video>
      {/* <img
        className="responsive"
        src="/lauren-mancke-aOC7TSLb1o8-unsplash.jpg"
        alt="contact me"
      /> */}
      <div className="Contact-container">
        <p className="contact-offer">Want to share ideas or has an offer</p>
        <div className="contact-offer">I'd love to hear from you</div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
