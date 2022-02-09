import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-container">
          <div className="section-heading">
            <h2>Contact</h2>
          </div>
          <form name="contact" method="POST" data-netlify="true">
            <div className="form-input-container">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-input-container">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className="form-input-container">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <button>Send</button>
          </form>
        </div>
        <div className="socials-container">
          <div className="section-heading">
            <h2>Socials</h2>
          </div>
          <div className="social-logos">
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;