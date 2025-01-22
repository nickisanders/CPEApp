// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {    
      main: '#414276', // CornFlower Blue
      light: '#00B8F1', // Deep Sky Blue
      dark: '#242343', // Valhalla Dark Blue  
      contrastText: '#F9FFFF', // Azure White

    },
    secondary: {
      main: '#403F41', //Martinique
      light: '#27CED7', //Turqoise
      dark: '#000000', // Black
      contrastText: '#0D7EE5', //Dodger Blue
    },
    background: {
      default: '#242343',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Set font family
    h5: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Apply rounded corners to all buttons
        },
      },
    },
  },
});

export default theme;
