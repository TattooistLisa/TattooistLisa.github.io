import React from 'react';
import './Css/Header.css';
import lisaImage from '../lisaImages/lisa.jpg';
import { Box, Container, Typography } from '@mui/material';

const Header = () => {
    return (
        <Box
            component="header"
            className="header"
            sx={{
                backgroundImage: `url(${lisaImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textAlign: 'center',
                py: 5
            }}
        >
            <Container>
                <Box className="header-content">
                    <Typography variant="h2" component="h1">LAKEWOOD, WA</Typography>
                    <Typography variant="h4" component="h2">How to Book</Typography>
                    <Typography>Aftercare</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
