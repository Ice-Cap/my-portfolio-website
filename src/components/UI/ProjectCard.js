import React from 'react';

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="thumbnail">
        <div className="overlay">
          <h3>{props.title}</h3>
        </div>
      </div>
      <p className="short-description">
        {props.shortDescription}
      </p>
      <div className="details">
        <div className="buttons-container">
          <a href={props.previewLink}>Preview</a>
          <a href={props.codeLink}>Code</a>
        </div>
        <p className="technologies">
          {props.technologiesUsed}
        </p>
        <p className="full-description">
          {props.fullDescription}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;