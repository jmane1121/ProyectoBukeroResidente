import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import dudi from '../img/dudi.jpeg'

export const DudiCom = () => {
    const divespacio ={
        alignItems: 'center',
        marginLeft: '1.5rem'
      };
  return (
        <Grid>
             <Card sx={{ 
                    maxWidth: 345, 
                    height: 330,
                    width: 295,
                    backgroundColor: 'blue', 
                    borderRadius: '10px', 
                    boxShadow: '0px 3px 6px rgba(0, 0, 10, 10)' 
                    }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    image={dudi}
                    height= '255'
                    alt="green iguana"
                    />
                <CardContent sx={{backgroundColor: 'aliceblue', alignItems: 'center', flexGrow: 1}}> 
                    <Button color="inherit" 
                            style={divespacio} 
                            sx={{ backgroundColor: 'lightblue', 
                                  color: 'black', 
                                  borderRadius: '8px', 
                                  padding: '10px 20px', 
                                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'}}>
                            Bukets
                    </Button>
                    <Button color="inherit" 
                            style={divespacio} 
                            sx={{ backgroundColor: 'lightblue', 
                                  color: 'black', 
                                  borderRadius: '8px', 
                                  padding: '10px 20px', 
                                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}>
                            Tienda
                    </Button>
                </CardContent>
             </CardActionArea>
            </Card>
        </Grid>
  )
}

export default DudiCom