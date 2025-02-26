import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FolderIcon from '../assets/logos/CPE Icon.png';
import { useNavigate } from 'react-router-dom'; 
import { ThemeProvider, } from '@mui/material/styles';
import theme from '../theme'; 


const pages = ['About', 'Solutions', 'Pricing',];
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
        <AppBar position="fixed" sx={{ backgroundColor: theme.palette.background.default }} elevation={0}> {/* setting elevation to zero removes the box shadow from the appbar. Give it a higher value to return the shadow */}
        <Container maxWidth="xxl" sx={{ maxWidth: '1750px' }}>
            <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>                
                <Button onClick={() => handleNavigate('')}>
                    <img src={FolderIcon} alt="CPE Icon" style={{width: '55px'}}/>
                </Button>
            </Box>

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
                        <Typography sx={{ textAlign: 'center', fontFamily: 'Montserrat', }}>{page}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                <Button onClick={() => handleNavigate('')}>
                    <img src={FolderIcon} alt="CPE Icon" style={{width: '50px'}} />
                </Button>
            </Box>
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
                <IconButton onClick={() => handleNavigate('signin')} sx={{ p: 0 }}>
                    <Typography sx={{ textAlign: 'center', color: theme.palette.primary.contrastText }}>Sign In</Typography>                    
                </IconButton>
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
