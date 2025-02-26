import React, { useState, useEffect } from 'react';
import './dashboard.css'; // Assuming you have some CSS for styling
import { BrowserProvider, Contract } from 'ethers';
import abi from '../CPECertificateABI.json'; // Import the ABI of CPECertificate
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import theme from '../theme'; 
import { ThemeProvider } from '@mui/material/styles';
import { Divider } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import AccordionDetails from '@mui/material/AccordionDetails';
import cpeRequirements from '../lib/cpeRequirements.json';
import DashTabs from '../components/dashboard-tab-panel';
import {FormGroup} from '@mui/material';
import {FormControlLabel} from '@mui/material';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import CoinBaseSetup from '../lib/coinbaseSetup.ts';
import CoinBaseProvider from '../lib/coinbaseProvider.ts';
import CoinBaseButton from '../components/coinbase-connect-button.tsx';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Paper from '@mui/material/Paper';
import CertificatesInDb from "../components/certificates-in-db";




function Dashboard () {
    const [account, setAccount] = useState(null);
    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [expandedNFT, setExpandedNFT] = useState(null); 
    const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
    const [progressContent, setProgressContent] = useState('Progress data here...');
    const [certificatesContent, setCertificatesContent] = useState('Certificates data here...');
    const [suggestedCPEContent, setSuggestedCPEContent] = useState('Suggested CPE content here...');
    const [uploadCertificatesContent, setUploadCertificatesContent] = useState('Uploade Certificates here...');
    //const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [isListView, setIsListView] = useState(false);
    const [certDialogOpen, setCertDialogOpen] = React.useState(null);

    const selectedState = "Utah";
    const profession = "CPA";
    //const stateRequirements = cpeRequirements[selectedState]?.[profession]?.["requirements"] || [];
    const data = cpeRequirements;
    const requirements = Array.from(cpeRequirements.States.Utah.CPA.requirements || []);
    const [isConnectedCoinBase, setIsConnectedCoinBase] = useState(false);
      
  // Dummy progress data
  const progressData = [
    { category: 'Audit', completed: 12, required: 40 },
    { category: 'Tax', completed: 30, required: 50 },
    { category: 'Ethics', completed: 4, required: 4 },
    { category: 'Utah Laws', completed: 2, required: 2 },
  ];

  const handleCoinBaseConnect = async () => {
    const success = await CoinBaseProvider.connectWallet();
    setIsConnectedCoinBase(success);
  };
 

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

  const handleCertDialogClickOpen = () => {
    setCertDialogOpen(true);
  };

  const handleCertDialogClickClose = () => {
    setCertDialogOpen(false);
  }

  const toggleCertDialogOpen = (index) => {
    setCertDialogOpen(certDialogOpen === index ? null : index);
  }

  // useEffect to run generateProgressContent after `nfts` is updated
  useEffect(() => {
    if (nfts.length > 0) {
        generateProgressContent();
        generateCertificatesContent();
        generateSuggestedCPEContent();
        generateUploadContent();
    }
  }, [nfts, isListView, certDialogOpen]); // Runs when `nfts` changes

  const generateProgressContent = () => {
    setProgressContent(
      <>
      
      {loading ? (
        <p className="loading">Loading NFTs...</p>
      ) : nfts.length > 0 ? (
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <Box className="status-box" style={{ padding: '20px', textAlign: 'left', borderRadius: '8px' }}>
              <Typography
                  variant="h5"
                  sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#4A5D4A' }}
              >
                CPE Status
              </Typography>
              
              {requirements.map((req, index) => (
                <Box key={index} sx={{ marginBottom: '20px' }}>
                    <Typography variant="h6" sx={{ marginBottom: '8px', fontWeight: 'bold', color: '#4A5D4A' }}>
                        {req.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LinearProgress
                            variant="determinate"
                            value={getProgressPercentage(calculateHoursForCategory(req.name), req.value)}
                            sx={{
                                flexGrow: 1,
                                height: 40,
                                borderRadius: 5,
                                backgroundColor: '#e0e0e0',
                                '& .MuiLinearProgress-bar': {
                                    // background: 'linear-gradient(20deg, #8A2BE2, #4B0082, #00FFFF)',
                                    background: theme.palette.primary.light,
                                    borderRadius: 5,
                                },
                            }}
                        />
                        <Typography
                            variant="body2"
                            sx={{ marginLeft: '10px', color: '#4A5D4A', fontWeight: 'bold' }}
                        >
                            {getProgressPercentage(calculateHoursForCategory(req.name), req.value).toFixed(0)}%
                        </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ marginTop: '4px', color: '#4A5D4A' }}>
                        {calculateHoursForCategory(req.name)} of {req.value} hours completed
                    </Typography>
                </Box>
            ))}
              <Typography variant="h5" sx={{ marginTop: '8px', marginBottom: '4px', fontWeight: 'bold', color: '#4A5D4A' }}>
                Total Hours: {getTotalCPEHours()}
              </Typography>
          </Box>
        </Grid>
      </Grid>
      )
      : (
        <>
          <Grid container spacing={2} style={{ marginTop: '50px', padding: '20px', justifyContent: 'center' }}>
            <Grid item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <p>No NFTs found in this wallet.</p>
            </Grid>
          </Grid>
        </>
      )}
    
      </>
    );
  };

  const generateCertificatesContent = async () => {
    setCertificatesContent(
      <React.Fragment>
      <Grid container spacing={2} style={{ padding: '20px', display: 'flex', alignItems: 'left' }}>
        <Grid item xs={4} style={{ display: 'flex', alignItems: 'left' }}>
        <Typography variant="h4"
        sx={{ 
          color: theme.palette.primary.contrastText, 
          fontFamily: 'Montserrat',
          fontWeight: 'bold',       
          padding: '10px',             
          
        }}>Your CPE Certificates</Typography>
        </Grid>
        
        <Grid item xs={6} style={{ display: 'flex', alignItems: 'left' }}>
          <FormGroup>
            <FormControlLabel 
              control={<Switch  
                checked={isListView}
                onChange={handleCertViewSwitchChange}
                sx={{
                  '& .MuiSwitch-thumb': { backgroundColor: theme.palette.primary.contrastText }, // Thumb color
                  '& .MuiSwitch-track': { backgroundColor: theme.palette.secondary.light }, // Track color
                  '& .Mui-checked .MuiSwitch-thumb': { backgroundColor: theme.palette.secondary.light }, // Checked thumb color
                  '& .Mui-checked .MuiSwitch-track': { backgroundColor: theme.palette.secondary.contrastText }, // Checked track color
                }}
                />} 
              label="List View" sx={{ color: theme.palette.primary.contrastText }}/>
          </FormGroup>
        </Grid>
      </Grid>
      
      {error && <p className="error-message">{error}</p>}


      {loading ? (
          <p className="loading">Loading NFTs...</p>
        ) : nfts.length > 0 ? (
          !isListView  ? (
            <ThemeProvider theme={theme}>
            <Box className="certificates-container" style={{padding: '10px' }}>
              <ImageList cols={3} gap={8}>
                {nfts.map((nft, index) => (
                  <ImageListItem key={nft.tokenURI} onClick={toggleCertDialogOpen(index)} style={{ cursor: 'pointer' }}>
                    <img
                      srcSet={`${nft.tokenURI}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${nft.tokenURI}?w=164&h=164&fit=crop&auto=format`}
                      alt={nft.courseTitle}
                      loading="lazy"
                    />

                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Typography variant="h6" sx={{fontFamily: 'Montserrat', fontWeight: 'bold'}}>Certificate ID: </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="Subtitle2" sx={{fontFamily: 'Montserrat'}}>{nft.certificateId}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Typography variant="h6" sx={{fontFamily: 'Montserrat', fontWeight: 'bold'}}>Name: </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="Subtitle2" sx={{fontFamily: 'Montserrat'}}>{nft.name}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Typography variant="h6" sx={{fontFamily: 'Montserrat', fontWeight: 'bold'}}>Course Title: </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="Subtitle2" sx={{fontFamily: 'Montserrat'}}>{nft.courseTitle}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Typography variant="h6" sx={{fontFamily: 'Montserrat', fontWeight: 'bold'}}>Issuer: </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="Subtitle2" sx={{fontFamily: 'Montserrat'}}>{nft.issuer}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Typography variant="h6" sx={{fontFamily: 'Montserrat', fontWeight: 'bold'}}>Date Issued: </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="Subtitle2" sx={{fontFamily: 'Montserrat'}}>{new Date(nft.dateIssued * 1000).toLocaleDateString()}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Typography variant="h6" sx={{fontFamily: 'Montserrat', fontWeight: 'bold'}}>Completion Date: </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="Subtitle2" sx={{fontFamily: 'Montserrat'}}>{new Date(nft.completionDate * 1000).toLocaleDateString()}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Typography variant="h6" sx={{fontFamily: 'Montserrat', fontWeight: 'bold'}}>CPE Hours: </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="Subtitle2" sx={{fontFamily: 'Montserrat'}}>{nft.cpeHours}</Typography>
                      </Grid>
                    </Grid>

                    <Dialog
                      open={certDialogOpen}
                      onClose={handleCertDialogClickClose(index)} 
                                          
                      >
                      <DialogTitle>{nft.courseTitle}</DialogTitle>
                      <DialogContent 
                      >
                        <img
                              srcSet={`${nft.tokenURI}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                              src={`${nft.tokenURI}?w=164&h=164&fit=crop&auto=format`}
                              alt={nft.courseTitle}
                              loading="lazy"
                              
                              style={{
                                maxWidth: '95%', // Ensure the image does not exceed the width of its container
                                maxHeight: '95%', // Ensure the image does not exceed the height of its container
                                height: 'auto', // Maintain aspect ratio
                                width: 'auto', // Maintain aspect ratio
                                display: 'block', // Remove extra space below the image
                                margin: 'auto', // Center the image horizontally
                            }}
                            />
                        <DialogContentText >
                        
                        </DialogContentText>                        
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleCertDialogClickOpen}>Close</Button>
                      </DialogActions>
                    </Dialog>                  
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>

            
            </ThemeProvider>
          ) : (
            <ul className="nft-list">
              {nfts.map((nft, index) => (
                <li key={index} className="nft-list-item" onClick={() => handleCertDialogClickOpen}>
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
                        <p><strong>Category:</strong> {nft.category}</p>
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
              <p>No NFTs found in this wallet.</p>
            </Grid>
          </Grid>
        )}
        </React.Fragment>
      );
    };

    const generateSuggestedCPEContent = () => {
      setSuggestedCPEContent(

      );
    };

    const generateUploadContent = () => {
      setUploadCertificatesContent(
        <React.Fragment>
          <Grid container spacing={2}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Paper elevation={3} sx={{
                        boxShadow: '-20px 0 30px rgba(0, 184, 241, 0.2), 0 0 100px rgba(0, 184, 241, 0.3)',
                        }}>
                <FormGroup>
                  <TextField id="outlined-basic" label="Course Title" variant="outlined" sx={{margin: '10px'}}/>
                  <TextField id="outlined-basic" label="Course Category" variant="outlined"  sx={{margin: '10px'}}/>
                  <TextField id="outlined-basic" label="Course Sub-Category" variant="outlined"  sx={{margin: '10px'}}/>
                  <TextField id="outlined-basic" label="CPE Issuer" variant="outlined"  sx={{margin: '10px'}}/>
                  <TextField id="outlined-basic" label="Date Issued" variant="outlined"  sx={{margin: '10px'}}/>
                  <TextField id="outlined-basic" label="Date Created" variant="outlined"  sx={{margin: '10px'}}/>
                  <TextField id="outlined-basic" label="Hours" variant="outlined"  sx={{margin: '10px'}}/>
                  <TextField id="outlined-basic" label="Select File" variant="outlined"  sx={{margin: '10px'}}/>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{margin: '10px', width: '50%'}}
                    >
                    Upload                  
                  </Button>
                </FormGroup>
              </Paper>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Paper elevation={3} sx={{
                        boxShadow: '-20px 0 30px rgba(0, 184, 241, 0.2), 0 0 100px rgba(0, 184, 241, 0.3)',
                        }}>
                <CertificatesInDb />
              </Paper>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </React.Fragment>
      )
    }

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
              category: "Utah Laws and Rules",
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

      const handleCertViewSwitchChange = (event) => {
          setIsListView((prevState) => !prevState);
      };
    
      const toggleNFTExpansion = (index) => {
        setExpandedNFT(expandedNFT === index ? null : index);
      };
    
      // Calculate total CPE hours
      const getTotalCPEHours = () => {
        //return nfts.reduce((total, nft) => total + nft.cpeHours, 0);
        return nfts.reduce((sum, item) => sum + item.cpeHours, 0);
      };

      const calculateHoursForCategory =  (category) => {
        
        return nfts
            .filter((nft) => nft.category === category)
            .reduce((sum, nft) => sum + (nft.cpeHours || 0), 0);
      };

      const dialogStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Box  
      sx={{ 
        width: '100%',
        maxWidth: '1600px', // Ensures content is centered within a reasonable width
        margin: '0 auto', // Centers the Box
        paddingX: '20px', // Adds horizontal spacing
        boxSizing: 'border-box', // Ensures padding doesn't push content out
      }}
    >
            <Grid container spacing={2}
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',}}>
              <Grid item xs={7} sm={7} style={{ display: 'flex', alignItems: 'left' }}>
                <Typography variant="h3"
                    sx={{ 
                      color: theme.palette.primary.contrastText, 
                      fontFamily: 'Montserrat',
                      fontWeight: 'bold',       
                      padding: '10px',             
                    }}>CPE Certificate Dashboard</Typography>
              </Grid>
              <Grid item xs={5} sm={5} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div className="wallet-container">
                  <CoinBaseButton onClick={handleCoinBaseConnect}>
                    {isConnectedCoinBase ? 'Wallet Connected' : 'Connect Wallet'}
                  </CoinBaseButton>
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
                <Grid>              
                  <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'right',  paddingRight: '17px'}}>
                    <button className="btn btn-refresh" onClick={refreshNFTs} disabled={loading} style={{backgroundColor: theme.palette.primary.main, color: 'white'}}>
                      {loading ? 'Refreshing...' : 'Refresh NFTs'}
                    </button>
                  </Grid>
                </Grid>
                <Divider variant="middle" sx={{ 
                  width: '100%',
                  margin: '10px auto', 
                  borderWidth: '2px',
                  borderColor: theme.palette.primary.contrastText,
                  backgroundColor: theme.palette.primary.main,
                }} />
                <DashTabs 
                tabContents={[
                  progressContent,
                  certificatesContent,
                  suggestedCPEContent,
                  uploadCertificatesContent,
                ]}/>
              </>
              ) : (
                <>
                  <Grid container spacing={2} style={{ padding: '20px' }}>
                    <Grid item xs={12} sm={12}>
                      <p>Please connect your MetaMask wallet.</p>
                    </Grid>
                  </Grid>
                </>
            )}
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;