import React, { useEffect } from "react";
import { Box, Container, Typography, List, ListItem } from '@mui/material';
import BWsingle from '../lisaImages/BWsingle.jpg';

const accentColor = '#8b7355';

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
                            textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                        }}
                    >
                        AFTERCARE
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="md" sx={{ py: 5 }}>
                <Typography variant="h5" sx={{ mb: 3, color: accentColor, fontWeight: 500 }}>
                    How to Heal your Tattoo
                </Typography>

                <List sx={{ listStyleType: 'disc', pl: 2 }}>
                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            Leave your bandage on for <Highlight>one day or 4-10 hours</Highlight>. When you're ready to take it off, make sure your hands are clean. Do it under <Highlight>warm running water, gently pulling the bandage down, not up.</Highlight>
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            Use a <Highlight>gentle, fragrance-free soap</Highlight> to clean off any ink, plasma, or debris. Be gentle and don't scrub! After pat it dry with a clean paper towel, or just let it air dry.
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            After it's dry use a thin layer of <Highlight>shea butter</Highlight> to moisturize (Palmer's fragrance free cocoa butter works great). If you don't have any of this you can use <Highlight>fragrance free lotion</Highlight> like Cetaphil. Just a thin layer of moisturizer is enough, don't overdo it.
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            Avoid ointments like Aquaphor as they have petroleum which can clog pores and suffocate the tattoo.
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            <Highlight>Keep moisturizing and cleaning</Highlight> your tattoo <Highlight>daily.</Highlight>
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            After <Highlight>3-4 days</Highlight> the tattoo may scab and peel that's completely normal at this point you can switch from the shea butter to a lighter fragrance free lotion like cetaphil and apply whenever it's dry.
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            Do not pick at the scabs or itch.
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            Keep up the daily cleaning and moisturizing until it's fully healed, which usually around <Highlight>2 weeks.</Highlight>
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            While your tattoo is healing <Highlight>avoid</Highlight> swimming, bathing, excessive sweating, tight clothing and direct sunlight.
                        </Typography>
                    </ListItem>

                    <ListItem sx={{ display: 'list-item', pl: 0 }}>
                        <Typography>
                            Once it's healed, <Highlight>keep moisturizing daily and use sunscreen</Highlight> to keep the vibrancy!
                        </Typography>
                    </ListItem>
                </List>
            </Container>
        </>
    );
};

export default Aftercare;
