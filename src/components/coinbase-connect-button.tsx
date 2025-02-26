import React, { useState } from 'react';
import { connectWallet } from '../lib/coinbaseProvider.ts';
import Button from '@mui/material/Button';

const CoinbaseWalletButton: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = async () => {
    const success = await connectWallet();
    setIsConnected(success);
  };

  return (
    <Button onClick={handleConnect}>
      {isConnected ? 'Wallet Connected' : 'Connect Wallet'}
    </Button>
  );
};

export default CoinbaseWalletButton;