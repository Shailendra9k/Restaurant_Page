import { makeStyles } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import sliderImg1 from "../../assets/slider/Deli_Rasoi_slider_1.jpg";
import sliderImg2 from "../../assets/slider/Deli_Rasoi_slider_2.jpg";
import sliderImg3 from "../../assets/slider/Deli_Rasoi_slider_3.jpg";
import sliderImg4 from "../../assets/slider/Deli_Rasoi_slider_4.jpg";
import sliderImg5 from "../../assets/slider/Deli_Rasoi_slider_5.jpg";
import sliderImg6 from "../../assets/slider/Deli_Rasoi_slider_6.jpg";
import sliderImg7 from "../../assets/slider/Deli_Rasoi_slider_7.jpg";
import sliderImg8 from "../../assets/slider/Deli_Rasoi_slider_8.jpg";

const Carousel = (props) => {
  const classes = useCarousel();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={classes.carousel}>
        <Slider {...settings}>
          <div>
            <img src={sliderImg1} alt="logo" />
          </div>
          <div>
            <img src={sliderImg2} alt="logo" />
          </div>
          <div>
            <img src={sliderImg3} alt="logo" />
          </div>
          <div>
            <img src={sliderImg4} alt="logo" />
          </div>
          <div>
            <img src={sliderImg5} alt="logo" />
          </div>
          <div>
            <img src={sliderImg6} alt="logo" />
          </div>
          <div>
            <img src={sliderImg7} alt="logo" />
          </div>
          <div>
            <img src={sliderImg8} alt="logo" />
          </div>
        </Slider>
      </div>
    </>
  );
};

const useCarousel = makeStyles((theme) => ({
  carousel: {
    "& img": {
      height: "300px",
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
    },
    "& .slick-arrow": {
      width: "45px",
      height: "45px",
      background: "#e2c5c57a",
      zIndex: 9999,
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

export default Carousel;
