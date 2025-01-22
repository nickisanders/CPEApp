import React, { useState, useEffect } from 'react';
// import { ethers, BrowserProvider, Contract } from 'ethers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import abi from './CPECertificateABI.json'; // Import the ABI of CPECertificate
import './App.css'; // Import the CSS file for DApp styles
import Dashboard from './components/dashboard';
import OldDashboard from './components/dashboard-old';
import LandingPage from './components/landing-page';
import PublicView from './components/public-view';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Tokenize from './components/tokenize';
import About from './components/about';
import Layout from './components/layout';

// import { useNavigate } from 'react-router-dom';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <Router>
        <Routes>
          <Route>            
            <Route path='/' element={<Layout />}>
              <Route index element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/old-dashboard" element={<OldDashboard />} />
              <Route path="/public-view/:userId" element={<PublicView />} />
              <Route path="/about" element={<About />} />
              <Route path="/create-wallet" element={<PublicView />} />
              <Route path="/tokenize" element={<Tokenize />} />
            </Route>
          </Route>
          {/* <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/old-dashboard" element={<OldDashboard />} />
          <Route path="/public-view/:userId" element={<PublicView />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-wallet" element={<PublicView />} />
          <Route path="/tokenize" element={<Tokenize />} /> */}
        </Routes>
    </Router>    
  );
}

export default App;
