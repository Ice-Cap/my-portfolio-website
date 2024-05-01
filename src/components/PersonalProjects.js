import React from 'react';
import ProjectCard from './UI/ProjectCard';

function PersonalProjects() {
    return (
        <section id="personal-projects" className="projects">
            <div className="section-heading">
                <h2 className='center personal-projects'>Personal Projects</h2>
            </div>
            <div className="background-design"></div>
            <div className="projects-container">
                <ProjectCard
                    title={'Poké Team Builder'}
                    shortDescription={'A Pokémon team builder'}
                    previewLink={'https://poketeambuilder.io/'}
                    codeLink={'https://github.com/Ice-Cap/poke-team-builder'}
                    technologiesUsed={'Built with React, CSS, and PokeAPI.'}
                    fullDescription={'This is a pokémon team builder that helps people build better teams for competetive pokémon.'}
                />
                <ProjectCard
                    title={'Level Up'}
                    shortDescription={'A browser based productivity app'}
                    previewLink={'https://leveluptimetracker.com/'}
                    codeLink={'https://github.com/Ice-Cap'}
                    technologiesUsed={'Built with React, Redux, Sass, and Supabase.'}
                    fullDescription={'The purpose of this app is to help increase productivity by allowing users to track time in different skills and see their progress over time.'}
                />
                <ProjectCard
                    title={'Graph Maker'}
                    shortDescription={'Create Graphs with nodes and edges'}
                    previewLink={'https://graph-maker-c.netlify.app/'}
                    codeLink={'https://github.com/Ice-Cap/graph-maker'}
                    technologiesUsed={'Built with React, Typescript, and the Canvas API.'}
                    fullDescription={'This is a simple browser based graph maker that allows users to create graphs with nodes and edges.'}
                />
            </div>
        </section>
    );
}

export default PersonalProjects;