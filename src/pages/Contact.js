import React from "react";
import Banner from "../components/Banner/Banner";
import ContactImage from "../assets/images/menu.jpg";
import ContactForm from "../components/Contact/ContactForm";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Address from "../assets/icons/address.png";

import { Paper, Typography } from "@material-ui/core";
const Contact = () => {
  const classes = useContactStyles();
  return (
    <>
      <Banner background={ContactImage} text="Contact Us" />
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3} style={{ marginBottom: "50px" }}>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <img src={Address} alt="A-LA CARTE" />
              <Typography component="p">ADDRESS</Typography>
              <a
                href="https://goo.gl/maps/tjXeSiEccZ28jHqq9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  Dagmarinkatu 5 <br />
                  00100 Helsinki
                </span>
              </a>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <img
                src="https://img.icons8.com/cute-clipart/64/000000/phone-ringing.png"
                alt={""}
              />
              <Typography component="div">CONTACT</Typography>
              <span>
                <a href="tel:+09 4289 3017">09 4289 3017</a> <br />
                <a href="mailto: aryalbhola31@gmail.com">
                  aryalbhola31@gmail.com
                </a>
              </span>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <img
                src="https://img.icons8.com/plasticine/100/000000/clock-alert.png"
                alt={""}
                style={{ width: "64px" }}
              />
              <Typography component="div">OPENING</Typography>
              <span style={{ color: "#908f8f" }}>
                MO: 10.30 – 15.00, <br /> TU-FR: 10.30 – 22.00 <br /> SA: 12.00
                – 22.00 <br /> SU: 12.00 – 21.00 <br /> <br /> LUNCH MO-FR:
                10.30 – 15.00
              </span>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item md={6}>
            <ContactForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31750.92119788781!2d24.929533!3d60.173572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920a32344af921%3A0x18e4632dfdfcfe21!2sDagmarinkatu%205%2C%2000100%20Helsinki%2C%20Finland!5e0!3m2!1sen!2snp!4v1618374447211!5m2!1sen!2snp"
              title={"google maps"}
              style={{ height: "100%", width: "100%", border: "0px" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const useContactStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  paper: {
    textAlign: "center",
    height: "100%",
    padding: theme.spacing(2),
    "& .MuiTypography-root": {
      margin: theme.spacing(2),
      color: "red",
      fontWeight: "550",
      letterSpacing: "0.8px",
    },
    "& a": {
      color: "#908f8f",
      textDecoration: "none",
    },
  },
}));

export default Contact;
