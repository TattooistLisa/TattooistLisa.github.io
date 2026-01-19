import React from 'react';
import './Css/Services.css';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';

const services = [
    {
        number: 1,
        title: 'Qualitative Data Analysis',
        description: 'Qualitative data analysis is a crucial tool in the public health field, as it allows us to gain deep insights into the perspectives, experiences, and opinions of individuals and communities.'
    },
    {
        number: 2,
        title: 'Project Management',
        description: 'Management consulting is a professional service provided to organizations seeking to improve their overall performance or solve specific problems. We cover a wide range of services, including strategic planning, organizational design, process improvement, and performance management.'
    },
    {
        number: 3,
        title: 'Program Evaluation',
        description: 'Public health consultants can evaluate the effectiveness of existing public health programs and recommend improvements to ensure that they are meeting their goals.'
    }
];

const NumberIcon = ({ number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16" style={{ color: '#1976d2', marginBottom: '16px' }}>
        {number === 1 && (
            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
        )}
        {number === 2 && (
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
        )}
        {number === 3 && (
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
        )}
    </svg>
);

const Services = () => {
    return (
        <Box component="section" sx={{ backgroundColor: '#f8f9fa', py: { xs: 5, xl: 6 } }}>
            <Container sx={{ mb: { xs: 5, md: 6 } }}>
                <Grid container justifyContent="center">
                    <Grid size={{ xs: 12, md: 10, lg: 8, xl: 7 }} sx={{ textAlign: 'center' }}>
                        <Typography variant="h3" component="h2" sx={{ mb: 4 }}>
                            Services
                        </Typography>
                        <Divider sx={{ width: '50%', mx: 'auto', borderColor: 'text.secondary' }} />
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid container spacing={{ xs: 5, md: 6 }}>
                    {services.map((service) => (
                        <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={service.number}>
                            <Box sx={{ textAlign: 'center' }}>
                                <NumberIcon number={service.number} />
                                <Typography variant="h6" component="h5" sx={{ m: 2 }}>
                                    {service.title}
                                </Typography>
                                <Typography color="text.secondary" sx={{ m: 0 }}>
                                    {service.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
