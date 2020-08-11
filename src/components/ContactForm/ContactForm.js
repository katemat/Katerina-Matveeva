import React from 'react';
import axios from 'axios';
import './ContactForm.css';

class ContactForm extends React.Component {
  state = {
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'Send Message',
  };

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      buttonText: 'message sent',
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    this.setState({
      buttonText: '...sending',
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    axios
      .post('https://sheltered-ridge-41042.herokuapp.com/contact', data)
      .then((res) => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log('Message not sent');
        alert('message not sent');
      });
  };

  render() {
    return (
      <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
        <h4>Send me a new message</h4>
        <div className="input-wrapper">
          <input
            onChange={(e) => this.setState({ name: e.target.value })}
            name="name"
            className="message-name"
            type="text"
            placeholder="Your Name"
            value={this.state.name}
            required
          />

          <input
            onChange={(e) => this.setState({ email: e.target.value })}
            name="email"
            className="message-email"
            type="email"
            placeholder="your@email.com"
            required
            value={this.state.email}
          />

          <textarea
            onChange={(e) => this.setState({ message: e.target.value })}
            name="message"
            className="message-input"
            type="text"
            placeholder="Your message here..."
            value={this.state.message}
            required
          />
        </div>
        <div className="button--container">
          <button type="submit">{this.state.buttonText}</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
