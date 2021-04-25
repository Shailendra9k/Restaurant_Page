import { makeStyles } from "@material-ui/core";
import React from "react";

const FoodItem = (props) => {
  const { title, price, description } = props;
  const classes = useFoodItem();
  return (
    <div>
      <div className={classes.root}>
        <div className="header">
          <h2>{title}</h2>
          <h2>{price}€</h2>
        </div>
        <div className="content">
          {/* <img src={image} alt={title} /> */}
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const useFoodItem = makeStyles((theme) => ({
  root: {
    "& .header": {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "2px solid #80808029",
      fontSize: "15px",
    },
    "& .content": {
      display: "flex",
      fontSize: theme.spacing(2),
      letterSpacing: theme.spacing(0.1),
      marginTop: theme.spacing(2),
      fontWeight: 500,
      "& img": {
        marginRight: theme.spacing(2),
        height: "100px",
        width: "100px",
        borderRadius: "50%",
      },
    },
  },
}));

export default FoodItem;
