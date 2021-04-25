import { makeStyles } from "@material-ui/core";
import React from "react";

const Banner = (props) => {
  const { text, background } = props;
  const classes = useBanner();

  return (
    <div
      className={classes.root}
      style={{ background: `url(${background})`, backgroundPosition: "center" }}
    >
      <div className="content">{text}</div>
    </div>
  );
};

const useBanner = makeStyles((theme) => ({
  root: {
    height: "25vh",
    "& .content": {
      display: "flex",
      background: "#000000ad",
      width: "100%",
      height: "100%",
      color: "white",
      justifyContent: "center",
      alignItems: "center",
      fontSize: theme.spacing(6),
      textDecoration: "underline",
      textTransform: 'uppercase'
    },
  },
}));

export default Banner;
