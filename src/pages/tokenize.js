import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../theme'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid, Typography, TextField, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TokenizeCpe from '../components/tokenize-cpe';
import TokenizeOther from '../components/tokenize-other';

const Tokenize = () => {

  const [cpeFormData, setFormData] = useState({
    certificate: '',
    providerName: '',
  });
  
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setFormData({
  //     ...cpeFormData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here (e.g., API call to create wallet)
  //   console.log(cpeFormData);
  //   navigate('/wallet/dashboard'); // Example redirect after form submission
  // };

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* <div className="container"> */}
      <Typography variant="h4"
        sx={{ 
          color: theme.palette.primary.main, 
          fontFamily: 'Montserrat',
          fontWeight: 'bold',       
          padding: '10px',             
        }}>Tokenization</Typography>

      <Divider variant="middle" sx={{ 
        width: '100%',
        margin: '10px auto', 
        marginBottom: '40px',
        borderWidth: '2px', // Adjust the thickness
        borderColor: theme.palette.primary.main, // Optional: Set the color
        backgroundColor: theme.palette.primary.main, // For non-text dividers
      }} />

      <Accordion sx={{ backgroundColor: theme.palette.primary.contrastText}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6"
                    sx={{ 
                    color: theme.palette.primary.main, 
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',          
                    }}>Tokenize CPE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TokenizeCpe />          
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: theme.palette.primary.contrastText}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h6"
                    sx={{ 
                    color: theme.palette.primary.main, 
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',          
                    }}>Tokenize Other</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TokenizeOther />
        </AccordionDetails>
      </Accordion>
    </div>
    </ThemeProvider>
  );
}

export default Tokenize;