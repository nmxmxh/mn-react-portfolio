import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Helmet from 'react-helmet';

import './project-page.styles.scss';

const ProjectPage = ({ selectedProject }) => {
    if (!selectedProject) {
        return <Redirect to='/projects' alt="projects"/>
    }

    return (
        <div className="project-page">
            <Helmet>
                <title>Nobert's Portfolio | {selectedProject.title} </title>
            </Helmet>
        <div className="project-entry-container">
            <div className="project-entry-header">
                <div className="project-entry-image" style={{
                backgroundImage: `url(${selectedProject.imageUrl})`
                }}/>
                <div className="project-entry-content">
                    <h1>{selectedProject.title}</h1>
                    <h2>{selectedProject.shortDesc}</h2>
                    <div className="links-container">                    
                        <a href={selectedProject.siteLink}>
                            <p>SITE</p>
                        </a>
                        <a href={selectedProject.repoLink}>
                            <p>REPO</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-content">
                {
                    selectedProject.longDesc.map( desc => 
                        (
                            <p key={desc}>{desc}</p>
                        )
                    )
                }
                <p>{selectedProject.longDesc}</p>
            </div>

        </div>

            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedProject: state.projects.selectedProject[0]
    }
}

export default connect(mapStateToProps)(ProjectPage);