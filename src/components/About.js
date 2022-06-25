import React from 'react';
import Cube from './UI/Cube';
import resume from '../images/web-dev-resume_2022_V5.pdf';

function About() {
  return (
    <section id="about">
      <div className="section-heading">
        <h2>About Me</h2>
      </div>
      <div className="content">
        <div className="paragraphs">
          <p>
            I graduated from the Digital Media Design program at the DATC in June of 2020. Throughout the program, I learned design principles, HTML, CSS, JavaScript, PHP, WordPress, and React, along with programs in the Adobe suite. Since graduating I have learned deeper concepts of JavaScript and React, SQL, how to utilize databases with PHP and Supabase, HTTP methods, the basics of server functionality, and loading data effectively from APIs.
          </p>
          <p>
            The most important thing I've learned is how to learn more effeciently. There have been many times I've had to do something that I had next to no knowledge about, but I've always been able to learn the concept quickly and keep moving forward.
          </p>
          <p>
            In mid 2021 I began doing freelance web development through Upwork and my own business, Ice Cap Media. During this time I made websites from scratch for clients and worked on some established websites as well. I gained invaluable experience during this time. Some of the most important concepts I learned were how to communicate technical concepts effectively, how to build complex designs based on mockups designed by someone else, and how to manage time effeciently in order to meet deadlines proposed by clients. 
          </p>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>
        <div className="cube">
          <Cube color={0x1D0543} size={350} />
        </div>
      </div>
    </section>
  )
}

export default About;