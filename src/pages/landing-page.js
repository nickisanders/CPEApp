import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Laptop from '../assets/laptop.png';
import './landing-page.css';
import theme from '../theme'; 
import { ThemeProvider } from '@mui/material/styles';
import { Grid, Typography, TextField, Box } from '@mui/material';

function LandingPage() {
    const navigate = useNavigate();
  
    const connectWallet = async () => {
      navigate('/register'); 
    };

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Box  sx={{ 
            display: 'flex', 
            justifyContent: 'center', // Center horizontally
            width: '100%', // Take full width
          }}>
            <Grid container spacing={2}  
              sx={{maxWidth:'1600px', 
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',}}>  
              <Grid item xs={12} md={7} 
                sx={{
                  paddingRight: '30px'
                }}>
                <Grid item xs={12} textAlign="left" sx={{ marginTop: '100px'}}>
                  <Typography variant="h1" 
                    sx={{ 
                      color: theme.palette.primary.contrastText, 
                      fontFamily: 'Montserrat',
                      fontWeight: 'bold',   
                      paddingTop: {
                        xs: '3px',
                        sm: '4px',
                        md: '5px',
                        lg: '6px',
                        xl: '8px'
                      },   
                      marginBottom: {
                        xs: '3px',
                        sm: '4px',
                        md: '5px',
                        lg: '6px',
                        xl: '8px'
                      },   
                      fontSize: {
                        xs: '32px',
                        sm: '48px',
                        md: '64px',
                        lg: '80px',
                        xl: '96px',
                      }          
                    }} >CPE, Simplified.</Typography>
                  
                  <Typography variant="body1"
                  sx={{ 
                    color: theme.palette.primary.contrastText, 
                    fontFamily: 'Montserrat', 
                    fontWeight: '',   
                    paddingTop: {
                      xs: '6px',
                        sm: '8px',
                        md: '12px',
                        lg: '14px',
                        xl: '18px'
                    },  
                    marginBottom: {
                      xs: '3px',
                        sm: '4px',
                        md: '5px',
                        lg: '6px',
                        xl: '8px'
                    },  
                    fontSize: {
                      xs: '8px',
                      sm: '12px',
                      md: '16px',
                      lg: '20px',
                      xl: '30px',
                    }                   
                  }}>Don't leave your CPE strategy to chance.</Typography>
                  <Typography variant="body1"
                  sx={{ 
                    color: theme.palette.primary.contrastText, 
                    fontFamily: 'Montserrat', 
                    fontWeight: '',  
                    paddingTop: {
                      xs: '6px',
                        sm: '8px',
                        md: '12px',
                        lg: '14px',
                        xl: '18px'
                    },  
                    fontSize: {
                      xs: '8px',
                      sm: '12px',
                      md: '16px',
                      lg: '20px',
                      xl: '30px',
                    }                   
                  }}>CPE Wallet gets you CPE, automates certificates, and ensures compliance with state reporting.</Typography>
                
                  
                  

                  <Grid container spacing={0} textAlign="left" 
                    sx={{ 
                      marginTop: {
                        xs: '3px',
                        sm: '5px',
                        md: '10px',
                        lg: '20px',
                        xl: '30px'
                      },
                      paddingTop: {
                        xs: '3px',
                        sm: '5px',
                        md: '10px',
                        lg: '20px',
                        xl: '30px'
                      },
                      paddingBottom: {
                        xs: '25px',
                        sm: '30px',
                        md: '40px',
                        lg: '40px',
                        xl: '40px'
                      }, 
                    }}>
                    
                      <Grid item xs={12} md={10}
                       sx={{
                        boxShadow: '-20px 0 30px rgba(0, 184, 241, 0.2), 0 0 100px rgba(0, 184, 241, 0.3)',
                        height: '36',
                        }}
                        >
                        
                        <Stack direction="row" spacing={0}>
                          <TextField
                            id="signUpTextField"
                            label="Email Address"
                            variant="filled"
                            size="small"
                            sx={{ backgroundColor: theme.palette.primary.contrastText,
                              width: '100%', 
                              //height: '56px',
                              zIndex: 2, // Place the button above the gradient
                              
                            }}
                          />
                          {/* Button */}
                          <Button
                            variant="contained"
                            onClick={connectWallet}
                            sx={{
                              fontSize: '18px',
                              backgroundImage: 'linear-gradient(90deg, #00B8F1 55%,rgb(52, 4, 114) 100%)',
                              '&:hover': {
                                opacity: 0.8,
                              },
                              borderRadius: '0px',
                              //height: '56px',
                              width: '70%',
                              position: 'relative', // Ensure the button is above the gradient
                              zIndex: 2, // Place the button above the gradient
                              //boxShadow: '0 0 30px rgba(0, 184, 241, 0.3), 0 0 100px rgba(0, 184, 241, 0.2)',
                            }}
                          >
                            Sign Up
                          </Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={2}></Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={12} md={5} 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <img 
                  src={Laptop} 
                  alt="Laptop Computer displaying logo" 
                  aria-hidden="true" 
                  style={{ 
                    width: '100%', 
                    zIndex: 1, 
                    maxWidth: '900px', // Prevent it from getting too large
                    //paddingLeft: '105px' 
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </ThemeProvider>
    );
  }

export default LandingPage;
