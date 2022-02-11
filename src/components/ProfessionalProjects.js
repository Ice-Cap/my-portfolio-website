import React from 'react';
import ProjectCard from './UI/ProjectCard';

function ProfessionalProjects() {
  return (
    <section id="professional-projects" className="projects">
      <div className="section-heading">
        <h2 className='center professional-projects'>Professional Projects</h2>
      </div>
      <div className="background-design"></div>
      <div className="projects-container">
        <ProjectCard
          title={'Investing Lynx'}
          shortDescription={'Investing information website'}
          previewLink={'https://investinglynx.com/'}
          codeLink={'https://github.com/Ice-Cap/poke-team-builder'}
          technologiesUsed={'Built with HTML, CSS, Bootstrap, and JavaScript.'}
          fullDescription={"InvestingLynx.com is for people wanting to enter the investing space, but aren't sure where to start."}
        />
        <ProjectCard
          title={'Brave Submarines'}
          shortDescription={'Website for a local band'}
          previewLink={'https://bravesubmarines.com/'}
          codeLink={'https://github.com/Ice-Cap/super-paint'}
          technologiesUsed={'Built with HTML, SCSS, and JavaScript.'}
          fullDescription={'BraveSubmarines.com showcases a local bands music and provides information about the band.'}
        />
        <ProjectCard
          title={'The Lotus and The Lion'}
          shortDescription={'Website for a life coach'}
          previewLink={'https://thelotusandthelion.net/'}
          codeLink={'https://github.com/Ice-Cap/level-up'}
          technologiesUsed={'Built with HTML, SCSS, JavaScript, and PHP.'}
          fullDescription={'TheLotusAndTheLion.net provides information on their life coaching services and links to schedule life coaching sessions.'}
        />
      </div>
    </section>
  )
}

export default ProfessionalProjects;