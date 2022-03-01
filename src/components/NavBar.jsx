import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";
import '../assets/css/NavBar.css';
import { UserContext } from '../context/UserContext';

const pages = ['Home', 'About', 'Contact'];

const NavBar = () => {
    const { user, setUser } = useContext(UserContext);
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" className="clr_green">
            <Container maxWidth="xxl">
                <Toolbar disableGutters>
                    <Typography
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        fontWeight="900"
                        className="logo"
                        align="left"
                    >
                        Butler & Chef
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {/* Menu Items */}
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <NavLink
                                        to={"/" + page}
                                        activeClassName="active" className="nav-link not_active"
                                    >{page}</NavLink>
                                </MenuItem>
                            ))}

                            {
                                user.id === 0 ?
                                    <MenuItem key="Login" onClick={handleCloseNavMenu}>
                                        <NavLink name="login" to="/login" activeClassName="active" className="nav-link not_active">Login</NavLink>
                                    </MenuItem>
                                    :
                                    <MenuItem key="Dashboard" onClick={handleCloseNavMenu}>
                                        <NavLink to="/dashboard" activeClassName="active" className="nav-link not_active">Dashboard</NavLink>
                                    </MenuItem>
                            }

                        </Menu>
                    </Box>


                    <Typography
                        fontWeight="900"
                        align="left"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        className="logo"
                    >
                        Butler & Chef
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly' }}>
                        {pages.map((page) => (
                            <NavLink
                                key={page}
                                to={"/" + page}
                                activeClassName="active" className="nav-link not_active"
                            >{page}</NavLink>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {
                            user.id === 0 ?
                                <NavLink name="login"
                                    to="/login"
                                    activeClassName="active" className="nav-link not_active"
                                >Login</NavLink>
                                :
                                <NavLink
                                    to="/dashboard"
                                    activeClassName="active" className="nav-link not_active"
                                >Dashboard</NavLink>
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default NavBar;
