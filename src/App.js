import React, { useState, useEffect } from 'react';
// import { ethers, BrowserProvider, Contract } from 'ethers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import abi from './CPECertificateABI.json'; // Import the ABI of CPECertificate
import './App.css'; // Import the CSS file for DApp styles
import Dashboard from './pages/dashboard';
import OldDashboard from './pages/dashboard-old';
import LandingPage from './pages/landing-page';
import PublicView from './pages/public-view';
import { createTheme } from '@mui/material/styles';
import Tokenize from './pages/tokenize';
import About from './pages/about.tsx';
import Layout from './components/layout';
import CreateWallet from './pages/create-wallet';
import Register from './pages/register';
import Solutions from './pages/solutions.tsx';
import Pricing from './pages/pricing';
import SignIn from './pages/sign-in';

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
              <Route path="/create-wallet" element={<CreateWallet />} />
              <Route path="/tokenize" element={<Tokenize />} />
              <Route path="/register" element={<Register />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/signin" element={<SignIn />} />
            </Route>
          </Route>
        </Routes>
    </Router>    
  );
}

export default App;
