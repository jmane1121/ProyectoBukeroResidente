import React from 'react';
import {Navbar} from './navbar';
import {PagesNum} from './pagesNum';
import {Chapter} from './chapter';
import {DudiCom} from './dudiCom';
import {Carrusel} from './carrusel';
import {Miniatura} from './miniatura';
import {Footer} from './footerLogos';
import { Pagination } from '@mui/material';


export const App = () => {
  const estructuraEpisodio = {
    display: 'flex',
    justifyContent: 'left',
    height: '10px',
    marginLeft: '1rem',
    flexDirection: 'column'
  };
  const estructuraListaVer = {
    marginTop: '2rem'
  };
  const estructuraDudi = {
    display: 'flex',
    justifyContent: 'right',
    height: '10px',
    marginRight: '1.8rem',
  };
  const estructuraDer = {
    display: 'flex',
    flexDirection: 'column',
  };
  const divespacio ={
    marginTop: '30px',
    alignItems: 'center'
  };
  const divCarrusel = {
    marginTop: '25rem',
    display: 'flex',
    width: '20rem',
    height: '35rem',
    marginLeft: '98rem'
  }
  return (
    <>
        <Navbar/>
        <PagesNum/>
        <div style={estructuraEpisodio} > 
          <div style={divespacio}>
              <Chapter/>
          </div>
          <div style={estructuraListaVer}>
            <Miniatura/>
          </div>
        </div>
        <div style={estructuraDer}>
          <div style={estructuraDudi}>
            <div style={divespacio}>
              <DudiCom/>
            </div>
          </div>
          <div style={divCarrusel}>
              <Carrusel/>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <Pagination count={10} color="secondary" style={{marginLeft: '50rem'}}/>
        <div style={{marginTop: '6rem'}}>
          <Footer/>
        </div>
    </>
  );
}

export default App;