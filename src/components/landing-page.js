import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CPEWalletLogo from '../assets/logos/CPEWallet_Logo.svg';
import BackgroundImage from '../assets/Landing_Background.webp';
import AppBar from './appbar';
import './landing-page.css';
import App from '../App';

function LandingPage() {
    const navigate = useNavigate();
  
    const connectWallet = async () => {
      // Wallet connection logic here...
      navigate('/dashboard'); // Redirect to the dashboard page
    };

    const createWallet = async () => {
        // Wallet creation logic here...
        alert('Wallet creation logic has not yet been implemented!');
        //navigate('/dashboard'); // Redirect to the dashboard page   
    }
  
    return (
      <div className="App">
        {/* <img src={BackgroundImage} alt="Background" className="background-image" /> */}
        <header className="brand-name"
        style={{
          backgroundImage: `url('../assets/CPEWallet_Logo.svg')`, // Path to your image          
        }}>
          <div className="container" >
            <p className="biggest-font">As a CPA,</p>
          
            <p className="big-font">Shouldn't getting the CPE be enough?</p>
          
            <p className="mid-font">You earn the credit. CPE Wallet does the rest.</p>
          </div>
          <img className="brand-logo" src={CPEWalletLogo}
            alt="CPE Wallet Logo" aria-hidden="true"></img>
        </header>
        
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px', // Spacing between header and buttons
            marginTop: '30px', // Space from top header
          }}
        >
          {/* Header */}
          <h1 style={{ fontSize: '40px', color: '#4A5D4A', fontWeight: 'bold', marginTop: '100px' }}>
            I want to:
          </h1>

          {/* Buttons */}
          <Stack
            direction="row"
            spacing={3} // Increased spacing between buttons
            alignItems="center"
            justifyContent="center"
          >
            <Button
              variant="contained"
              onClick={createWallet}
              sx={{
                fontSize: '18px',
                backgroundColor: '#414276',
                '&:hover': {
                  opacity: 0.8,
                },
                padding: '14px 30px', // Bigger padding for larger buttons
                borderRadius: '8px', // Rounded corners for aesthetic
              }}
            >
              Create my Wallet
            </Button>
            <Button
              variant="contained"
              onClick={connectWallet}
              sx={{
                fontSize: '18px',
                backgroundColor: '#00B8F1',
                '&:hover': {
                  opacity: 0.8,
                },
                padding: '14px 30px',
                borderRadius: '8px',
              }}
            >
              Connect Wallet
            </Button>
          </Stack>
        </div>
      </div>
    );
  }

export default LandingPage;
