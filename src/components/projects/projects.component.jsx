import React from 'react';
import { connect } from 'react-redux';

import { Helmet } from 'react-helmet';

import './project.styles.scss';

import ProjectCard from './project-card/project-card.component';

const Projects = ({ projects }) => {

    return (
    <div className="projects-container">
        <Helmet>
            <title>Nobert's Portfolio | A Few of My Projects</title>
        </Helmet>

        <div className="projects-card-container">
            {
                projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))
            }
        </div>
    </div>
)};

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(Projects);