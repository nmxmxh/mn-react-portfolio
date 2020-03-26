import React from 'react';

import './skills.styles.scss';

import adobeAiLogo  from '../../../assets/skill-logos/ai-logo.png';
import adobePsLogo  from '../../../assets/skill-logos/ps-logo.png';
import firebaseLogo  from '../../../assets/skill-logos/firebase-logo.png';
import gatsbyLogo  from '../../../assets/skill-logos/gatsby-logo.png';
import jsLogo  from '../../../assets/skill-logos/js-logo.png';
import juliaLogo  from '../../../assets/skill-logos/julia.png';
import mongoDbLogo  from '../../../assets/skill-logos/mongodb-logo.png';
import nodeJsLogo  from '../../../assets/skill-logos/nodejs-logo.png';
import pythonLogo  from '../../../assets/skill-logos/python-logo.png';
import reactJsLogo  from '../../../assets/skill-logos/react-js-logo.png';
import reduxLogo  from '../../../assets/skill-logos/redux-logo.png';

const Skills = () => (
    <div className="skill-container">
        <div className="skill-stack">
            <div className="skill-stack-container">
                <h2>STACK</h2>
                <div className="img-container">
                    <div className="img-h3-container">
                        <img className="skill-stack-container-img1" src={nodeJsLogo} alt="NodeJS Logo"/>
                        <h3>NodeJS</h3>                  
                    </div>
                    <div className="img-h3-container">
                        <img className="skill-stack-container-img2" src={reactJsLogo} alt="ReactJS Logo"/>
                        <h3>ReactJS</h3>
                    </div>
                    <div className="img-h3-container">
                        <img className="skill-stack-container-img3" src={mongoDbLogo} alt="MongoDB Logo"/>
                        <h3>MongoDB</h3>
                    </div>
                </div>
            </div>
            <div className="skill-prog-lang-container">
                <h2>LANGUAGES</h2>
                <div className="img-container">
                    <div className="img-h3-container">
                        <img src={jsLogo} className="skill-prog-lang-container-img1" alt="Javascript Logo"/>
                        <h3>Javascript</h3>
                    </div>
                    <div className="img-h3-container">
                        <img src={pythonLogo} className="skill-prog-lang-container-img2" alt="Python Logo"/>
                        <h3>Python</h3>
                    </div>
                    <div className="img-h3-container">
                        <img src={juliaLogo} className="skill-prog-lang-container-img3"  alt="Julia Logo"/>
                        <h3>Julia</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="skill-sub-container">
            <h2>SECONDARY</h2>
            <div className="img-container">
                <div>
                    <img src={adobeAiLogo} className="skill-sub-container-img1" alt="Adobe Illustrator Logo"/>
                    <h3>Illustrator</h3>
                </div>
                <div>
                    <img src={adobePsLogo} className="skill-sub-container-img2" alt="Adobe Photoshop Logo"/>
                    <h3>Photoshop</h3>
                </div>
                <div>
                    <img src={firebaseLogo} className="skill-sub-container-img3" alt="Firebase Logo"/>
                    <h3>Firebase</h3>
                </div>
                <div>
                    <img src={reduxLogo} className="skill-sub-container-img4" alt="Redux Logo"/>
                    <h3>Redux</h3>
                </div>
                <div>
                    <img src={gatsbyLogo} className="skill-sub-container-img5" alt="Gatsby Logo"/>
                    <h3>Gatsby</h3>
                </div>
                
               
                


            </div>
        </div>
    </div>
);

export default Skills;