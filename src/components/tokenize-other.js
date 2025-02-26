import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../theme'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import InputFileUpload from './input-file-upload';
import Box from '@mui/material/Box';

const TokenizeOther = () => {
    
    const [fileType, setFileType] = React.useState('');

  const handleChange = (event) => {
    setFileType(event.target.value);
  };

  const [cpeFormData, setFormData] = useState({
    file: '',
    providerName: '',
  });
  
  const navigate = useNavigate();

  const buttonHeight = '36.5px'; 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., API call to create wallet)
    console.log(cpeFormData);
    navigate('/wallet/dashboard'); // Example redirect after form submission
  };

  return (
    <form onSubmit={handleSubmit}>
        <Grid container spacing={2} columns={{ xs: 1 }} sx={{ margin: '0 auto', maxWidth: '500px' }}>
            <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel id="fileTypeLabel">File Type</InputLabel>
                <Select
                    labelId="fileTypeLabel"
                    id="fileTypeSelect"
                    value={fileType}
                    label="File Type"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>College Degree</MenuItem>
                    <MenuItem value={20}>Professional License</MenuItem>
                    <MenuItem value={30}>Other Certification</MenuItem>
                </Select>
            </FormControl>
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

export default TokenizeOther;