import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './menu.styles.scss';

import blogIcon  from '../../assets/menu-logos/writeicon.png';
import projectsIcon from '../../assets/menu-logos/projectsicon.png';
import homeIcon  from '../../assets/menu-logos/homeicon.png';

const Menu = ( { location } ) => {

    return (
    <div className="menu-bar" id="menu">
        <div className="navigation-home">
            <Link 
                alt="home" 
                className={`navigation-bar-icon ${location.pathname === "/" ? "active" : "" }`} 
                to='/'
            >
                <img src={homeIcon} alt="home" />
                <h1>home</h1>
            </Link>
        </div>
        <div className="navigation-bar">
            <Link 
                alt="projects"
                className={`navigation-bar-icon ${location.pathname[1] === "p" ? "active" : "" }`} 
                to='/projects'
            >
                    <img src={projectsIcon} alt="projects" />
                    <h1>projects</h1>
            </Link>
            <Link
                alt="blog"
                className={`navigation-bar-icon ${location.pathname[1] === "b" ? "active" : "" }`} 
                to='/blog'
            >
                <img src={blogIcon} alt="blog" />
                <h1>blog</h1>
            </Link>
        </div>
        <div className="social-links"> 
            <div className="fa-container">
                <a 
                    href="https://twitter.com/nobert___"
                    aria-label="twitter"
                >
                    <div className="fa fa-twitter"/>
                </a>
            </div>
            <div className="fa-container">
                <a 
                    href="https://www.linkedin.com/in/momohnobert"
                    aria-label="linked-in"
                >
                    <div className="fa fa-linkedin"/>
                </a>
            </div>
            <div className="fa-container">
                <a 
                    href="https://github.com/MomohNobert"
                    aria-label="github"
                >
                    <div className="fa fa-github"/>
                </a>
            </div>          
        </div>
    </div>
    )
}


export default withRouter(Menu);