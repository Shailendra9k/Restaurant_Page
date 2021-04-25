import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import StyledButton from "./StyledButton";
import { font } from "../util/globalTheme";

const useImageCard = makeStyles((theme) => ({
  cardMediaWrapper: {
    width: "100%",
    height: "80vh",
  },

  cardOverLay: {
    position: "relative",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.6)",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  textStyle: {
    color: "white",
    zIndex: 5,
    letterSpacing: "3px",
    [theme.breakpoints.down("xs")]: {
      fontSize: `${font.font_md}`,
      marginTop: '-3rem',
    },
  },

  textStyleSmall: {
    color: "white",
    zIndex: 5,
    letterSpacing: "3px",
    [theme.breakpoints.down("xs")]: {
      fontSize: `${font.font_regular}`,
    },
  },

  buttonStyle: {
    display: "flex",
    gap: 10,
    marginTop: "1rem",
    width: "15%",
    [theme.breakpoints.down("sm")]: {
      width: "25%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "40%",
    },
  },
}));

const ImageSliderCard = ({...item}) => {
  const {title, imgSrc} = item;
  const classes = useImageCard();
  return (
    <>
      <Card style={{borderRadius: '0', position: 'relative'}}>
        <CardMedia
          className={classes.cardMediaWrapper}
          image={`${imgSrc}`}
        >
          <div className={classes.cardOverLay}>
            <Typography variant="h2" className={classes.textStyle}>{title}</Typography>
            <Typography variant="h5" style={{marginTop: '1rem'}} className={classes.textStyleSmall}>
              Nepalese Cuisine & Asian Kitchen</Typography>
            <div className={classes.buttonStyle}>
              <StyledButton text="See Menu" />
            </div>
          </div>
        </CardMedia>
      </Card>
    </>
  );
};

export default ImageSliderCard;
