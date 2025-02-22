import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import theme from '../theme'; 
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

const About = () => {
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
            <Grid item xs={12} sm={12}>
              <Typography variant="h5"
                sx={{ 
                color: theme.palette.primary.contrastText, 
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                marginBottom: '40px'          
                }}>About CPE Wallet</Typography>
            </Grid>
              
            <Grid item xs={12} sm={12}>
                <Typography 
                  variant="subtitle1" 
                  component="div"
                  sx={{ 
                    color: theme.palette.primary.contrastText, 
                    fontFamily: 'Montserrat',         
                    }}>
                    <p>
                        We just want a better CPE experience. Is that too much to ask?
                    </p>
                    <p>
                        At CPE Wallet, we're all about redefining the CPE game using <span style={{ color: theme.palette.primary.contrastText, fontWeight: 'bold'}}>blockchain technology</span>. We believe that your continuing
                        profressional education should be about the education, not the <span style={{ color: theme.palette.primary.contrastText, fontWeight: 'bold'  }}>time-consuming</span> tasks of <span style={{ color: theme.palette.primary.contrastText, fontWeight: 'bold'  }}> tracking </span>
                        credits, <span style={{ color: theme.palette.primary.contrastText, fontWeight: 'bold'  }}>downloading</span> certifications, <span style={{ color: theme.palette.primary.contrastText, fontWeight: 'bold'  }}>saving PDFs</span> and reproting to your state board.
                    </p>
                    <p>
                        You shouldn't have to worry about whether you have enough credits or if you received your last certificate.
                        That's why we're dedicated to making your CPE experience smooth and something you enjoy.
                    </p>
                    <p>
                      One of the <span style={{ color: theme.palette.primary.contrastText, fontWeight: 'bold'  }}>best use cases</span> of blockchain the world has seen, CPE Wallet tokenizes your certificates, populates
                      your dashboard, and stores your certifcates, forever.
                    </p>
                    <p>
                      How do we do it? See how, <span style={{ color: theme.palette.primary.contrastText, fontWeight: 'bold'  }}>here</span>.
                    </p>
                    
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                
            </Grid>
        </Grid>
      </Box>
    </div>
    </ThemeProvider>
  );
}

export default About;