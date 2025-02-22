import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import theme from '../theme'; 
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import CoinBaseButton from '../components/coinbase-connect-button.tsx';
import CoinBaseSetup from '../lib/coinbaseSetup.ts';
import CoinBaseProvider from '../lib/coinbaseProvider.ts';

   


const Pricing = () => {
  
  const [isConnectedCoinBase, setIsConnectedCoinBase] = useState(false);

  const handleCoinBaseConnect = async () => {
      const success = await CoinBaseProvider.connectWallet();
      setIsConnectedCoinBase(success);
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
            <Grid item xs={12} sm={12}>
              <Typography variant="h5"
                sx={{ 
                color: theme.palette.primary.contrastText, 
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                marginBottom: '40px'          
                }}>Pricing Page</Typography>
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
                        Pricing page is ready for content
                    </p>
                    
                    
                </Typography>
            </Grid>
            <Grid item sx={12}>
              <CoinBaseButton onClick={handleCoinBaseConnect}>
                {isConnectedCoinBase ? 'Wallet Connected' : 'Connect Wallet'}
              </CoinBaseButton>
            </Grid>
            <Grid item xs={12} sm={6}>
                
            </Grid>
        </Grid>
      </Box>
    </div>
    </ThemeProvider>
  );
}

export default Pricing;