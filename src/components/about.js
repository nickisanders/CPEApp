import React from 'react';
import AppBar from './appbar';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const About = () => {
  return (
    <div>
        <div className="about" style={{ maxWidth: '1500px', margin: '0 auto', marginTop: '100px', marginBottom: '100px', position: 'relative' }}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h5" component="div">
                    <h1>About CPE Wallet</h1>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Typography variant="h6" component="div">
                    <p>
                        Welcome to CPE Wallet, the ultimate solution for licensed professionals to track and manage their continuing education progress with ease and confidence. Our innovative platform leverages blockchain technology to tokenize your Continuing Professional Education (CPE) certificates as NFTs, offering unmatched security, transparency, and convenience.
                    </p>
                    <p>
                        Gone are the days of sifting through folders, emails, and paper copies to prove compliance with licensing requirements. With CPE Wallet, all your certificates are securely stored on the blockchain, providing a verifiable, tamper-proof record that’s accessible anytime, anywhere.
                    </p>
                    <p>
                        Key benefits for professionals like CPAs, lawyers, and doctors:
                    </p>
                    <ul>
                        <li><strong>Simplified Compliance:</strong> Effortlessly track your progress with dynamic dashboards showing your completion status by category and state board requirements.</li>
                        <li><strong>Immutable Records:</strong> Blockchain technology ensures your certificates are protected from loss, damage, or forgery.</li>
                        <li><strong>Effortless Sharing:</strong> Share proof of your credentials instantly with employers or licensing boards via a unique public view link.</li>
                        <li><strong>Future-Ready Solution</strong> Join the growing movement of professionals embracing secure, decentralized storage for essential records.</li>
                    </ul>
                    <p>
                        CPE Wallet empowers you to focus on what you do best—building your career—while we handle the rest. Make compliance worry-free and future-proof with the security of blockchain.
                    </p>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                
            </Grid>
        </Grid>
        </div>
    </div>
  );
}

export default About;