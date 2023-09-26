import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import naruto from '../img/Naruto.jpg'

export const Chapter = () => {
  return (
        <Grid>
             <Card sx={{ 
                    maxWidth: 345, 
                    height: 330,
                    backgroundColo: 'blue', 
                    borderRadius: '10px', 
                    boxShadow: '0px 3px 6px rgba(0, 0, 10, 10)' 
                    }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    image={naruto}
                    height= '220'
                    alt="green iguana"
                    />
                <CardContent sx={{backgroundColor: 'aliceblue'}}> 
                    <Typography gutterBottom variant="h5" component="div">
                        Naruto
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Capítulo 17: La muerte de gara, en este episodio se muere alguien y fin del episodio listo ya esta
                    </Typography>
                </CardContent>
             </CardActionArea>
            </Card>
        </Grid>
           
  )
}

export default Chapter