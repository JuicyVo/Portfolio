import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div>
        <h1 className="contact-heading">Contact Me</h1>
        <span className="contact-desc">
          Please fill out the form below to discuss any work opportunities or message me directly at Williamtviet@gmail.com
        </span>
        <form className="contact-form-container">
          <input type="text" className="contact-input" placeholder="Your Name" />
          <input type="email" className="contact-input" placeholder="Your Email" />
          <textarea className="contact-textarea" name="message" rows="5" placeholder="Your Message" />
          <button type="submit" value="Send" className="contact-submit-button">
            Submit
          </button>
          <div className="contact-links">
            <a href="https://www.instagram.com/juicyvoo" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://github.com/JuicyVo" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href="https://www.linkedin.com/in/william-vo-3bb457a0/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
