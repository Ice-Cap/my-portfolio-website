import React from 'react';
import Cube from './UI/Cube';

function About() {
  return (
    <section id="about">
      <div className="section-heading">
        <h2>About</h2>
      </div>
      <div className="content">
        <div className="paragraphs">
          <p>
            I'm a web developer with 2 years of experience building custom websites using technologies like HTML, CSS, JavaScript, PHP, WordPress, and React. My main focus is to build websites that provide real-world value for my clients. I write all of my code semantically to ensure it's optimized for SEO and I code my websites to be fully mobile responsive and cross-browser compatible as well.
          </p>
          <p>
            I'm a web developer with 2 years of experience building custom websites using technologies like HTML, CSS, JavaScript, PHP, WordPress, and React. My main focus is to build websites that provide real-world value for my clients. I write all of my code semantically to ensure it's optimized for SEO and I code my websites to be fully mobile responsive and cross-browser compatible as well.
          </p>
          <a href='https://icecapmedia.com/wp-content/uploads/2022/02/web-dev-resume_2022.pdf'>My Resume</a>
        </div>
        <div className="cube">
          <Cube color={0x1D0543} />
        </div>
      </div>
    </section>
  )
}

export default About;