import React from 'react';
import githubMark from '../images/GitHub-Mark-120px-plus.png';
import codeWarsLogo from '../images/codewars-logo.png';
import linkedInLogo from '../images/linkedin-logo.png';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-container">
          <div className="section-heading">
            <h2>Contact</h2>
          </div>

          <form name="contact" method="POST" autocomplete="off" >
            <input type="hidden" name="form-name" value="contact" />

            <div className="form-input-container">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-input-container">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-input-container">
              <label htmlFor="message" >Message</label>
              <textarea name="message" id="message" rows="4" required minlength="20"></textarea>
            </div>

            <button type="submit">Send</button>
          </form>

        </div>
        <div className="socials-container">
          <div className="section-heading">
            <h2>Socials</h2>
          </div>
          <div className="social-logos">
            <a href="https://github.com/Ice-Cap" target="_blank" rel="noopener noreferrer">
              <img src={githubMark} alt="Github logo" />
            </a>
            <a href="https://www.linkedin.com/in/canyon-christiansen/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInLogo} alt="Linkedin logo" />
            </a>
            <a href="https://www.codewars.com/users/jazzkeys" target="_blank" rel="noopener noreferrer">
              <img src={codeWarsLogo} alt="Codewars logo" />
            </a>
          </div>
          <div className="codewars-badge">
            <a href="https://www.codewars.com/users/jazzkeys" target="_blank" rel="noopener noreferrer">
              <img src="https://www.codewars.com/users/jazzkeys/badges/large" alt="Codewars badge" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;