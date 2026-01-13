import React from "react";
import './Css/Team.css';
import { Container, Row, Col } from 'react-bootstrap';
import waterImage from '../images/water.jpg';
import PaytonImage from '../images/payton.jpg'; 
import { useEffect } from 'react';


const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <header
                className="header text-white text-center py-5"
                style={{ backgroundImage: `url(${waterImage})` }}
            >
                <div className="container">
                    <div className="header-content">
                        <h1>Our Team</h1>


                    </div>
                </div>
            </header>
            <section className="team" id="team">
           
           

            <Container>
                    <Row>
                    <p></p>
                <h2>Payton Rigert</h2>
                    <Col md={6} className="bullet-points">
                    
                                <p>
                                Payton Rigert has an impressive background in public health and communications, and she has been instrumental in supporting the COVID-19 response efforts of both the CDC Foundation and the Oregon Health Authority. She joined the CDC Foundation in August of 2020, where she made  significant contributions to the ongoing efforts to combat COVID-19 and improve public health outcomes. As the Regional Coordinator of Rome, GA, she served as a liaison between the state and the Northwest Public Health District for COVID-19 surge response.
                            </p>
                            <p>
                                Payton has also contracted with the Oregon Health Authority to support the Vaccine Operations Team-Equity as a Vaccine Resource Coordinator. In this role, she coordinated vaccine resources for over 100 community partners to promote health equity in the state of Oregon. Payton effectively planned and managed resources for over 1600 vaccine events, fostered connections across OHA to support initiatives promoting equitable access to COVID-19 community resources and vaccines, and utilized Smartsheets as an event tracking solution while maintaining relationships with community-based organizations.
                            </p>
                            <p>
                                In addition to her work in Georgia and Oregon, Payton has extensive experience in online management and communications. During the pandemic, she worked for a telemedicine clinic, where she honed her skills in managing online communications. She has also worked as a qualitative researcher for Emory University. Payton's experiences include time in Tunisia, where she helped to manage an education program and teach English to youth in the area. She has also worked for Montana State University in their land-grant cooperative extension services.
                            </p>
                            <p>
                                Payton holds a Master's in Public Health from the Rollins School of Public Health in Behavior Sciences and Health Education and a Bachelor of Science in Biology with a minor in Communication Arts from the University of the Cumberlands. 
                            </p>
                      
                    
                    </Col>
                    <Col md={6} className="image-col">
                        <img
                                src={PaytonImage }
                            alt="Payton Rigert"
                            className="img-fluid"
                            />
                            
                    </Col>
                    </Row>
                    <Row>
                        
                        
                            <h2>Payton's Experience</h2>
                            <div id="CommunityAssessment">
                            <br></br>
                        <h3>Community Assessment</h3>
                        
                        <p>
                            Payton played a critical role in conducting a remote community assessment for the Chicago Public Schools (CPS) Office of Student Health and Wellness, where she served as the lead qualitative data collection specialist and analyst. The project's goal was to achieve health equity in Chicago by ensuring that LGBTQ+ youth in CPS have safe and supportive environments in their schools.
                        </p>
                        <p>
                            One of Payton's significant contributions was teaching the other four team members how to analyze qualitative data using MAXQDA, a software program that enables researchers to analyze large volumes of qualitative data efficiently. With her guidance, the team was able to effectively analyze the data and draw meaningful conclusions.
                        </p>
                        <p>
                            Working under time constraints was a significant challenge for the team, but they were able to overcome this obstacle by utilizing a Gantt chart, weekly check-in meetings, and strict internal deadlines. 
                        </p>

                        <p>
                            Conducting a community assessment solely through virtual platforms presented additional challenges, but Payton and her team recognized that flexibility, adaptability, and continuous communication were key to completing a remote project successfully. By collaborating effectively and leveraging technology, they were able to gather and analyze data, identify key insights, and develop actionable recommendations to support the health and well-being of LGBTQ+ youth in CPS.
                        </p>
                        </div>

                        <div id="ProgramEvaluation">
                            <br></br>
                            <h3>Program Evaluation</h3>

                            <p>
                                Payton participated in a formative and process evaluation conducted by graduate students from the Rollins School of Public Health for the Center of Disease Control's Division of Scientific Education and Professional Development, Office of Policy, Partnerships, and Recruitment (DSEPD). The evaluation aimed to assess the strengths and challenges of current DSEPD partnerships, communication strategies used by DSEPD staff to establish effective relationships with partners, expectations and perceptions of partnerships, and partner perspectives on how these partnerships function. The evaluation was conducted through virtual key informant interviews with DSEPD staff members and resulted in four main recommendations for improving partnership outcomes, including standardizing communication methods with external partners, identifying common goals and priorities between partners, understanding external partners' expectations and perspectives, and conducting annual assessments of partnership relationships. Payton's experience in the evaluation contributed to improving DSEPD's partnerships and support for improving the public health workforce.
                            </p>
                            
                        </div>

                        <div id="QualitativeDataAnalysis">
                            <br></br>
                            <h3>Qualitative Data Analysis</h3>

                            <p>
                                Payton worked as a graduate research assistant on a systematic review focused on contraceptive methods among young women in the U.S. Throughout this project, they reviewed over 600 research articles using Endnote, demonstrating a high level of attention to detail and organization skills. As part of the review process, Payton was trained in remote qualitative interviewing and qualitative analysis, developing skills that are particularly valuable in today's virtual research environment. Through their work on this project, they gained experience in record management within a research team and learned how to effectively collaborate with team members in a remote setting. Payton's contributions to this systematic review showcase their ability to conduct rigorous research, work collaboratively with a team, and adapt to changing research environments.
                            </p>

                        </div>

                        <div id ="ManagementConsulting">
                            <br></br>
                            <h3>Management Consulting</h3>
                          
                            <p>
                                Payton has gained extensive experience in management consulting, specifically in management and risk communication, over the past three years. They started by restructuring the management system in two health districts spanning 13 counties in Georgia, creating a multi-tiered management structure that allowed for more effective communication and delegation. Payton has also worked at the district, regional, and state level to coordinate the COVID-19 management response and assist others in achieving success in their roles. Throughout their work, they have recognized the importance of team dynamics in program implementation and have effectively worked on interprofessional teams in various roles. Payton is a dependable and flexible problem-solver, with a wealth of experience in program management, delegation, and working under pressure. Their expertise in management consulting has helped organizations improve their operations and better serve their stakeholders.
                               </p>
                        </div>

                        <div id="HealthcareClinicVirtualization">
                            <br></br>
                            <h3>Healthcare Clinic Virtualization</h3>
                           
                            <p>
                                Payton played an instrumental role in the virtualization of a healthcare clinic, utilizing their expertise in healthcare technology and project management. They worked closely with the clinic's staff to identify areas where virtualization could be implemented to improve patient care and streamline processes. Payton's contributions included developing a comprehensive plan for implementing telehealth services, training staff on virtual consultation platforms, and integrating electronic health records with the telehealth system. They also worked to ensure that patient information was protected and that the telehealth services were compliant with all relevant regulations. Payton's efforts resulted in the successful implementation of virtual healthcare services, providing patients with convenient access to care and improving the efficiency and effectiveness of the clinic's operations.
                                </p>
                        </div>

                        

                    </Row>

            </Container>
              
        </section>
        </>
    );
};

export default Team;