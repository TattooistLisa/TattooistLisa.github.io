import React from 'react';
import './Css/Clients.css';
import publicHealthImage from '../images/OIP.jpg';
import ImmunizeImage from '../images/iz-logo-shield.png';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';

const clients = [
    {
        href: 'https://www.oregon.gov/oha/pages/index.aspx',
        image: publicHealthImage,
        alt: 'Oregon Health Authority'
    },
    {
        href: 'https://www.immunize.org',
        image: ImmunizeImage,
        alt: 'Immunize.org'
    }
];

const Clients = () => {
    return (
        <Box component="section" sx={{ backgroundColor: '#f8f9fa', py: { xs: 5, xl: 6 } }}>
            <Container sx={{ mb: { xs: 5, md: 6 } }}>
                <Grid container justifyContent="center">
                    <Grid size={{ xs: 12, md: 10, lg: 8, xl: 7 }} sx={{ textAlign: 'center' }}>
                        <Typography variant="h3" component="h2" sx={{ mb: 4 }}>
                            Clients
                        </Typography>
                        <Divider sx={{ width: '50%', mx: 'auto', borderColor: 'text.secondary' }} />
                    </Grid>
                </Grid>
            </Container>
            {clients.map((client, index) => (
                <Container key={index}>
                    <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                        <Grid size={{ xs: 12, md: 3 }} sx={{ mx: 'auto', textAlign: 'center' }}>
                            <a href={client.href} target="_blank" rel="noopener noreferrer">
                                <Box
                                    component="img"
                                    src={client.image}
                                    alt={client.alt}
                                    loading="lazy"
                                    sx={{
                                        maxWidth: '100%',
                                        borderRadius: '50%',
                                        mb: 4
                                    }}
                                />
                            </a>
                        </Grid>
                    </Grid>
                </Container>
            ))}
        </Box>
    );
};

export default Clients;
