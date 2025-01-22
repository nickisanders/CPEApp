import React from 'react';
import { useParams } from 'react-router-dom';
import LicenseImg1 from '../assets/Utah_License.jpg';
import LicenseImg2 from '../assets/Certified_Internal_Auditor_License.jpg';
import CertificateImg1 from '../assets/accounting_Certificate.jpg';
import CertificateImg2 from '../assets/Accounting-Fundamentals-Certificate.webp';
import CertificateImg3 from '../assets/accounting_certificate.webp';
import BlueLogo from '../assets/logos/blue.png';
import ColorIcon from '../assets/logos/CPE Icon.png';
import UserImg from '../assets/JoeAccountant.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppBar from './appbar';

import './public-view.css';

const PublicView = () => {
  const { userId } = useParams();

  // Placeholder for fetched data
  const userData = {
    name: 'Giuseppe Contabilista, CPA, CFP',
    photo: UserImg,
    licenses: [LicenseImg1, LicenseImg2],
    certificates: [CertificateImg1, CertificateImg2, CertificateImg3],
    description: 'Certified Public Accountant with over 20 years of experience in tax planning, financial reporting, and compliance, helping businesses and individuals optimize their financial performance and achieve their goals. I specialize in providing data-driven strategies to enhance profitability, mitigate risks, and ensure long-term stability. With a strong focus on trust and transparency, I\'m passionate about delivering value through tailored solutions that streamline processes, reduce tax liabilities, and support growth opportunities. Let\'s connect to discuss how I can help you navigate your financial journey.',
  };

  return (
    <div className="background">
      {/* <img src={ColorIcon} alt="CPE Icon" className="background-icon" /> */}
      <div className="public-view" style={{ maxWidth: '1500px', margin: '0 auto', marginTop: '100px', marginBottom: '100px', position: 'relative' }}>
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
                        boxShadow: 2
                    }}>
            <Grid container spacing={4} style={{ paddingRight: '30px', paddingLeft: '30px' }}>
              <Grid item xs={12} sm={2} >
                <img src={BlueLogo} alt={ 'logo' } style={{ width: '150px'}}/>                 
              </Grid>
              <Grid item xs={12} sm={10}>
                <Typography variant="h6" component="div">
                  <h1 className='title'>Public View</h1>
                </Typography>
              </Grid>
            </Grid>            
                                 
            <Card style={{ margin: '10px auto', paddingLeft: '50px', paddingRight: '50px', paddingTop: '30px', paddingBottom: '0px', flex: 1}}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={2} >
                  <img src={userData.photo} alt={`${userData.name}'s photo` } style={{ width: '150px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '6px'}}/> 
                  <Typography
                    variant="h5"
                    sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#4A5D4A' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <h1>{userData.name}</h1>                
                    </div>              
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={10} style={{ paddingTop: '40px' }}>
                  <Typography variant="h6" component="div">
                      {userData.description}
                  </Typography>
                </Grid>
              </Grid>
            </Card>

            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span"><h2>Licenses</h2></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {userData.licenses.map((license, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <img src={license} alt={`License ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span"><h2>CPE Certificates</h2></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {userData.certificates.map((certificate, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <img src={certificate} alt={`Certificate ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>            
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default PublicView;
