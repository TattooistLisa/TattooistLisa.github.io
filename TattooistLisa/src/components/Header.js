import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Header.css';
import lisaImage from '../lisaImages/lisa.jpg';
import { Box, Typography, Button, Stack } from '@mui/material';

const Header = () => {
    return (
        <Box
            component="header"
            sx={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden'
            }}
        >
            {/* Image - always shows full, scales with screen */}
            <Box
                component="img"
                src={lisaImage}
                alt="Lisa Tattoo Artist"
                sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                }}
            />

            {/* Content overlay - positioned on top of image */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center',
                    width: '90%'
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        mb: { xs: 1, sm: 2, md: 4 },
                        fontSize: { xs: '1.5rem', sm: '2.5rem', md: '4rem', lg: '5rem' },
                        fontFamily: '"Annie Use Your Telescope", cursive',
                    }}
                >
                    LAKEWOOD, WA
                </Typography>
                <Stack
                    direction="row"
                    spacing={{ xs: 1, sm: 2 }}
                    justifyContent="center"
                >
                    <Button
                        component={Link}
                        to="/HowToBook"
                        variant="contained"
                        sx={{
                            backgroundColor: 'white',
                            color: '#8A2A35',
                            fontSize: { xs: '0.65rem', sm: '0.85rem', md: '1rem' },
                            px: { xs: 1.5, sm: 2, md: 3 },
                            py: { xs: 0.5, sm: 1 },
                            minWidth: 'auto',
                            textDecoration: 'none',
                            borderRadius: '50px',
                            '&:hover': { backgroundColor: '#f0f0f0' },
                            fontFamily: 'Alumni Sans',
                        }}
                    >
                        How to Book
                    </Button>
                    <Button
                        component={Link}
                        to="/Aftercare"
                        variant="contained"
                        sx={{
                            backgroundColor: 'white',
                            color: '#8A2A35',
                            fontSize: { xs: '0.65rem', sm: '0.85rem', md: '1rem' },
                            px: { xs: 1.5, sm: 2, md: 3 },
                            py: { xs: 0.5, sm: 1 },
                            minWidth: 'auto',
                            textDecoration: 'none',
                            borderRadius: '50px',
                            '&:hover': { backgroundColor: '#f0f0f0' },
                            fontFamily: 'Alumni Sans',
                        }}
                    >
                        Aftercare
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default Header;
