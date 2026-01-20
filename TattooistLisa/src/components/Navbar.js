import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/TattoistLisaLogo.png';
import {
    AppBar,
    Toolbar,
    Container,
    Box,
} from '@mui/material';

const Navbar = () => {
    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: 'none', zIndex: 1000 }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
                       

                        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <Box
                                component="img"
                                src={Logo}
                                alt="Tattoist Lisa Logo"
                                sx={{ height: 50 }}
                            />
                        </Link>

                       
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Navbar;
