import Card from "../Card";
import deck from "../../../../data/cards";

import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

function Carousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: false,
    dots: true,
    focusOnSelect: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {deck.map((card, index) => (
          <Card
            key={index}
            img={card.imgSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
