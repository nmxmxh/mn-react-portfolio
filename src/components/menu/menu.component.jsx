import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './menu.styles.scss';

import blogIcon  from '../../assets/menu-logos/writeicon.png';
import projectsIcon from '../../assets/menu-logos/projectsicon.png';
import contactIcon  from '../../assets/menu-logos/contactme.png';
import homeIcon  from '../../assets/menu-logos/homeicon.png';



const Menu = ( { location } ) => {

    return (
    <div className="menu-bar">
        <div className="navigation-home">
            <Link className={`navigation-bar-icon ${location.pathname === "/" ? "active" : "" }`} id="home-icon" to='/'>
                <img src={homeIcon} alt="home" />
                <h1>HOME</h1>
            </Link>
        </div>
        <div className="navigation-bar">
            <Link 
                className={`navigation-bar-icon ${location.pathname === "/projects" ? "active" : "" }`} 
                to='/projects'
            >
                    <img src={projectsIcon} alt="projects" />
                    <h1>PROJECTS</h1>
            </Link>
            <Link 
                className={`navigation-bar-icon ${location.pathname === "/blog" ? "active" : "" }`} 
                to='/blog'
            >
                <img src={blogIcon} alt="blog" />
                <h1>BLOG</h1>
            </Link>
            <Link 
                className={`navigation-bar-icon ${location.pathname === "/contact" ? "active" : "" }`} 
                to='/contact'
            >
                <img src={contactIcon} alt="contact"/>
                <h1>CONTACT</h1>
            </Link>
        </div>
        <div className="social-links">
            <div className="fa-container">
                <a href="https://twitter.com/nobert___">
                    <div className="fa fa-twitter"/>
                </a>
            </div>
            <div className="fa-container">
                <a href="https://www.linkedin.com/in/momohnobert">
                    <div className="fa fa-linkedin"/>
                </a>
            </div>
            <div className="fa-container">
                <a href="https://github.com/MomohNobert">
                    <div className="fa fa-github"/>
                </a>
            </div>          
        </div>
    </div>
    )
}


export default withRouter(Menu);