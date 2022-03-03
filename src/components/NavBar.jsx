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

    // Get User from user context to change navbar accordingly
    const { user } = useContext(UserContext);

    // Open and Close Menu Functions
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
                    {/* ----------Collapsed NavBar Section-------- */}

                    {/* Logo */}
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

                    {/* Collapsed NavBar */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        {/* Burger Icon */}
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
                        {/* NavBar Menu */}
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
                            {/* Start of NavBar Items */}
                            {pages.map((page) => (
                                // Mapping inside Pages Array
                                < MenuItem key = { page } onClick = { handleCloseNavMenu } >
                                <NavLink
                                    to={"/" + page}
                                    activeClassName="active" className="nav-link not_active"
                                >{page}</NavLink>
                                </MenuItem>
                            ))}

                        {/* If Authenticated, change Navbar Login to Dashboard */}
                        {
                            user.isAuth ?
                                <MenuItem key="Dashboard" onClick={handleCloseNavMenu}>
                                    <NavLink to="/dashboard" activeClassName="active" className="nav-link not_active">Dashboard</NavLink>
                                </MenuItem>
                                :
                                <MenuItem key="Login" onClick={handleCloseNavMenu}>
                                    <NavLink name="login" to="/login" activeClassName="active" className="nav-link not_active">Login</NavLink>
                                </MenuItem>
                        }
                        {/* End of Menu Items */}

                    </Menu>
                </Box>
                {/* ------------------------------------------ */}

                {/* ----------Expanded NavBar Section-------- */}

                {/* Logo */}
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

                {/* NavBar Items */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly' }}>
                    {/* Mapping inside Pages Array */}
                    {pages.map((page) => (
                        <NavLink
                            key={page}
                            to={"/" + page}
                            activeClassName="active" className="nav-link not_active"
                        >{page}</NavLink>
                    ))}
                </Box>

                {/* If Authenticated, change Navbar Login to Dashboard */}
                <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                    {
                        user.isAuth ?
                            <NavLink
                                to="/dashboard"
                                activeClassName="active" className="nav-link not_active"
                            >Dashboard</NavLink>
                            :
                            <NavLink name="login"
                                to="/login"
                                activeClassName="active" className="nav-link not_active"
                            >Login</NavLink>
                    }
                </Box>
            </Toolbar>
        </Container>
        </AppBar >
    );
};
export default NavBar;
