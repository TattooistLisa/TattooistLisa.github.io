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
                        mb:  1,
                        fontSize: 40,
                        fontFamily: '"Annie Use Your Telescope", cursive',
                    }}
                >
                    LAKEWOOD, WA
                </Typography>
                <Stack
                    direction="column"
                    spacing={{ xs: 1, sm: 2 }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button
                        component={Link}
                        to="/HowToBook"
                        variant="contained"
                        sx={{
                            backgroundColor: 'white',
                            color: '#BB6868',
                            fontSize: 18,
                            width: 120,
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
                            color: '#BB6868',
                            fontSize: 18,
                            width: 120,
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
