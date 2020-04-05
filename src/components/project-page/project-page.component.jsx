import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import './project-page.styles.scss';

const ProjectPage = ({ selectedProject, match, projects}) => {

    function ScrollToTopOnMount() {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
      
        return null;
    }

    if (!selectedProject) {
        projects.map(project => {
            if(match.params.linkUrl === project.linkUrl) {
                return selectedProject = project;
            } else {
                return <Redirect to='/projects' alt="projects"/>
            }
        })
    } 



    return (
        <div className="project-page" >
            <ScrollToTopOnMount />
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
                        {
                            selectedProject.siteLink ?
                            <a href={selectedProject.siteLink}>
                                <p>SITE</p>
                            </a>
                            :
                            null
                        }
                        {
                            selectedProject.repoLink ?
                            <a href={selectedProject.repoLink}>
                                <p>REPO</p>
                            </a>
                            :
                            null
                        }                  
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
            </div>

        </div>

            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedProject: state.projects.selectedProject[0],
        projects: state.projects.projects
    }
}

export default connect(mapStateToProps)(withRouter(ProjectPage));