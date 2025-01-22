import React, { useState, useEffect } from 'react';
import UserMenu from './user-menu'; // Adjust path if needed
import './header.css'; // Optional: separate styling for the header
import Button from '@mui/material/Button';



const Header = ({ account, onDisconnect }) => {
  return (
    <header className="app-header">
      <h1 className="logo">CPE Certificate Dashboard</h1>
      <div className="wallet-container">
        {account && (
          <p className="wallet-status">🦊 Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
        )}
        {account ? (
          <Button
            variant="contained"
            // onClick={connectWallet}
            sx={{
              fontSize: '18px',
              backgroundColor: '#8A2BE2',
              '&:hover': {
                backgroundColor: '#6A1DB0',
              },
              padding: '14px 30px',
              borderRadius: '8px',
            }}
          >
          Connect Wallet
        </Button>
        ) : (
          <p>Please connect your wallet</p>
        )}
        <UserMenu account={account} />
      </div>
    </header>
  );
};

export default Header;