import { makeStyles } from "@material-ui/core";
import React from "react";
import { Parallax as ReactParallax } from "react-parallax";

const Parallax = (props) => {
  const classes = useParallax();
  const { blur, children, image, imageAlt } = props;
  return (
    <>
      <div className={classes.parallaxContainer}>
        <ReactParallax
          blur={blur}
          bgImage={image}
          bgImageAlt={imageAlt}
          strength={200}
        >
          {children}
        </ReactParallax>
      </div>
    </>
  );
};

const useParallax = makeStyles((theme) => ({
  parallaxContainer: {
    "& .react-parallax": {
      height: "550px",
    },
    "& .react-parallax-bgimage": {
      width: "100%",
      position: "absolute",
      top: "-40%",
    },
  },
}));

export default Parallax;
