import React from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { background, color, font } from "../util/globalTheme";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useTestomonialStyle = makeStyles((theme) => ({
  testomonialWrapper: {
    padding: theme.spacing(2),
    position: "relative",
    backgroundColor: `${background.nav_bg}`,
    // boxShadow: '2px 1px 16px 0 rgba(0, 0, 0, .3)',
  },

  avatarWrapper: {
    width: "7.5rem",
    height: "7.5rem",
    borderRadius: "50%",
    backgroundColor: "rgba(255 ,255, 255, 1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    marginTop: "-2%",
  },

  avatar: {
    width: "6rem",
    height: "6rem",
  },

  textWrapper: {
    position: "relative",
    padding: ".5rem",
    textAlign: "justify",
  },

  colonStyle1: {
    color: "#908f8f",
    fontSize: `${font.font_lg_1}`,
  },
  colonStyle2: {
    color: "#908f8f",
    fontSize: `${font.font_lg_1}`,
    position: "absolute",
  },

  textStyle: {
    lineHeight: "32px",
    fontSize: `${font.font_regular}`,
  },

  name: {
    fontSize: `${font.font_lg}`,
    color: "#908f8f",
    padding: ".5rem",
  },
  designation: {
    fontSize: `${font.font_sm}`,
    color: `${color.heading}`,
  },
}));

const TestomonialCard = ({ ...item }) => {
  const classes = useTestomonialStyle();
  const { description, name, designation, avatarSrc } = item;

  return (
    <>
      <Paper elevation={0} className={classes.testomonialWrapper}>
        <div className={classes.avatarWrapper}>
          <Avatar alt="Avatar 1" src={avatarSrc} className={classes.avatar} />
        </div>
        <div className={classes.textWrapper}>
          <p className={classes.textStyle}>
            <sup className={classes.colonStyle1}>"</sup>
            {description}
            <sup className={classes.colonStyle2}>"</sup>
          </p>
        </div>
        <div style={{ margin: "auto", width: "80%" }}>
          <Typography className={classes.name}>
            {name} <span className={classes.designation}>{designation}</span>
          </Typography>
        </div>
      </Paper>
    </>
  );
};

export default TestomonialCard;
