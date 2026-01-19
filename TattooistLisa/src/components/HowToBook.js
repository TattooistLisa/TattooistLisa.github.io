import React, { useEffect } from "react";
import { Box, Container, Typography } from '@mui/material';
import BWsingle2 from '../lisaImages/BWsingle2.jpg';

const accentColor = '#8A2A35';
const fontFamily = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

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
                            fontSize: { xs: '1.5rem', sm: '2.5rem', md: '4rem', lg: '5rem' },
                            fontFamily: '"Annie Use Your Telescope", cursive',
                        }}
                    >
                        HOW TO BOOK
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="sm" sx={{ py: 5, fontFamily: fontFamily, fontWeight: 400, '& .MuiTypography-root': { fontFamily: 'inherit' } }}>
                <Typography align="center" sx={{ mb: 3, fontWeight: 600, color: accentColor }}>
                    All booking is done through my Instagram!
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • To book <Highlight>DM me</Highlight> with your design, full name, email, phone number and time slot (availability is in my story highlights)
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • For customs send any inspo pics/reference, let me know the size, shading or just outline, placement, and design description
                </Typography>

                <Typography align="center" sx={{ mb: 2 }}>
                    • <Highlight>Deposit is required</Highlight> to book and will be subtracted from your total at your appointment
                </Typography>
                <Typography align="center" sx={{ mb: 1 }}>
                    ○ <Highlight>Deposits are non refundable</Highlight>
                </Typography>
                <Typography align="center" sx={{ mb: 3 }}>
                    ○ <Highlight>Cancellation or no show will forfeit the deposit</Highlight>
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • Rescheduling must be done <Highlight>at least 2 days prior</Highlight> to the appointment date to avoid forfeiting deposit
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • <Highlight>One reschedule is allowed</Highlight> within 2 days of appointment any more will require <Highlight>a second deposit</Highlight>
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • <Highlight>Please reschedule</Highlight> if you are sick or your skin in placement area is damaged
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • Please be on time, all clients are given a <Highlight>10 minute grace period</Highlight>. <Highlight>Deposit will be forfeited</Highlight> if there isn't enough time before the next appointment
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • <Highlight>First touch up is free</Highlight> for up to <Highlight>3 months</Highlight> of appointment for flash tattoos or <Highlight>1 year</Highlight> for bigger pieces. Exceeding 3 months/1 year will require payment
                </Typography>
            </Container>
        </>
    );
};

export default HowToBook;
