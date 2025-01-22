import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import UserImg from '../assets/JoeAccountant.jpg';


export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuSelectNavigate = (path) => {
    navigate(path);  // Navigate to the provided path
    handleClose();    // Close the menu after clicking
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
            width: '50px', // Set the width to your desired size
            height: '50px', // Set the height to match the width
            borderRadius: '50%', // This makes the button circular
            minWidth: '0', // Optional: Remove minimum width to avoid extra padding
            padding: '0', // Optional: Remove padding to ensure perfect circle
            backgroundColor: 'primary.main', // Optional: Set the background color
            fontSize: '10px', // Optional: Increase the font size
            color: 'white', // Optional: Set the text color
          }}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={() => menuSelectNavigate('/public-view/account')}>My Public View</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
