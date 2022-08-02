import React from "react";
import {Carousel} from 'react-bootstrap';

import './DrinkDisplay.css';

export default function DrinkDisplay() {
  return (
    
    <Carousel className="container" variant="light">
      <style type='text/css'>
      {`
        .carousel-inner{
          margin: 0 auto;
          height: 150px;
          width: 500px;
        }
        .img{
          justify-content: center;
        }
      `}
    </style>
      <Carousel.Item className="item">
        <img 
          className="carouselImg"
          src="https://assets.betalabs.net/fit-in/600x600/production/bramble/item-images/148540579c442262e04a8beddb6a27ec.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Boulevardier</h5>
          <p>Delciosa variação do Negroni com Bourbon.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img
          className="carouselImg"
          src="http://mixologynews.com.br/wp-content/uploads/2012/01/dry-martini-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Dry Martini</h5>
          <p>Clássico drink a base de Gin.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img
          className="carouselImg"
          src="https://drinkoteket.com/wp-content/uploads/old-fashioned.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Old Fashioned</h5>
          <p>Bourbon como base e leve presença de Angostura.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}