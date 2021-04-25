import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import StyledButton from "../../resuableComponent/StyledButton";
import logo from "../../assets/logo/logo.png";
import IconButton from "@material-ui/core/IconButton";
import {Divider, List, ListItem, ListItemText} from "@material-ui/core";
import {color} from "../../util/globalTheme";


const ResponsiveNavbar = ({ classes }) => {
  const theme = useTheme();

  //  Responsive drawer state
  const [drawer, setDrawer] = useState(false);

  //  Open responsive drawer
  const openDrawer = () => {
    setDrawer(true);
  };

  //  Close responsive drawer
  const closeDrawer = () => {
    setDrawer(false);
  };

  return (
    <>
      <nav className={classes.respNavbar}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className={classes.menuIcon}>
            <MenuIcon onClick={openDrawer} fontSize="large"/>
            <Drawer
              className={classes.drawerStyle}
              anchor="left"
              open={drawer}
              onClose={closeDrawer}>
              <div className={classes.drawerCloseStyle}>
                <IconButton onClick={closeDrawer}>
                  {theme.direction === 'ltr' && <CloseIcon fontSize="large" />}
                </IconButton>
              </div>
              <Divider />

              <div style={{backgroundColor: `${color.color_8}`, height: '100vh'}}>
                <List component="nav" aria-label="navigation">
                  <ListItem button className={classes.listItemR} >
                    <Link to="/" className={classes.menuLink}>
                      <ListItemText>Home</ListItemText>
                    </Link>
                  </ListItem>
                  <ListItem button className={classes.listItemR}>
                    <Link to="/menu" className={classes.menuLink}>
                      <ListItemText>Menu</ListItemText>
                    </Link>
                  </ListItem>
                  <ListItem button className={classes.listItemR}>
                    <Link to="/lunch" className={classes.menuLink}>
                      <ListItemText>Lunch</ListItemText>
                    </Link>
                  </ListItem>
                  <ListItem button className={classes.listItemR}>
                    <Link to="/gallery" className={classes.menuLink}>
                      <ListItemText>Gallery</ListItemText>
                    </Link>
                  </ListItem>
                  <ListItem button className={classes.listItemR}>
                    <Link to="/reservation" className={classes.menuLink}>
                      <ListItemText>Reservation</ListItemText>
                    </Link>
                  </ListItem>
                  <ListItem button className={classes.listItemR}>
                    <Link to="/contact" className={classes.menuLink}>
                      <ListItemText >Contact Us</ListItemText>
                    </Link>
                  </ListItem>
                </List>
              </div>
            </Drawer>
          </div>

          <div>
            <Link to="/">
              <img
                className={classes.brandLogoResp}
                src={logo}
                alt="Brand Logo"
              />
            </Link>
          </div>
          <div style={{ marginRight: "1rem" }}>
            <StyledButton text="Contact us" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default ResponsiveNavbar;
