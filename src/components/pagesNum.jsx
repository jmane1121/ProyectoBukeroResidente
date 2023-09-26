import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export const PagesNum = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Button color="inherit">Anterior</Button>
        <div style={{ flexGrow: 1 }}></div>
        <Button color="inherit">Home</Button>
        <div style={{ flexGrow: 1 }}></div>
        <Button color="inherit">Siguiente</Button>
        <div style={{ flexGrow: 1 }}></div>
        <Button color="inherit">MV</Button>
        <div style={{ flexGrow: 1 }}></div>
        <Button color="inherit">PC</Button>
      </Toolbar>
    </AppBar>
  );
}

export default PagesNum