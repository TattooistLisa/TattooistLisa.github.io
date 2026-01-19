import React, { useEffect } from "react";
import { Box, Container, Typography, List, ListItem } from '@mui/material';
import BWsingle2 from '../lisaImages/BWsingle2.jpg';

const accentColor = '#8b7355';

const Highlight = ({ children }) => (
    <Box component="span" sx={{ color: accentColor, fontWeight: 500 }}>
        {children}
    </Box>
);

const HowToBook = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Box
                component="header"
                sx={{
                    position: 'relative',
                    width: '100%',
                    overflow: 'hidden'
                }}
            >
                <Box
                    component="img"
                    src={BWsingle2}
                    alt="Lisa Tattoo Artist"
                    sx={{
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                    }}
                />
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
                            fontSize: { xs: '1.2rem', sm: '2rem', md: '3rem', lg: '3.75rem' },
                            textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                        }}
                    >
                        HOW TO BOOK
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="md" sx={{ py: 5 }}>
                <Typography variant="h6" sx={{ mb: 3 }}>
                    All booking is done through my Instagram!
                </Typography>

                <List sx={{ listStyleType: 'disc', pl: 2 }}>
                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            To book <Highlight>DM me</Highlight> with your design, full name, email, phone number and time slot (availability is in my story highlights)
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            For customs send any inspo pics/reference, let me know the size, shading or just outline, placement, and design description
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            <Highlight>Deposit is required</Highlight> to book and will be subtracted from your total at your appointment
                        </Typography>
                        <List sx={{ listStyleType: 'circle', pl: 3, mt: 1 }}>
                            <ListItem sx={{ display: 'list-item', pl: 0, py: 0.5 }}>
                                <Typography>
                                    <Highlight>Deposits are non refundable</Highlight>
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', pl: 0, py: 0.5 }}>
                                <Typography>
                                    <Highlight>Cancellation or no show will forfeit the deposit</Highlight>
                                </Typography>
                            </ListItem>
                        </List>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            Rescheduling must be done <Highlight>at least 2 days prior</Highlight> to the appointment date to avoid forfeiting deposit
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            <Highlight>One reschedule is allowed</Highlight> within 2 days of appointment any more will require <Highlight>a second deposit</Highlight>
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            <Highlight>Please reschedule</Highlight> if you are sick or your skin in placement area is damaged
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            Please be on time, all clients are given a <Highlight>10 minute grace period</Highlight>. <Highlight>Deposit will be forfeited</Highlight> if there isn't enough time before the next appointment
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            <Highlight>First touch up is free</Highlight> for up to <Highlight>3 months</Highlight> of appointment for flash tattoos or <Highlight>1 year</Highlight> for bigger pieces. Exceeding 3 months/1 year will require payment
                        </Typography>
                    </ListItem>
                </List>
            </Container>
        </>
    );
};

export default HowToBook;
