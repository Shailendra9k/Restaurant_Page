import React from "react";
import {makeStyles} from "@material-ui/core";
import Slider from "react-slick";

import avatar1 from '../../assets/avatar/avatar1.jpg';
import TestomonialCard from "../../resuableComponent/TestomonialCard";

const useCarousel = makeStyles((theme) => ({
  carousel: {
    position: 'relative',
    display: 'block',
    boxSizing: 'border-box',

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


const testomonialDetails = [
  {
    id: 1,
    description: 'A case study testimonial is more in-depth than other types of testimonials.' +
      ' These types of testimonials are ideal for businesses with products or services that' +
      ' require extensive investment.',
    name: 'Aadarsh',
    designation: 'Software Engineer',
    avatarSrc: avatar1,
  },
  {
    id: 2,
    description: 'A case study testimonial is more in-depth than other types of testimonials.' +
      ' These types of testimonials are ideal for businesses with products or services that' +
      ' require extensive investment.',
    name: 'sandeep',
    designation: 'Software Engineer',
    avatarSrc: avatar1,
  },
  {
    id: 3,
    description: 'A case study testimonial is more in-depth than other types of testimonials.' +
      ' These types of testimonials are ideal for businesses with products or services that' +
      ' require extensive investment.',
    name: 'Lorem',
    designation: 'Software Engineer',
    avatarSrc: avatar1,
  },
  {
    id: 4,
    description: 'A case study testimonial is more in-depth than other types of testimonials.' +
      ' These types of testimonials are ideal for businesses with products or services that' +
      ' require extensive investment.',
    name: 'Lorem',
    designation: 'Software Engineer',
    avatarSrc: avatar1,
  },
  {
    id: 5,
    description: 'A case study testimonial is more in-depth than other types of testimonials.' +
      ' These types of testimonials are ideal for businesses with products or services that' +
      ' require extensive investment.',
    name: 'Lorem',
    designation: 'Software Engineer',
    avatarSrc: avatar1,
  },
];

const CustomerCarousel = (props) => {
  const classes = useCarousel();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,

        }
      },
    ]
  };


  return (
    <>
      <div className={classes.carousel}>
        <Slider {...settings}>
          {testomonialDetails.map((item, index) => (
            <div key={index}>
              <TestomonialCard {...item}/>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};


export default CustomerCarousel;