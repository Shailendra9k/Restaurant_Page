import React from "react";

import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import CustomerCarousel from "../Carousel/CustomerCarousel";



const Testimonial = () => {
  const classes = useTestimonial();
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Typography component="div" className={classes.Header}>
            What our customer says
          </Typography>
        </Grid>

        {/*Testomonial*/}
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div>
            <CustomerCarousel />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

const useTestimonial = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  Header: {
    textAlign: "center",
    fontWeight: 700,
    letterSpacing: "0.8px",
    fontSize: theme.spacing(4),
    margin: theme.spacing(4),
    color: "red",
    opacity: "0.6",
  },
  WelComeMessage: {
    textAlign: "justify",
  },
}));

export default Testimonial;
