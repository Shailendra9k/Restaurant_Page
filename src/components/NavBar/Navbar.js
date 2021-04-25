import React, {  } from "react";
import useNavbarStyle from "./NavbarStyle";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import ResponsiveNavbar from "./ResponsiveNavbar";
import StyledButton from "../../resuableComponent/StyledButton";
import logo from "../../assets/logo/logo.png";
import useDialogBox from "../../customHooks/useDialogBox";
import LoginDialog from "../Login/LoginDialog";
import { color } from "../../util/globalTheme";
import LoginForm from "../Login/LoginForm";

const Navbar = () => {
  const classes = useNavbarStyle();
  /*
  const [dropdownMenu, setDropdownMenu] = useState({
    lunchDropdown: false,
    aboutDropdown: false,
  });

  const showDropdown = (value) => {
    if (value === "lunch") {
      setDropdownMenu({
        lunchDropdown: true,
        aboutDropdown: false,
      });
    }
    if (value === "about") {
      setDropdownMenu({
        lunchDropdown: false,
        aboutDropdown: true,
      });
    }
  };

  const hideDropdown = (value) => {
    setDropdownMenu({
      lunchDropdown: false,
      aboutDropdown: false,
    });
  };
*/
  //  Getting state from useDialogBox custom hook
  const { openDialog, handleClickOpen, handleClose } = useDialogBox();

  return (
    <>
      <ResponsiveNavbar classes={classes} />
      <nav className={classes.navBar}>
        <ul className={classes.navMenu}>
          <li className={classes.navItem}>
            <Link to="/" className={classes.navLinks}>
              <Typography className={classes.textStyle}>Home</Typography>
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/menu" className={classes.navLinks}>
              <Typography className={classes.textStyle}>Menu</Typography>
            </Link>
          </li>

          {/* <li
            className={classes.navItem}
            onMouseEnter={() => showDropdown("lunch")}
            onMouseLeave={() => hideDropdown("lunch")}
          >
            <Link to="/lunch" className={classes.navLinks}>
              <Typography className={classes.textStyle}>Lunch</Typography>
            </Link>

            {dropdownMenu.lunchDropdown && (
              <ul className={classes.dropDownMenu}>
                <li className={classes.listItem}>
                  <Link to="/lunchA" className={classes.navLinks}>
                    <Typography className={classes.textStyleDropdown}>
                      Lunch A
                    </Typography>
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link to="/lunchA" className={classes.navLinks}>
                    <Typography className={classes.textStyleDropdown}>
                      Lunch B
                    </Typography>
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link to="/lunchA" className={classes.navLinks}>
                    <Typography className={classes.textStyleDropdown}>
                      Lunch C
                    </Typography>
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link to="/lunchA" className={classes.navLinks}>
                    <Typography className={classes.textStyleDropdown}>
                      Lunch D
                    </Typography>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          */}
          <li className={classes.navItem}>
            <Link to="/lunch" className={classes.navLinks}>
              <Typography className={classes.textStyle}>Lunch</Typography>
            </Link>
          </li>

          <li className={classes.navItem}>
            <Link to="/gallery" className={classes.navLinks}>
              <Typography className={classes.textStyle}>Gallery</Typography>
            </Link>
          </li>

          {/* <li
            className={classes.navItem}
            onMouseEnter={() => showDropdown("about")}
            onMouseLeave={() => hideDropdown("value")}
          >
            <Link to="/about" className={classes.navLinks}>
              <Typography className={classes.textStyle}>About</Typography>
            </Link>
            {dropdownMenu.aboutDropdown && (
              <ul className={classes.dropDownMenu}>
                <li className={classes.listItem}>
                  <Link to="/about" className={classes.navLinks}>
                    <Typography className={classes.textStyleDropdown}>
                      About Us
                    </Typography>
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link to="/contact" className={classes.navLinks}>
                    <Typography className={classes.textStyleDropdown}>
                      Contact Us
                    </Typography>
                  </Link>
                </li>
              </ul>
            )}
          </li> */}

          <li className={classes.navItem}>
            <div>
              <Link to="/">
                <img
                  className={classes.brandLogo}
                  src={logo}
                  alt="Brand Logo"
                />
              </Link>
            </div>
          </li>

          <li className={classes.navItem}>
            <Link to="/reservation" className={classes.navLinks}>
              <Typography className={classes.textStyle}>Reservation</Typography>
            </Link>
          </li>
          <li className={classes.navItem} onClick={() => handleClickOpen(1)}>
            <Link to="#" className={classes.navLinks}>
              <Typography
                className={classes.textStyle}
                style={{ color: `${color.borderTop}` }}
              >
                Login
              </Typography>
            </Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/contact" className={classes.navLinks}>
              <StyledButton text="Contact Us" />
            </Link>
          </li>
        </ul>
      </nav>

      {/*Login DialogBox for user*/}
      <LoginDialog openDialog={openDialog === 1} handleClose={handleClose}>
        {/*login form*/}
        <LoginForm />
      </LoginDialog>
    </>
  );
};

export default Navbar;
