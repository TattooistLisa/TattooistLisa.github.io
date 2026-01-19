import React, { useState } from "react";
import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/3a684de0-db0f-11ed-a90b-63724fe92d96";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    return (
        <Box component="section" id="contact" className="contact" sx={{ py: 5 }}>
            <Container>
                <Grid container justifyContent="center">
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Box
                            component="form"
                            action={FORM_ENDPOINT}
                            onSubmit={handleSubmit}
                            method="POST"
                            target="_blank"
                            sx={{ textAlign: 'center' }}
                        >
                            <Typography variant="h5" component="h3" gutterBottom>
                                Contact
                            </Typography>
                            <Box sx={{ mb: 3 }}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    placeholder="Your name"
                                    name="name"
                                    required
                                    variant="outlined"
                                    size="small"
                                />
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <TextField
                                    fullWidth
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    required
                                    variant="outlined"
                                    size="small"
                                />
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <TextField
                                    fullWidth
                                    placeholder="Your message"
                                    name="message"
                                    required
                                    multiline
                                    rows={5}
                                    variant="outlined"
                                    size="small"
                                />
                            </Box>
                            <Box sx={{ mb: 3 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                                >
                                    Send a message
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactForm;
