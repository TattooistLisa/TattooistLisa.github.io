import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/TattoistLisaLogo.png';
import {
    AppBar,
    Toolbar,
    Container,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Button,
    useMediaQuery,
    useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { label: 'Home', to: '/', isLink: true },
        { label: 'Team', to: '/team', isLink: true },
        { label: 'Contact', to: '#contact', isLink: false },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            component={item.isLink ? Link : 'a'}
                            to={item.isLink ? item.to : undefined}
                            href={!item.isLink ? item.to : undefined}
                            sx={{ textAlign: 'center' }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="sticky" sx={{ backgroundColor: '#1a2a4f', boxShadow: 'none', zIndex: 1000 }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        {isMobile && (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}

                        <Link to="/">
                            <Box
                                component="img"
                                src={Logo}
                                alt="Tattoist Lisa Logo"
                                sx={{ height: 50 }}
                            />
                        </Link>

                        {!isMobile && (
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                {navItems.map((item) => (
                                    <Button
                                        key={item.label}
                                        component={item.isLink ? Link : 'a'}
                                        to={item.isLink ? item.to : undefined}
                                        href={!item.isLink ? item.to : undefined}
                                        sx={{ color: 'white' }}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
