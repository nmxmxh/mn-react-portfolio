import React from 'react';

import './menu.styles.scss';

import blogIcon  from '../../assets/menu-logos/writeicon.png';
import projectsIcon from '../../assets/menu-logos/projectsicon.png';
import contactIcon  from '../../assets/menu-logos/contactme.png';
import homeIcon  from '../../assets/menu-logos/homeicon.png';


const Menu = () => (
    <div className="menu-bar">
        <div className="navigation-home">
            <div className="navigation-bar-icon">
                <img src={homeIcon} alt="home"/>
                <h1>HOME</h1>
            </div>
        </div>
        <div className="navigation-bar">
            <div className="navigation-bar-icon">
                <img src={projectsIcon} alt="projects" />
                <h1>PROJECTS</h1>
            </div>
            <div className="navigation-bar-icon">
                <img src={blogIcon} alt="blog" />
                <h1>BLOG</h1>
            </div>
            <div className="navigation-bar-icon">
                <img src={contactIcon} alt="contact"/>
                <h1>CONTACT</h1>
            </div>
        </div>
        <div className="social-links">
            <div className="fa-container">
                <link className="fa fa-twitter"/>
            </div>
            <div className="fa-container">
                <link className="fa fa-linkedin"/>
            </div>
            <div className="fa-container">
                <link className="fa fa-github"/>
            </div>          
        </div>
    </div>
)

export default Menu;