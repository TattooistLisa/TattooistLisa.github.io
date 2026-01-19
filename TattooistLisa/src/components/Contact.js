import React from 'react';
import './Css/Contact.css';
import { Box, Container, Typography, Link, Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <Box component="section" id="contact" className="contact" sx={{ py: 5 }}>
            <Container>
                <Typography fontSize={24}
                    sx={{
                        fontWeight: 400,
                        letterSpacing: 0,
                        fontFamily: 'Alumni Sans',
                        color: '#31312C'
                    }}
                >
                    CONTACT
                </Typography>

                <Stack spacing={2}>
                    <Link
                        href="https://www.instagram.com/tattooist__lisaa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="none"
                        fontSize={18}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            color: '#8A2A35' ,
                            fontFamily: 'Alumni Sans',
                        }}
                    >
                        <InstagramIcon />
                        <Typography fontSize={18} sx={{color:'black','&:hover': { color: '#8A2A35' }}}>tattooist__lisaa</Typography>
                    </Link>

                    <Link
                        href="mailto:tattooistlisaa@gmail.com"
                        underline="none"
                        fontSize={18}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            color: '#8A2A35',
                            fontFamily: 'Alumni Sans',
                        }}
                    >
                        <EmailIcon  />
                        <Typography fontSize={18} sx={{color:'black','&:hover': { color: '#8A2A35' }}}>tattooistlisaa@gmail.com</Typography>
                    </Link>
                </Stack>
            </Container>
        </Box>
    );
};

export default Contact;
