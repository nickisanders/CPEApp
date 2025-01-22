import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import FolderIcon from '../assets/logos/Folder_Icon.webp';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useTheme } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme from '../theme'; // Import your theme if you have one
import UserImg from '../assets/JoeAccountant.jpg';


const pages = ['Dashboard', 'Tokenize', 'Public View', 'About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (page) => {
    console.log(`Navigating to ${page}`);
    var route = page.toLowerCase().replace(/\s+/g, '-'); // Convert page name to route
    if(route === 'public-view') {
        route += '/account'; // Append '/account' for public view
    }
    navigate(`/${route}`);
    handleCloseNavMenu(); // Close menu after navigation
  };

  return (
    <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>                
                <Button onClick={() => handleNavigate('')}>
                    <img src={FolderIcon} alt="CPE Icon" style={{width: '100px'}}/>
                </Button>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            {/* <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                LOGO
            </Typography> */}

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
                    sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={() => handleNavigate(page)}>
                        <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                <Button onClick={() => handleNavigate('')}>
                    <img src={FolderIcon} alt="CPE Icon" style={{width: '50px'}} />
                </Button>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            {/* <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                LOGO
            </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    onClick={() => handleNavigate(page)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
                ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="User Avatar" src={UserImg} />
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    </ThemeProvider>
  );
}

export default ResponsiveAppBar;
