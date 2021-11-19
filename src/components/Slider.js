import React from "react";
import { Carousel } from "react-bootstrap";
import "./../assets/css/slider.css";
import b1 from "./../assets/images/slider/1.jpg";
import b2 from "./../assets/images/slider/2.jpg";


const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={b1} alt="Slider Img" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={b2} alt="Second slide" />
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
};

export default Slider;
