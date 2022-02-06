import { useState, useEffect } from 'react';
import jsLogo from '../images/javascript-logo.png';
import reactLogo from '../images/react-logo.png';
import gitLogo from '../images/git-logo.png';
import sassLogo from '../images/sass-logo.png';
import bootstrapLogo from '../images/bootstrap-logo.png';
import phpLogo from '../images/php-logo.png';
import postgre from '../images/postgre.png';
import Cube from './Cube';

function Introduction() {
  const [cubeSpeed, setCubeSpeed] = useState(0.006);
  const maxCubeSpeed = 0.03;
  
  useEffect(() => { 
    const cube = document.querySelector('.cube');
    if (cube) {
      console.log(cube.getBoundingClientRect());
    }
  });

  function changeCubeSpeed(e) {
    const cube = document.querySelector('.cube');
    if (cube && cubeSpeed < maxCubeSpeed) {
      setCubeSpeed(prev => prev += 0.0001);
      console.log(e.clientX, cube.getBoundingClientRect());
    }
  }

  return (
    <section id="introduction" onMouseMove={changeCubeSpeed}>
      <div className="top-container">
        <div className="heading-container">
          <h1>Hi, my name is Canyon</h1>
          <p>I'm a web developer with a strong passion for building things</p>
        </div>
        <div className="cube">
          <Cube cubeSpeed={cubeSpeed}/>
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