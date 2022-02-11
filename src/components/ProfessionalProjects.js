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
          title={'The Lotus and The Lion'}
          shortDescription={'Website for a life coach'}
          previewLink={'https://thelotusandthelion.net/'}
          codeLink={'https://github.com/Ice-Cap/level-up'}
          technologiesUsed={'Built with HTML, CSS, and JavaScript'}
          fullDescription={'The purpose of this app is to help people see progress within their skills.'}
        />
        <ProjectCard
          title={'Investing Lynx'}
          shortDescription={'Investing information website'}
          previewLink={'https://poketeambuilder.io/'}
          codeLink={'https://github.com/Ice-Cap/poke-team-builder'}
          technologiesUsed={'Built with HTML, CSS, and JavaScript'}
          fullDescription={'This is a pokémon team builder that helps people build better teams for competetive pokémon.'}
        />
        <ProjectCard
          title={'Brave Submarines'}
          shortDescription={'Website for a local band'}
          previewLink={'https://superpaint.netlify.app/'}
          codeLink={'https://github.com/Ice-Cap/super-paint'}
          technologiesUsed={'Built with HTML, CSS, and JavaScript.'}
          fullDescription={'This is a simple browser based drawing app created with vanilla JavaScript and the canvas API.'}
        />
      </div>
    </section>
  )
}

export default ProfessionalProjects;