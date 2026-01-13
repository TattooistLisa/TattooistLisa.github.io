import React, { useState } from 'react';
import './Css/About.css';
import { Container, Row, Col } from 'react-bootstrap';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import publicHealthImage from '../images/publicHealth.jpeg';

const About = () => {
    const [selectedBullet, setSelectedBullet] = useState(1);

    const handleClick = (bulletNumber) => {
        setSelectedBullet(selectedBullet === bulletNumber ? 0 : bulletNumber);
    };

    return (
        <section className="about" id="about">
            <Container>
                <h3>Welcome to Nova Public Health Consulting!</h3>

                <p>
                    Started in 2021, Nova PHC LLC was founded by Payton Rigert. Our mission is to provide top-quality public health consulting services to help organizations and government entities to achieve their health-related goals and objectives. 
                </p>
                <p>
                    With extensive experience working with a wide range of clients, from local health departments to large government agencies, we are committed to improving the health and well-being of communities.
                </p>
                <p>
                    At our core, we believe that every individual has the right to access high-quality healthcare and live in a healthy and safe environment. Our services are tailored to meet the unique needs of each of our clients, and we work collaboratively with them to develop innovative and effective solutions to the complex health challenges facing their communities. 
                </p>
                <p>
                    Whether you are seeking guidance on developing a public health program, conducting a health needs assessment, or evaluating the impact of a health intervention, we are here to help. Our commitment to excellence, integrity, and professionalism ensures that our clients receive the highest level of service and expertise. 
                </p>
                <p>
                    Thank you for visiting our website, and we look forward to the opportunity to work with you to improve the health of communities. 
                </p>
            </Container>
        </section>
    );
};

export default About;
