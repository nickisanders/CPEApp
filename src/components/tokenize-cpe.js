import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../theme'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid, Typography, TextField, Button } from '@mui/material';
import InputFileUpload from './input-file-upload';
import Box from '@mui/material/Box';

const TokenizeCpe = () => {

  const [cpeFormData, setFormData] = useState({
    certificateName: '',
    providerName: '',
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...cpeFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., API call to create wallet)
    console.log(cpeFormData);
    navigate('/wallet/dashboard'); // Example redirect after form submission
  };

  const buttonHeight = '36.5px'; 

  return (
    <form onSubmit={handleSubmit}>
        <Grid container spacing={2} columns={{ xs: 1 }} sx={{ margin: '0 auto', maxWidth: '500px' }}>
            <Grid item xs={6}>
                <TextField
                label="Certificate Name"
                name="certificateName"
                value={cpeFormData.certificateName}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                required
                sx={{ mb: 2 }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                label="CPE Provider"
                name="providerName"
                type="providerName"
                value={cpeFormData.providerName}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                required
                sx={{ mb: 2 }}
                />
            </Grid>
            <Grid container item xs={12} spacing={2} direction="row" alignItems="center">
                <Grid item xs={6}>
                    <Box sx={{ height: buttonHeight }}>
                    <InputFileUpload />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        height: buttonHeight,
                        padding: '12px',
                        fontWeight: 'bold',
                        color: 'primary.main',
                        backgroundColor: 'primary.light',
                    }}
                    >
                    <Typography
                        sx={{
                        color: 'primary.main',
                        fontFamily: 'Quicksand, sans-serif',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        }}
                    >
                        Tokenize
                    </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </form>
  );
}

export default TokenizeCpe;