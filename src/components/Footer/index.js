import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import logo from "../../assets/logo/logo.png";
import foodara from "../../assets/icons/foodara.jpeg";
import facebook from "../../assets/icons/facebook-app-logo.svg";
import tripAdvisor from "../../assets/icons/tripadvisor.jpg"
import wolt from "../../assets/icons/wolt_logo.png"

const Footer = () => {
  const classes = useFooter();
  return (
    <>
      <Container maxWidth={false} className={classes.footerContainer}>
        <Grid container spacing={3} justify={"center"}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <img src={logo} alt="" />
          </Grid>
          <Grid item sm={12} md={3} lg={3}>
            <Typography component="h1" variant="h6">
              QUICK LINKS
            </Typography>
            <Link to="/">
              <ListItemText primary="HOME" />
            </Link>
            <Link to="/menu">
              <ListItemText primary="MENU" />
            </Link>
            <Link to="/gallery">
              <ListItemText primary="GALLERY" />
            </Link>
            <Link to="/reservation">
              <ListItemText primary="RESERVATION" />
            </Link>
            <Link to="/contact">
              <ListItemText primary="CONTACT" />
            </Link>
          </Grid>
          <Grid item sm={12} md={3} lg={3}>
            <Typography component="h1" variant="h6">
              OPENING HOURS
            </Typography>
            <ListItemText primary="MO: 10.30 – 15.00" />
            <ListItemText primary="TU-FR: 10.30 – 22.00" />
            <ListItemText primary="SA: 12.00 – 22.00" />
            <ListItemText primary="SU: 12.00 – 21.00" /> <br />
            <ListItemText primary="LUNCH MO-FR: 10.30 – 15.00" />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography component="h1" variant="h6">
              CONNECT
            </Typography>
            <div className={classes.socialIcon} style={{display: 'flex', flexDirection: 'column'}}>
              <a
                href="https://www.foodora.fi/en/restaurant/s4kj/ehta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={foodara} alt={"foodara"} width={"70px"} height={"50px"}/>
              </a>

              <a
                href="https://www.facebook.com/Shubhakamana2014/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt={"facebook"} width={"70px"} height={"50px"}/>
              </a>

              <a
                href="https://www.tripadvisor.fi/Restaurant_Review-g189934-d6774553-Reviews-Shubha_Kamana-Helsinki_Uusimaa.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tripAdvisor} alt={"tripAdvisor"} width={"70px"} height={"30px"}/>
              </a>

               <a
                 href="https://www.facebook.com/Shubhakamana2014/"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                <img src={wolt} alt={"wolt"} width={"70px"} height={"50px"} style={{marginTop: 10}}/>
              </a>

            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const useFooter = makeStyles((theme) => ({
  footerContainer: {
    padding: "30px",
    background: "#262626",
    textAlign: "center",
    "& .MuiTypography-h6": {
      fontSize: "16px",
      color: "#d8d8d899",
      fontWeight: 700,
      letterSpacing: "0.5px",
      "& a": {
        color: "#d8d8d899",
        textDecoration: "none",
      },
    },
    "& .MuiListItemText-primary": {
      color: "#8f8f8f",
      textDecoration: "none",
    },
    "& a": {
      color: "#d8d8d899",
      textDecoration: "none",
    },
  },
  socialIcon: {
    margin: theme.spacing(4),
  },
}));

export default Footer;
