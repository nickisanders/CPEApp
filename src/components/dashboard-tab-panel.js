import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'; 

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ tabContents }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
        sx={{
            '& .MuiTab-root': { color: theme.palette.primary.contrastText }, // Default text color
            '& .Mui-selected': { color: theme.palette.primary.contrastText, fontWeight: 'bold' }, // Selected tab color
            '& .MuiTabs-indicator': { backgroundColor: theme.palette.primary.contrastText } // Indicator color
          }}>
          <Tab label="Progress" {...a11yProps(0)} />
          <Tab label="Certificates" {...a11yProps(1)} />
          <Tab label="Suggested CPE" {...a11yProps(2)} />
          <Tab label="Upload Certificate" {...a11yProps(3)} />
        </Tabs>
      </Box>
      {tabContents.map((content, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {content}
        </CustomTabPanel>
      ))}
    </Box>
    </ThemeProvider>
  );
}
