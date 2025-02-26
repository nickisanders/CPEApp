import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import theme from '../theme'; 
import { ThemeProvider, } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField} from '@mui/material';



const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., API call to create wallet)
    console.log(formData);
    navigate('/wallet/dashboard'); // Example redirect after form submission
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
            justifyContent: 'center',
            paddingRight: {
              xs: '15px',
              sm: '20px',
              md: '35px',
              lg: '65px',
              xl: '195px',
            }}}>
            <Grid item xs={12} sm={12} md={12} sx={{ gridColumn: '1 / -1', textAlign: 'center' }}>
              <Typography variant="h5"
                sx={{ 
                color: theme.palette.primary.contrastText, 
                fontFamily: 'Montserrat',
                marginBottom: '40px'          
                }}>Create your CPE Wallet account now.</Typography>
            </Grid>
              
            <Grid item xs={12} sm={12} md={12}>
              <Grid container item xs={12} justifyContent="center">
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} columns={{ xs: 1 }} sx={{ margin: '0 auto', maxWidth: '500px' }}>
                        <Grid item xs={6}>
                            <TextField
                            label="User Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            required
                            color="secondary"
                            size="small"
                            sx={{ mb: 2,  backgroundColor: theme.palette.primary.contrastText, }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            required
                            size="small"
                            sx={{ mb: 2,  backgroundColor: theme.palette.primary.contrastText, }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            required
                            size="small"
                            sx={{ mb: 2,  backgroundColor: theme.palette.primary.contrastText, }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            required
                            size="small"
                            sx={{ mb: 2,  backgroundColor: theme.palette.primary.contrastText, }}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <Button
                            type="submit"
                            variant="contained"                    
                            fullWidth
                            sx={{
                              fontSize: '18px',
                              backgroundImage: 'linear-gradient(90deg, #00B8F1 55%,rgb(52, 4, 114) 100%)',
                              '&:hover': {
                                opacity: 0.8,
                              },
                              borderRadius: '0px',
                              //height: '56px',
                              width: '100%',
                              position: 'relative', // Ensure the button is above the gradient
                              zIndex: 2, // Place the button above the gradient
                              boxShadow: '-20px 0 30px rgba(0, 184, 241, 0.3), 0 0 100px rgba(0, 184, 241, 0.4)',
                            }}
                            >
                                <Typography
                                sx={{ 
                                color: theme.palette.primary.contrastText, 
                                fontFamily: 'Quicksand, sans-serif',
                                fontWeight: 'bold', 
                                textAlign: 'center',           
                                }}>Create Account</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                  </form>
                </Grid>
            </Grid>
        </Grid>
      </Box>
    </div>
    </ThemeProvider>
  );
}

export default Register;