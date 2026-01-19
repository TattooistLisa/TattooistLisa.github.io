import React, { useEffect } from "react";
import { Box, Container, Typography } from '@mui/material';
import BWsingle from '../lisaImages/BWsingle.jpg';

const accentColor = '#8A2A35';

const Highlight = ({ children }) => (
    <Box component="span" sx={{ color: accentColor, fontWeight: 500 }}>
        {children}
    </Box>
);

const Aftercare = () => {
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
                    src={BWsingle}
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
                            textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)'
                        }}
                    >
                        AFTERCARE
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="sm" sx={{ py: 5 }}>
                <Typography variant="h5" align="center" sx={{ mb: 3, color: accentColor, fontWeight: 500 }}>
                    How to Heal your Tattoo
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • Leave your bandage on for <Highlight>one day or 4-10 hours</Highlight>. When you're ready to take it off, make sure your hands are clean. Do it under <Highlight>warm running water, gently pulling the bandage down, not up.</Highlight>
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • Use a <Highlight>gentle, fragrance-free soap</Highlight> to clean off any ink, plasma, or debris. Be gentle and don't scrub! After pat it dry with a clean paper towel, or just let it air dry.
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • After it's dry use a thin layer of <Highlight>shea butter</Highlight> to moisturize (Palmer's fragrance free cocoa butter works great). If you don't have any of this you can use <Highlight>fragrance free lotion</Highlight> like Cetaphil. Just a thin layer of moisturizer is enough, don't overdo it.
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • Avoid ointments like Aquaphor as they have petroleum which can clog pores and suffocate the tattoo.
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • <Highlight>Keep moisturizing and cleaning</Highlight> your tattoo <Highlight>daily.</Highlight>
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • After <Highlight>3-4 days</Highlight> the tattoo may scab and peel that's completely normal at this point you can switch from the shea butter to a lighter fragrance free lotion like cetaphil and apply whenever it's dry.
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • Do not pick at the scabs or itch.
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • Keep up the daily cleaning and moisturizing until it's fully healed, which usually around <Highlight>2 weeks.</Highlight>
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • While your tattoo is healing <Highlight>avoid</Highlight> swimming, bathing, excessive sweating, tight clothing and direct sunlight.
                </Typography>

                <Typography align="center" sx={{ mb: 3 }}>
                    • Once it's healed, <Highlight>keep moisturizing daily and use sunscreen</Highlight> to keep the vibrancy!
                </Typography>
            </Container>
        </>
    );
};

export default Aftercare;
