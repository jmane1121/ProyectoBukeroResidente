import React from 'react'
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CardContent, ListItemButton, ListSubheader, Typography } from '@mui/material';
import CycloneIcon from '@mui/icons-material/Cyclone';
import Paper from '@mui/material/Paper';
import naruto from '../img/Naruto.jpg'
import {CardMedia, Card, CardActionArea} from '@mui/material';


export const Miniatura = () => {
    const [open, setOpen] = React.useState(true);
    const handleClick = () =>{
        setOpen(!open);
    };
  return (
    <List
        sx={{
                width: '100%', 
                maxWidth: 345, 
                bgcolor: 'Background.paper',
                backgroundColo: 'blue', 
                borderRadius: '10px', 
                boxShadow: '0px 3px 6px rgba(0, 0, 10, 10)' 
            }}
        component= "nav"
        aria-labelledby='nested-list-subheader'
        subheader={
            <Paper elevation={5} style={{borderRadius: '10px', marginTop: '.5rem'}}>
                <ListSubheader component="div" id="nested-list-subjeader" style={{borderRadius: '10px', marginTop: '.5rem', backgroundColor: 'lightcyan'}} >
                    <Typography variant='h4' component="h5" style={{textAlign: 'center', color: 'black'}}>
                        Capitulos
                    </Typography>
                </ListSubheader>
            </Paper>
        }
    >
        <Paper elevation={5} style={{borderRadius: '10px', marginTop: '.5rem', backgroundColor: 'rgba(248, 232, 247, 0.8)'}}>
            <ListItemButton 
                sx={{
                    borderBottom: '2px solid purple',
                    height: 'Auto',
                    boxShadow: '0px, 2px, 5px, rgba(0, 0, 0, 0.2)'
                }}>
                <Card sx={{ maxWidth: 345, height: '100%', marginLeft: '4rem', padding: '1rem'}}>
                    <div style={{}}>
                        <a href='https://www.youtube.com/watch?v=M2VBmHOYpV8&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVMIeDMnyQzS88&index=11&pp=8AUB'>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="240"
                                image={naruto}
                                alt="green iguana"
                                />
                            </CardActionArea>
                        </a>
                    </div>
                </Card>
                
            </ListItemButton>
        </Paper>
        <Paper elevation={5} style={{borderRadius: '10px', backgroundColor: 'rgba(248, 232, 247, 0.8)'}}>
            <ListItemButton
            sx={{
                borderBottom: '2px solid purple',
                height: 'Auto',
                boxShadow: '0px, 2px, 5px, rgba(0, 0, 0, 0.2)'
            }}>
                <Card sx={{ maxWidth: 345, height: '100%', marginLeft: '4rem', padding: '1rem'}}>
                    <div style={{}}>
                        <a href='https://www.youtube.com/watch?v=M2VBmHOYpV8&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVMIeDMnyQzS88&index=11&pp=8AUB'>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="240"
                                image={naruto}
                                alt="green iguana"
                                />
                            </CardActionArea>
                        </a>
                    </div>
                </Card>
            </ListItemButton>
        </Paper>
       <Paper elevation={5} style={{borderRadius: '10px', backgroundColor: 'rgba(248, 232, 247, 0.8)'}}>
        <ListItemButton
            sx={{
                borderBottom: '2px solid purple',
                height: '7rem',
                boxShadow: '0px, 2px, 5px, rgba(0, 0, 0, 0.2)'
            }}>
                <ListItemIcon>
                    <CycloneIcon/>
                </ListItemIcon>
                <ListItemText primary="Capitulo 4"/>
            </ListItemButton>
       </Paper>
        <Paper elevation={5} style={{borderRadius: '10px', backgroundColor: 'rgba(248, 232, 247, 0.8)'}}>
            <ListItemButton
            sx={{
                borderBottom: '2px solid purple',
                height: '7rem',
                boxShadow: '0px, 2px, 5px, rgba(0, 0, 0, 0.2)'
            }}>
                <ListItemIcon>
                    <CycloneIcon/>
                </ListItemIcon>
                <ListItemText primary="Capitulo 5"/>
            </ListItemButton>
        </Paper>
       <Paper elevation={5} style={{borderRadius: '10px', backgroundColor: 'rgba(248, 232, 247, 0.8)'}}>
        <ListItemButton
            sx={{
                borderBottom: '2px solid purple',
                height: '7rem',
                boxShadow: '0px, 2px, 5px, rgba(0, 0, 0, 0.2)'
            }}>
                <ListItemIcon>
                    <CycloneIcon/>
                </ListItemIcon>
                <ListItemText primary="Capitulo 6"/>
            </ListItemButton>
       </Paper>
    </List>
  );
}

export default Miniatura