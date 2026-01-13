import React from 'react';
import './Css/Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills py-5">
            <div className="container">
                <h3>Key Skills</h3>
                <div className="row">
                    {/* Add more skill items as needed */}
                    <div className="col-md-6 col-lg-4">
                        <div className="skill-item">
                            <p>Smartsheets Proficient</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="skill-item">
                            <p>Experience utilizing the Microsoft Office Suite</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="skill-item">
                            <p>Qualitative Interviewing and Qualitative data analysis</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
