import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Slider.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    customPaging: function (i) {
      return (
        <div className="custom-dot"></div> 
      );
    },
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        <div className="slide">
          <img src="/assets/img/slider/1.jpg" alt="Slider Image 1" />
        </div>
        <div className="slide">
          <img src="/assets/img/slider/2.jpg" alt="Slider Image 2" />
        </div>
        <div className="slide">
          <img src="/assets/img/slider/3.jpg" alt="Slider Image 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
