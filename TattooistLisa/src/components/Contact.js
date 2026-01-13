import React from 'react';
import './Css/Contact.css';
import linkedinLogo from '../images/linkedin.svg';

const Contact = () => {
    return (
        <section id="contact" className="contact py-5">
            <div className="container">
                <h3>Links</h3>
                <div className="row">

                    <div className="col-md-6">
     
                        <a
                            href="https://www.linkedin.com/in/payton-rigert/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                width="100"
                                src={linkedinLogo}
                                alt="LinkedIn logo"
                                className="linkedin-logo"
                            />
                         
                        </a>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
