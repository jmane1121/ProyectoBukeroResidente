import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import dudi from '../img/dudi.jpeg'
import naruto from '../img/Naruto.jpg'

export const Carrusel = () => {
    const estiloCarrusel = {
        width: '40rem', 
        float: 'right',  
        marginRight: '20px',  
    };
  return (
    <div style={estiloCarrusel}>
        <Carousel style={{ height: '10rem' }}>
            <div>
                <img src={dudi} alt="El dudi" />
                <p className="legend">Dudi al rescate</p>
            </div>
            <div>
                <img src={naruto} alt="Naruto" />
                <p className="legend">Naruto</p>
            </div>
            {/* Agrega más imágenes y leyendas según sea necesario */}
        </Carousel>
    </div>
  );
}

export default Carrusel;
