import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit">
          <ArrowBackIcon fontSize="large"/>
        </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            <HomeIcon fontSize="large"/>
        </Typography>
        <Button color="inherit">
            <ArrowForwardIcon fontSize="large"/>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;