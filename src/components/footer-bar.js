import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid2';
import theme from '../theme';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

export default function FooterBar() {
  return (
    <React.Fragment>      
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, backgroundColor: theme.palette.background.default, paddingLeft: '25px'}} elevation={0}>
        <Grid container spacing={2}> 
            <Grid item xs={5}>
                <Typography
                    sx={{
                        paddingBottom: '8px',
                        //fontWeight: 'bold',
                        fontFamily: 'Montserrat',
                    }}>
                    CPE WALLET
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Typography
                    sx={{
                        paddingBottom: '8px',
                    }}>
                    |
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography
                    variant="body1"
                    sx={{
                        paddingBottom: '8px',
                        fontFamily: 'Montserrat',
                    }}>
                    Continuing Professional Education Management
                </Typography>
            </Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
}