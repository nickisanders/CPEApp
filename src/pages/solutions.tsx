import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import theme from '../theme'; 
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import CertificatePNG from '../assets/Solutions_Certificate.png';
import Dashboard from '../assets/Dashboard_Image.png';
import Compliance from '../assets/Compliance.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 250 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 }, // Start lower on the page
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut"} 
  },
};

const slideUpWithDelay = {
  hidden: { opacity: 0, y: 50 }, // Start lower on the page
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut", delay: 0.75, } 
  },
};

const Solutions = () => {
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
            
                <Typography variant="h4"
                  sx={{ 
                  color: theme.palette.primary.contrastText, 
                  fontFamily: 'Montserrat',
                  fontWeight: 'bold',
                  marginBottom: '40px'          
                  }}>Solutions</Typography>
            </Grid>
              
            <Grid item xs={12} sm={12}>
                <Typography 
                  variant="h6" 
                  component="div"
                  sx={{ 
                    color: theme.palette.primary.contrastText, 
                    fontFamily: 'Montserrat',
                    marginBottom: '80px'          
                    }}>
                    <p>
                    It all starts with your <span style={{ color: theme.palette.primary.contrastText, fontWeight: 'bold'}}>wallet</span>. The place where your certificates will live, forever. 
                    </p>
                    <p>Setting up your wallet is <span style={{ color: theme.palette.primary.contrastText, fontWeight: 'bold'}}>simple</span>. In fact, its as easy as creating a profile. Just <span style={{ color: theme.palette.primary.contrastText, fontWeight: 'bold'}}>enter the following</span> and you’re done:</p>
                    <ul style={{ marginBottom: '65px'}}>
                      <li><p>Your name</p></li>
                      <li><p>Email address </p></li>
                      <li><p>The state where you are licensed</p></li>
                    </ul>
                    <p>That’s it. <span style={{ color: theme.palette.primary.contrastText, fontWeight: 'bold'}}>Seriously</span>.</p>
                    <p>And don’t worry if you’re not crypto savvy. You don’t need to be. <span style={{ color: theme.palette.primary.contrastText, fontWeight: 'bold'}}>CPE Wallet</span> takes care of everything needed to tokenize your certificates. </p>
                    <p>Keep scrolling to see how you can <span style={{ color: theme.palette.primary.contrastText, fontWeight: 'bold'}}>benefit</span> from all of the solutions we offer:</p>
                    <p></p>
                    
                    
                </Typography>
            </Grid>

            <section>
            
            {/* <motion.div */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={slideUpWithDelay}
                >
            <Grid item xs={12} sm={6}>
              
                <Typography variant="h5"
                sx={{ 
                  color: theme.palette.primary.contrastText, 
                  fontFamily: 'Montserrat',
                  fontWeight: 'bold',      
                  }}>
                    Certificate Management
                </Typography> 
                        
            </Grid>
            <Grid item xs={12} sm={12}>
              <Divider sx={{ 
                    borderColor: theme.palette.primary.contrastText,
                    backgroundColor: theme.palette.primary.contrastText,
                    marginBottom: '15px'}}></Divider>       
            </Grid>
            <Grid container spacing={6}  sx={{marginBottom: '100px'}}>
              <Grid item xs={12} md={6}
              sx={{ 
                color: theme.palette.primary.contrastText, 
                fontFamily: 'Montserrat' 
                }}>
                    <p>CPE certificates are automatically “tokenized”, put on the blockchain, and into your wallet. </p>
                    <p>You can avoid downloading PDFs, waiting for emailed certificates, and wondering if you have them all.</p>
                    <p>Certificates are stored in your wallet, and are easily accessible, forever. </p>
                  
              </Grid>
              
              <Grid item xs={12} md={6}>
              <img 
                  src={CertificatePNG} 
                  alt="A generic CPE ceretificate" 
                  aria-hidden="true" 
                  style={{ 
                    width: '100%', 
                    zIndex: 1, 
                    maxWidth: '900px', // Prevent it from getting too large
                    //paddingLeft: '105px' 
                  }}
                />
              </Grid>
            </Grid>            
            {/* </motion.div> */}
            </motion.section>
            </section>        
            
            <section>
            {/* <motion.div */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={slideUp}
                >
            <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                <Typography variant="h5"
                sx={{ 
                  color: theme.palette.primary.contrastText, 
                  fontFamily: 'Montserrat',
                  fontWeight: 'bold',     
                  }}>
                    Dashboard
                </Typography>           
                   
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ 
                      borderColor: theme.palette.primary.contrastText,
                      backgroundColor: theme.palette.primary.contrastText,
                      marginBottom: '15px'}}></Divider>    
            </Grid>
            <Grid item xs={12} md={6}>
            <Divider sx={{ 
                  color: theme.palette.primary.contrastText,}}></Divider>
            </Grid>
            <Grid container spacing={6}  sx={{marginBottom: '100px'}}>
            <Grid item xs={12} md={6}>
              <img 
                  src={Dashboard} 
                  alt="A generic CPE ceretificate" 
                  aria-hidden="true" 
                  style={{ 
                    width: '100%', 
                    zIndex: 1, 
                    maxWidth: '900px', // Prevent it from getting too large
                    //paddingLeft: '105px' 
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}
              sx={{ 
                color: theme.palette.primary.contrastText, 
                fontFamily: 'Montserrat',
                marginBottom: '80px',
                paddingLeft: '100px' 
                }}>
                <p>Have enough credits in required areas?</p>
                <p>Quickly know your CPE status in the current reporting period. </p>
                <p>Your state board determines what credits are required, and your CPE Wallet dashboard automatically updates with each credit earned. </p>
                <p>Your dashboard displays your progress at a glance. </p>
              </Grid>
              
            </Grid>
            {/* </motion.div> */}
            </motion.section>
            </section>
            
            <section>
            {/* <motion.div */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={slideUp}
                >
            <Grid item xs={12} sm={6}>
                <Typography variant="h5"
                sx={{ 
                  color: theme.palette.primary.contrastText, 
                  fontFamily: 'Montserrat',
                  fontWeight: 'bold'         
                  }}>
                    State Compliance
                </Typography>         
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ 
                      borderColor: theme.palette.primary.contrastText,
                      backgroundColor: theme.palette.primary.contrastText,
                      marginBottom: '15px'}}></Divider>    
            </Grid>
            <Grid container spacing={6} sx={{marginBottom: '100px'}}>
              <Grid item xs={12} md={6}
              sx={{ 
                color: theme.palette.primary.contrastText, 
                fontFamily: 'Montserrat',
                marginBottom: '30px'          
                }}>
                <p>It takes time and can be cumbersome to ensure your state reporting is complete. Well, not anymore.  </p>
                <p>CPE Wallet handles that too. </p>
                <p>Use your free time to play with puppies, buy a goldfish, or bake a casserole.</p>
                <p>We don’t know what you’ll do with your new free time, but we know you’ll be doing it with a smile. </p>
              </Grid>
              <Grid item xs={12} md={6}>
              <img 
                  src={Compliance} 
                  alt="A generic CPE ceretificate" 
                  aria-hidden="true" 
                  style={{ 
                    width: '100%', 
                    zIndex: 1, 
                    maxWidth: '900px', // Prevent it from getting too large
                    //paddingLeft: '105px' 
                  }}
                />
              </Grid>
            </Grid>
            {/* </motion.div> */}
            </motion.section>
            </section>
        </Grid>
      </Box>
    </div>
    </ThemeProvider>
  );
}

export default Solutions;