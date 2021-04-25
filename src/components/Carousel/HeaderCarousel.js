import {makeStyles} from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import sliderImg1 from "../../assets/slider/Deli_Rasoi_slider_1.jpg";
import sliderImg2 from "../../assets/slider/Deli_Rasoi_slider_2.jpg";
import sliderImg3 from "../../assets/slider/Deli_Rasoi_slider_3.jpg";
import ImageSliderCard from "../../resuableComponent/ImageSliderCard";

const useCarousel = makeStyles((theme) => ({
  carousel: {
    display: 'block',
    boxSizing: 'border-box',

    "& img": {
      height: "80vh",
      width: "100%",
    },

    "& .slick-arrow": {
      width: "45px",
      height: "45px",
      background: "#e2c5c57a",
      zIndex: 1,
    },

    "& .slick-next": {
      right: "0px",
      borderRadius: "5px 0px 0px 5px",
    },
    "& .slick-prev": {
      left: "0px",
      borderRadius: "0px 5px 5px 0px",
    },
  },
}));

const imageSlider = [
  {id: 1, title: 'The best taste in Helsinki ', imgSrc: sliderImg1},
  {id: 2, title: 'Small place with a big heart ❤️', imgSrc: sliderImg2},
  {id: 3, title: 'Shubha Kamana', imgSrc: sliderImg3},
  // {id: 4, title: '4', imgSrc: sliderImg4},
  // {id: 5, title: '5', imgSrc: sliderImg5},
  // {id: 6, title: '6', imgSrc: sliderImg6},
  // {id: 7, title: '7', imgSrc: sliderImg7},
  // {id: 8, title: '8', imgSrc: sliderImg8},
];

const HeaderCarousel = (props) => {
  const classes = useCarousel();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };


  return (
    <>
      <div className={classes.carousel}>
        <Slider {...settings}>
          {imageSlider.map((item, index) => (
            <div key={index}>
              <ImageSliderCard {...item}/>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};


export default HeaderCarousel;
