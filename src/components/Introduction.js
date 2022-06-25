import React from 'react';
import jsLogo from '../images/javascript-logo.png';
import reactLogo from '../images/react-logo.png';
import gitLogo from '../images/git-logo.png';
import sassLogo from '../images/sass-logo.png';
import bootstrapLogo from '../images/bootstrap-logo.png';
import phpLogo from '../images/php-logo.png';
import postgre from '../images/postgre.png';
import Cube from './UI/Cube';
import githubMark from '../images/GitHub-Mark-Light-120px-plus.png';

function Introduction() {
  return (
    <section id="introduction" >
    
      <div className="top-container container">
        <div className="github-logo">
          <a href="https://github.com/Ice-Cap" target="_blank" rel="noopener noreferrer">
            <img src={githubMark} alt="Github logo" />
          </a>
        </div>
        <div className='heading-and-cube'>
          <div className="heading-container">
            <h1>Hi, my name is Canyon</h1>
            <p>I'm a web developer with a strong passion for building things</p>
          </div>
          <div className="cube">
            <Cube color={0xffffff} size={300} />
          </div>
        </div>
      </div>
      <h3 className="tools-heading">These are my favorite tools</h3>
      <div className="tools">
        <div className='text-center'>
          <img src={jsLogo} alt="JavaScript Logo"/>
          <img src={reactLogo} alt="React Logo"/>
          <img src={gitLogo} alt="Git Logo"/>
          <img src={sassLogo} alt="Sass Logo"/>
          <img src={bootstrapLogo} alt="Bootstrap Logo"/>
          <img src={phpLogo} alt="PHP Logo"/>
          <img src={postgre} alt="PostgreSQL Logo"/>
        </div>
      </div>
    </section>
  )
}

export default Introduction;