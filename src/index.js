import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

const setCssVariables = (theme) => {
  const root = document.documentElement;
  root.style.setProperty('--primary-main', theme.palette.primary.main); // CornFlower Blue
  root.style.setProperty('--primary-light', theme.palette.primary.light); // Deep Sky Blue
  root.style.setProperty('--primary-dark', theme.palette.primary.dark); // Valhalla Dark Blue 
  root.style.setProperty('--primary-contrastText', theme.palette.primary.contrastText); // Azure White
  root.style.setProperty('--secondary-main', theme.palette.secondary.main); //Martinique (Dark Gray)
  root.style.setProperty('--secondary-light', theme.palette.secondary.light); //Turqoise
  root.style.setProperty('--secondary-dark', theme.palette.secondary.dark); // Black
  root.style.setProperty('--secondary-contrastText', theme.palette.secondary.contrastText); //Dodger Blue
  root.style.setProperty('--background-default', theme.palette.background.default); // CornFlower Blue
};

setCssVariables(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
