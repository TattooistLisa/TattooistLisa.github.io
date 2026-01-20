import React, { useEffect, useState, useRef } from "react";
import { Box, Container, Typography, CircularProgress } from '@mui/material';
import BWsingle from '../lisaImages/BWsingle.jpg';
import TattooHealVideo from '../lisaImages/TattoHealVideo.mp4';

const accentColor = '#BB6868';
const fontFamily = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const Highlight = ({ children }) => (
    <Box component="span" sx={{ color: accentColor, fontWeight: 500 }}>
        {children}
    </Box>
);

const Aftercare = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [videoReady, setVideoReady] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Handle video loading for iOS Safari compatibility - runs immediately for parallel loading
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleReady = () => setVideoReady(true);

        // Check if already loaded (cached)
        if (video.readyState >= 2) {
            setVideoReady(true);
            return;
        }

        // Multiple event listeners for cross-browser compatibility
        video.addEventListener('loadeddata', handleReady);
        video.addEventListener('loadedmetadata', handleReady);
        video.addEventListener('canplay', handleReady);

        // Force load on iOS Safari (must be called after element is in DOM)
        video.load();

        return () => {
            video.removeEventListener('loadeddata', handleReady);
            video.removeEventListener('loadedmetadata', handleReady);
            video.removeEventListener('canplay', handleReady);
        };
    }, []);

    return (
        <>
            {/* Loading overlay */}
            {!imageLoaded && (
                <Box sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    zIndex: 9999
                }}>
                    <CircularProgress sx={{ color: '#BB6868' }} />
                </Box>
            )}

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
                    onLoad={() => setImageLoaded(true)}
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
                            fontSize: 40,
                            fontFamily: '"Annie Use Your Telescope", cursive',
                        }}
                    >
                        AFTERCARE
                    </Typography>
                </Box>
            </Box>

            {/* Tattoo Heal Video */}
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 2, px: 0 }}>
                <Box
                    sx={{
                        maxWidth: 300,
                        width: '100%',
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                        position: 'relative',
                        minHeight: videoReady ? 'auto' : 400,
                        backgroundColor: videoReady ? 'transparent' : '#f5f5f5',
                    }}
                >
                    {!videoReady && (
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}>
                            <CircularProgress sx={{ color: '#BB6868' }} />
                        </Box>
                    )}
                    <video
                        ref={videoRef}
                        src={`${TattooHealVideo}#t=0.001`}
                        controls
                        loop
                        playsInline
                        preload="metadata"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: videoReady ? 'block' : 'none',
                        }}
                    />
                </Box>
            </Box>

            <Container maxWidth="sm" sx={{ py: 0, fontFamily: fontFamily, fontWeight: 400, '& .MuiTypography-root': { fontFamily: 'inherit' } }}>
                <Typography variant="h5" align="center" sx={{ mb: 3, color: '#8A2A35', fontWeight: 500 }}>
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

                <Typography align="center" >
                    • Once it's healed, <Highlight>keep moisturizing daily and use sunscreen</Highlight> to keep the vibrancy!
                </Typography>
            </Container>
        </>
    );
};

export default Aftercare;
