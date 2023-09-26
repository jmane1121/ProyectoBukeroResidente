import React from 'react'
import { Container, Typography, Grid } from '@mui/material';
import du from '../img/dudi.png'
import bukero from '../img/bukero.png'
import comunicomic from '../img/comunicomic.svg'

export const Footer = () => {
    const imageStyle = {
        width: '7rem',
        height: '3rem', 
        padding: '1rem'
    }
  return (
    <footer style={{backgroundColor: '#800080', padding: '20px 0', marginTop: 'auto'}}>
        <Container maxWidth="lg" height="5rem">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="textSecondary" style={{marginLeft: '-20rem'}}>
                        ©2023 Bukero S.A.P.I. de C.V.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} style={{marginLeft: '-20rem'}}>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <img src={du} alt="dudi" style={imageStyle}/>
                        </Grid>
                        <Grid item>
                            <img src={bukero} alt="bukero" style={imageStyle}/>
                        </Grid>
                        <Grid item>
                            <img src={comunicomic} alt="comunicomic" style={imageStyle}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </footer>
  );
};

export default Footer