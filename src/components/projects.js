import React from 'react';
import ProjectCard from './UI/ProjectCard';

function Projects() {
  return (
    <section id="projects">
      <div className="section-heading">
        <h2 className='center'>Projects</h2>
      </div>
      <div className="background-design"></div>
      <div className="projects-container">
        <ProjectCard 
          title={'Level Up'}
          shortDescription={'A browser based productivity app'}
          previewLink={'#'}
          codeLink={'https://github.com/Ice-Cap/level-up'}
          technologiesUsed={'Built with React, Sass, Supabase, and Git for version control.'}
          fullDescription={'The purpose of this app is to help people see progress within their skills.'}
        />
        <ProjectCard 
          title={'Poké Team Builder'}
          shortDescription={'A Pokémon team builder'}
          previewLink={'https://poketeambuilder.io/'}
          codeLink={'#'}
          technologiesUsed={'Built with React, CSS, and PokeAPI.'}
          fullDescription={'This is a pokémon team builder that helps people build better teams for competetive pokémon.'}
        />
        <ProjectCard 
          title={'Super Paint'}
          shortDescription={'A browser based drawing app'}
          previewLink={'https://superpaint.netlify.app/'}
          codeLink={'#'}
          technologiesUsed={'Built with HTML, CSS, and vanilla JavaScript.'}
          fullDescription={'This is a simple browser based drawing app created with vanilla JavaScript and the canvas API.'}
        />
      </div>
    </section>
  )
}

export default Projects;