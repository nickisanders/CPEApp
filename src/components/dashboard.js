import React, { useState, useEffect } from 'react';
import './dashboard.css'; // Assuming you have some CSS for styling
import { ethers, BrowserProvider, Contract } from 'ethers';
import abi from '../CPECertificateABI.json'; // Import the ABI of CPECertificate
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Header from './header';
import AppBar from './appbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import UserMenu from './user-menu';


const Dashboard = () => {
    const [account, setAccount] = useState(null);
    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const [viewMode, setViewMode] = useState('card'); // 'card' or 'list'
      const [expandedNFT, setExpandedNFT] = useState(null); // To keep track of the expanded NFT
      const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  // Dummy progress data
  const progressData = [
    { category: 'Audit', completed: 12, required: 40 },
    { category: 'Tax', completed: 30, required: 50 },
    { category: 'Ethics', completed: 4, required: 4 },
    { category: 'Utah Laws', completed: 2, required: 2 },
  ];

  // Calculate the percentage of completion
  const getProgressPercentage = (completed, required) => {
    return Math.min((completed / required) * 100, 100);
  };

  const connectWallet = async () => {
      try {
        if (!window.ethereum) {
          alert('MetaMask not found. Please install it to use this site.');
          return;
        }
  
        const provider = new BrowserProvider(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = await provider.getSigner();
        const userAddress = await signer.getAddress();
        setAccount(userAddress);
        fetchNFTs(userAddress, provider);
      } catch (error) {
        console.error('Error connecting wallet:', error);
        setError('Failed to connect wallet. Please try again.');
      }
    };
  
    const disconnectWallet = () => {
      setAccount(null);
      setNfts([]);
      setError(null);
      console.log('Wallet disconnected');
    };

    const fetchNFTs = async (walletAddress, provider) => {
        setLoading(true);
        setError(null);
        try {
          const contract = new Contract(contractAddress, abi, provider);
          const nftData = [];
    
          const transferEvents = await contract.queryFilter(
            contract.filters.Transfer(null, walletAddress)
          );
    
          for (let event of transferEvents) {
            const tokenId = event.args.tokenId;
            const certificateDetailsArray = await contract.getCertificateDetails(tokenId);
            const tokenURI = await contract.tokenURI(tokenId);
    
            const certificateDetails = {
              name: certificateDetailsArray[0],
              certificateId: certificateDetailsArray[1],
              courseTitle: certificateDetailsArray[2],
              issuer: certificateDetailsArray[3],
              dateIssued: Number(certificateDetailsArray[4]),
              completionDate: Number(certificateDetailsArray[5]),
              cpeHours: Number(certificateDetailsArray[6]),
            };
    
            nftData.push({
              tokenId: tokenId.toString(),
              ...certificateDetails,
              tokenURI,
            });
          }
    
          setNfts(nftData);
        } catch (error) {
          console.error('Error fetching NFTs:', error);
          setError('Failed to load NFTs. Please try refreshing.');
        } finally {
          setLoading(false);
        }
      };

    const refreshNFTs = async () => {
        if (account) {
        setLoading(true);
        const provider = new BrowserProvider(window.ethereum);
        await fetchNFTs(account, provider);
        }
    };

    const toggleViewMode = () => {
        setViewMode(viewMode === 'card' ? 'list' : 'card');
      };
    
      const handleSwitchChange = (event) => {
        setViewMode(event.target.checked ? 'list' : 'card');
      };
    
      const toggleNFTExpansion = (index) => {
        setExpandedNFT(expandedNFT === index ? null : index);
      };
    
      // Calculate total CPE hours
      const getTotalCPEHours = () => {
        //return nfts.reduce((total, nft) => total + nft.cpeHours, 0);
        return progressData.reduce((sum, item) => sum + item.completed, 0);
      };

  return (
    <div>
      <div className="dashboard" style={{ maxWidth: '1500px', margin: '0 auto' }}>
        <main>
          <Grid container spacing={2} style={{ padding: '20px' }}>
            <Grid item xs={6} sm={6}>
              <h1>CPE Certificate Dashboard</h1>
            </Grid>
            <Grid item xs={6} sm={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div className="wallet-container">
                {account && (
                  <p className="wallet-status">🦊 Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
                )}
                {account ? (
                  <button className="btn btn-disconnect" onClick={disconnectWallet}>
                    Disconnect Wallet
                  </button>
                ) : (
                  <button className="btn btn-connect" onClick={connectWallet}>
                    Connect Wallet
                  </button>
                )}
              </div>
            </Grid>
          </Grid>
          
          {account ? (
            <>
              <div className="nft-header-container">
                <h2>Your CPE Certificates</h2>
                <button className="btn btn-refresh" onClick={refreshNFTs} disabled={loading}>
                  {loading ? 'Refreshing...' : 'Refresh NFTs'}
                </button>

                <div className="view-toggle">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={viewMode === 'list'}
                      onChange={handleSwitchChange}
                    />
                    <span className="slider"></span>
                  </label>
                  <p>{viewMode === 'card' ? 'Card View' : 'List View'}</p>
                </div>
              </div>
              
              {/* CPE Status Card */}
              {/* Grid Item! */}
              <Grid container spacing={1} style={{ padding: '20px', }}>
                <Grid item xs={12} sm={4} >
                  <Box sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      gap: '20px',
                  }}>
                    <Box sx={{
                        flex: 1,
                        minWidth: '300px',
                        padding: '20px',
                        backgroundColor: '#f9f9f9',
                        borderRadius: '8px',
                        boxShadow: 2,
                        maxWidth: '25%',
                    }}>
                      <Typography
                          variant="h5"
                          sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#4A5D4A' }}
                      >
                        CPE Status
                      </Typography>
                      {progressData.map((item, index) => (
                        <Box key={index} sx={{ marginBottom: '20px' }}>
                            <Typography variant="h6" sx={{ marginBottom: '8px', fontWeight: 'bold', color: '#4A5D4A' }}>
                                {item.category}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LinearProgress
                                    variant="determinate"
                                    value={getProgressPercentage(item.completed, item.required)}
                                    sx={{
                                        flexGrow: 1,
                                        height: 40,
                                        borderRadius: 5,
                                        backgroundColor: '#e0e0e0',
                                        '& .MuiLinearProgress-bar': {
                                            background: 'linear-gradient(90deg, #8A2BE2, #4B0082, #00FFFF)',
                                            borderRadius: 5,
                                        },
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{ marginLeft: '10px', color: '#4A5D4A', fontWeight: 'bold' }}
                                >
                                    {getProgressPercentage(item.completed, item.required).toFixed(0)}%
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ marginTop: '4px', color: '#4A5D4A' }}>
                                {item.completed} of {item.required} hours completed
                            </Typography>
                        </Box>
                    ))}
                      <Typography variant="h6" sx={{ marginTop: '8px', marginBottom: '4px', fontWeight: 'bold', color: '#4A5D4A' }}>
                        <h3>Total Hours: {getTotalCPEHours()}</h3>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Suggested CPE Card */}
                {/* Grid Item! */}
                <Grid item xs={12} sm={8} >
                  <Box sx={{
                        flex: 1,
                        minWidth: '300px',
                        padding: '20px',
                        backgroundColor: '#f9f9f9',
                        borderRadius: '8px',
                        boxShadow: 2,
                    }}>
                    <Typography
                        variant="h5"
                        sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#4A5D4A' }}
                    >
                        Suggested CPE
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="Deloitte" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Earmark" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Lumiq" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Other..." />
                        </ListItem>
                    </List>
                  </Box>
                </Grid>
              </Grid>

              {error && <p className="error-message">{error}</p>}

              {loading ? (
                <p className="loading">Loading NFTs...</p>
              ) : nfts.length > 0 ? (
                viewMode === 'card' ? (
                  <div className="nft-container">
                    {nfts.map((nft, index) => (
                      <div key={index} className="nft-card">
                        <img src={nft.tokenURI} alt="NFT" className="nft-image" />
                        <h3>Certificate ID: {nft.certificateId}</h3>
                        <p><strong>Name:</strong> {nft.name}</p>
                        <p><strong>Course Title:</strong> {nft.courseTitle}</p>
                        <p><strong>Issuer:</strong> {nft.issuer}</p>
                        <p><strong>Date Issued:</strong> {new Date(nft.dateIssued * 1000).toLocaleDateString()}</p>
                        <p><strong>Completion Date:</strong> {new Date(nft.completionDate * 1000).toLocaleDateString()}</p>
                        <p><strong>CPE Hours:</strong> {nft.cpeHours}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="nft-list">
                    {nfts.map((nft, index) => (
                      <li key={index} className="nft-list-item" onClick={() => toggleNFTExpansion(index)}>
                        <img src={nft.tokenURI} alt="NFT" className="nft-image-left" />
                        <div className="nft-card-content">
                          <h3>Certificate ID: {nft.certificateId}</h3>
                          <p><strong>Course Title:</strong> {nft.courseTitle}</p>
                        </div>
                        {expandedNFT === index && (
                          <div className="nft-card-centered">
                            <div className="nft-card">
                              <img src={nft.tokenURI} alt="NFT" className="nft-image" />
                              <h3>Certificate ID: {nft.certificateId}</h3>
                              <p><strong>Name:</strong> {nft.name}</p>
                              <p><strong>Course Title:</strong> {nft.courseTitle}</p>
                              <p><strong>Issuer:</strong> {nft.issuer}</p>
                              <p><strong>Date Issued:</strong> {new Date(nft.dateIssued * 1000).toLocaleDateString()}</p>
                              <p><strong>Completion Date:</strong> {new Date(nft.completionDate * 1000).toLocaleDateString()}</p>
                              <p><strong>CPE Hours:</strong> {nft.cpeHours}</p>
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )
              ) : (
                <Grid container spacing={2} style={{ marginTop: '50px', padding: '20px', justifyContent: 'center' }}>
                  <Grid item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <p>No NFTs found in this wallet. Progress data displayed for demonstration purposes only.</p>
                  </Grid>
                </Grid>
              )}
            </>
          ) : (
            <Grid container spacing={2} style={{ padding: '20px' }}>
              <Grid item xs={12} sm={12}>
                <p>Please connect your MetaMask wallet.</p>
              </Grid>
            </Grid>
          )}
        </main>       
      </div>
    </div>
  );
};

export default Dashboard;