import React from 'react';
import './Css/Contact.css';
import linkedinLogo from '../images/linkedin.svg';
import { Box, Container, Grid, Typography } from '@mui/material';

const Contact = () => {
    return (
        <Box component="section" id="contact" className="contact" sx={{ py: 5 }}>
            <Container>
                <Typography variant="h5" component="h3" gutterBottom>
                    Links
                </Typography>
                <Grid container>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <a
                            href="https://www.linkedin.com/in/payton-rigert/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Box
                                component="img"
                                src={linkedinLogo}
                                alt="LinkedIn logo"
                                className="linkedin-logo"
                                sx={{ width: 100 }}
                            />
                        </a>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
