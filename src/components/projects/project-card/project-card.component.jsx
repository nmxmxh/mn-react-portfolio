import React from 'react';

import './project-card.styles.scss';

const ProjectCard = ({ project }) => {

    console.log(project)
 
    return (
        <div className='project-card-container' style={{
            backgroundImage: `url(${project.imageUrl})`
            }}>
            <span className='project-content-container'>
                <h2>{project.title}</h2>
                <p>{project.shortDesc}</p>
            </span>     
        </div>
    )
}

export default ProjectCard;