import React from 'react';
import Cube from './UI/Cube';
import resume from '../images/Resume-2024.pdf';

function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="section-heading">
                    <h2>About Me</h2>
                </div>
                <div className="content">
                    <div className="paragraphs">
                        <p>
                            For as long as I can remember, I've always loved building things, fixing things, and learning new things. And luckily, programming allows me to do all of those things. I have had the opportunity to work on a variety of projects, from simple websites to complex web applications. I emphasize clean, efficient, maintainable, and secure code in all of my work. And even after I finish a project, I'm always looking for ways to iterate on it to imporove it.
                        </p>
                        <p>
                            I studied web development at the DATC and graduated in June of 2020. Throughout the program, I learned HTML, CSS, JavaScript, PHP, WordPress, and React. After graduating, I continued to learn deeper concepts of JavaScript and React, SQL, and PHP on my own through personal projects, courses, and documentation.
                        </p>
                        <p>
                            One of the most important things I've learned is how to learn more effeciently. There have been many times I've had to do something that I had next to no knowledge about, but I've always been able to learn the concept or technology quickly and keep moving forward.
                        </p>
                        <p>
                            In mid 2021 I began doing freelance web development through Upwork. During this time I made websites from scratch for clients and worked on some established websites as well. I gained invaluable experience during this time. Some of the most important concepts I learned were how to communicate technical concepts effectively, how to build complex designs based on mockups designed by someone else, and how to manage time effeciently in order to meet deadlines proposed by clients.
                        </p>
                        <p>
                            After my time freelancing, I began working at DentalQore. I started as a tech support agent, and was promoted to a full stack developer after around 8 months. The experience I gained in this role was immense. I had the opportunity to work on a wide range of full stack projects and worked with some brilliant people who taught me a lot. 
                        </p>
                        <a href={resume} target="_blank" rel="noopener noreferrer">
                            My Resume
                        </a>
                    </div>
                    <div className="cube">
                        <Cube color={0x1D0543} size={350} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;