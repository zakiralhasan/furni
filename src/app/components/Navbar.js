"use client"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from 'react';
import Link from 'next/link';
import { Button, List, ListItem, ListItemText, Stack } from '@mui/material';


export default function Navbar() {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            sx={{
                top: { sm: '57px', xs: '50px' },
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <Stack
                spacing={3}
                sx={{
                    width: '120px',
                    marginLeft: '9px',
                    '&>a': {
                        textDecoration: 'none',
                        color: 'inherit'
                    }
                }}
            >
                <Link href='/' >
                    Home
                </Link>
                <Link href='/' >
                    About us
                </Link>
                <Link href='/' >
                    Settings
                </Link>
                <Link href='/' >
                    Blog
                </Link>
                <Link href='/' >
                    Contac us
                </Link>
            </Stack>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                    >
                        Farni.
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { md: 'block', xs: 'none' }, marginRight: { md: '87px' } }} >
                        <Stack
                            spacing={5}
                            direction={'row'}
                            sx={{
                                '&>a': {
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }
                            }}
                        >
                            <Link href='/' >
                                Home
                            </Link>
                            <Link href='/' >
                                About us
                            </Link>
                            <Link href='/' >
                                Settings
                            </Link>
                            <Link href='/' >
                                Blog
                            </Link>
                            <Link href='/' >
                                Contac us
                            </Link>
                        </Stack>
                    </Box>
                    <Box >
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <PersonOutlineOutlinedIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}