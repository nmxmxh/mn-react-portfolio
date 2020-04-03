import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectProject }  from '../../../redux/projects/projects.actions';

import './project-card.styles.scss';

const ProjectCard = ({ project, history, selectProject }) => {

    return (
        <div 
            className='project-card-container' style={{
            backgroundImage: `url(${project.imageUrl})`
            }}
            onClick={() => {
                history.push(`projects/${project.linkUrl}`);
                selectProject(project);
            }}
            key={project.id}
        >
            <span className='project-content-container'>
                <h2>{project.title}</h2>
                <p>{project.shortDesc}</p>
            </span>     
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    selectProject: project => dispatch(selectProject(project))
});

export default connect(null, mapDispatchToProps)(withRouter(ProjectCard));
// export default withRouter(connect(null, mapDispatchToProps)(ProjectCard))
// export default withRouter(ProjectCard);