import React from 'react';
import './Css/Contact.css';
import { Box, Container, Typography, Link, Stack } from '@mui/material';
import { ReactComponent as InstagramIcon } from '../lisaImages/Instagram.svg';
import { ReactComponent as MailIcon } from '../lisaImages/Mail.svg';

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
                            color: '#BB6868' ,
                            fontFamily: 'Alumni Sans',
                        }}
                    >
                        <InstagramIcon style={{ width: 24, height: 24, display: 'block' }} />
                        <Typography fontSize={18} sx={{ color: 'black', lineHeight: 1, '&:hover': { color: '#BB6868' } }}>tattooist__lisaa</Typography>
                    </Link>

                    <Link
                        href="mailto:tattooistlisaa@gmail.com"
                        underline="none"
                        fontSize={18}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            color: '#BB6868',
                            fontFamily: 'Alumni Sans',
                        }}
                    >
                        <MailIcon style={{ width: 24, height: 24, display: 'block' }} />
                        <Typography fontSize={18} sx={{ color: 'black', lineHeight: 1, '&:hover': { color: '#BB6868' } }}>tattooistlisaa@gmail.com</Typography>
                    </Link>
                </Stack>
            </Container>
        </Box>
    );
};

export default Contact;
