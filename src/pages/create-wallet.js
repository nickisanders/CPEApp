import React, { useState } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import theme from '../theme'; 
import { ThemeProvider, } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';

const CreateWallet = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const navigate = useNavigate();

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
            <Typography variant="h4"
                gutterBottom
                sx={{ 
                color: theme.palette.primary.main, 
                fontFamily: 'Montserrat',
                fontWeight: 'bold',       
                padding: '10px',  
                textAlign: 'center', 
                marginTop: '20px',          
                }}>Create New Wallet</Typography>

            <Divider variant="middle" sx={{ 
                width: '60% auto',
                marginBottom: '30px', 
                borderWidth: '2px', 
                borderColor: theme.palette.primary.main,
                backgroundColor: theme.palette.primary.main, 
                }} />
            <div className="container" style={{ maxWidth: '1500px', margin: '0 auto', marginBottom: '100px', position: 'relative', textAlign: 'left' }}>
                
                    
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
                            sx={{ mb: 2 }}
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
                            sx={{ mb: 2 }}
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
                            sx={{ mb: 2 }}
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
                            sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                            type="submit"
                            variant="contained"                    
                            // fullWidth
                            sx={{ padding: '12px', fontWeight: 'bold', color: theme.palette.primary.main, backgroundColor: theme.palette.primary.light }}
                            >
                                <Typography
                                sx={{ 
                                color: theme.palette.primary.main, 
                                fontFamily: 'Quicksand, sans-serif',
                                fontWeight: 'bold', 
                                textAlign: 'center',           
                                }}>Create Wallet</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    </ThemeProvider>
  );
};

export default CreateWallet;
