import React from 'react';
import './Css/About.css';
import { Container, Typography } from '@mui/material';

const About = () => {
    return (
        <section className="about" id="about">
            <Container maxWidth="lg">
                <Typography variant="h4" component="h3" gutterBottom>
                    Welcome to Nova Public Health Consulting!
                </Typography>

                <Typography paragraph>
                    Started in 2021, Nova PHC LLC was founded by Payton Rigert. Our mission is to provide top-quality public health consulting services to help organizations and government entities to achieve their health-related goals and objectives.
                </Typography>
                <Typography paragraph>
                    With extensive experience working with a wide range of clients, from local health departments to large government agencies, we are committed to improving the health and well-being of communities.
                </Typography>
                <Typography paragraph>
                    At our core, we believe that every individual has the right to access high-quality healthcare and live in a healthy and safe environment. Our services are tailored to meet the unique needs of each of our clients, and we work collaboratively with them to develop innovative and effective solutions to the complex health challenges facing their communities.
                </Typography>
                <Typography paragraph>
                    Whether you are seeking guidance on developing a public health program, conducting a health needs assessment, or evaluating the impact of a health intervention, we are here to help. Our commitment to excellence, integrity, and professionalism ensures that our clients receive the highest level of service and expertise.
                </Typography>
                <Typography paragraph>
                    Thank you for visiting our website, and we look forward to the opportunity to work with you to improve the health of communities.
                </Typography>
            </Container>
        </section>
    );
};

export default About;
