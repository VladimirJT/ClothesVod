import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imagenesCarrusel from './imagenesCarrusel';
import styled from '@emotion/styled';
import './carrusel.css'

//import { Carousel } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Carrusel() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, //Muestra la cantidad de imágenes de una vez
        slidesToScroll: 1
    };
    return (
        <div className='container-fluid border'>

            <Slider {...settings}>

                {imagenesCarrusel.map(items => {
                    return (
                        <div key={items.id}  >
                            <img className='imagen'src={items.image} alt='Imagen' />
                        </div>
                    )
                })}

            </Slider>
        </div>



    )
    /*  return (
         <Carousel interval={500}>
             <Carousel.Item>
                 {imagenesCarrusel.map(items => {
                     return (<img className='imgCarrusel' src={items.image} alt='Imagen'/>)
                 })}
             </Carousel.Item>
         </Carousel>
     ) */

}

export default Carrusel