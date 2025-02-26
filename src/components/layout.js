import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './appbar';
import FooterBar from './footer-bar.js';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Item from '@mui/material/Grid2';
import theme from '../theme'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./layout.css";

const Layout = ({ children }) => {
  

  return (
    <ThemeProvider theme={theme}>
    <>
      <AppBar position="fixed"/>
      {/* <div className="layout-container">
        <div className="side-border"></div>
        <div className="content-area"><Outlet /></div>
        <div className="side-border"></div>
    </div> */}
        {/* <Grid container spacing={0}>
            <Grid size="grow"
            sx={{
                backgroundColor: theme.palette.background.default,
              }}>
            </Grid>
            <Grid size={7}>
                <Item>                        
                    <Outlet />
                </Item>
            </Grid>
            <Grid size="grow"
            sx={{
                backgroundColor: theme.palette.background.default,
              }}>
            </Grid>
        </Grid> */}
      {/* <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: '100vh',
          backgroundColor: theme.palette.secondary.contrastText, // Contrasting background color
        }}
      >
        
        <Box
          sx={{
            flex: 1,
            backgroundColor: theme.palette.background.default,
            height: '100%',
          }}
        />
        
        
        <Outlet />

        
        <Box
          sx={{
            flex: 1,
            backgroundColor: theme.palette.background.default,
            height: '100%',
          }}
        />
      </Box> */}
    </>
        <Outlet />
        <FooterBar position="fixed" sx={{ top: 'auto', bottom: 0 }}/>
    </ThemeProvider>
  );
};

export default Layout;
