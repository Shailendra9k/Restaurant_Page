import {font, fontWeight, color, common, background} from '../../util/globalTheme';
import {makeStyles} from '@material-ui/core'

const useNavbarStyle = makeStyles(theme => ({
  navBar: {
    backgroundColor: `${background.nav_bg}`,
    height: '118px',
    padding: '10px 0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    position: 'relative',
    [theme.breakpoints.down("sm")]: {
      display: 'none',
    }
  },

  brandLogo: {
    width: '100px',
    height: '100px',
  },

  navMenu: {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, auto)',
    gridGap: '30px',
    listStyle: 'none',
    textAlign: 'center',
    justifyContent: 'end',
    marginRight: '2rem',
  },

  dropDownMenu: {
    borderTop: `6px solid ${color.borderTop}`,
    backgroundColor: `${color.dropDownCard_bg}`,
    width: '200px',
    height: 'auto',
    padding: '1rem',
    position: 'absolute',
    top: '6rem',
    zIndex: 200,
    opacity: 1
    //
    // '&:hover': {
    //   display: 'block',
    // }
  },

  listItem: {
    listStyle: 'none',
  },

  navItem: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative', //dropdown submenu
  },

  navLinks: {
    textDecoration: 'none',
  },

  textStyle: {
    fontSize: `${font.font_regular}`,
    fontWeight: `${fontWeight.medium}`,
    textTransform: 'uppercase',
    color: `${common.black}`,
    letterSpacing: '.5px',
  },

  navActive: {},

  // Responsive Style
  respNavbar:{
    backgroundColor: '#f2f5f4',
    height: '64px',
    fontSize: '1.2rem',
    position: 'relative',
    display:'none',
    [theme.breakpoints.down("sm")]: {
      display: 'block',
    }
  },

  menuIcon: {
    height: '65px',
    width: '65px',
    cursor: 'pointer',
    backgroundColor: `${color.heading}`,
    textAlign: 'center',
    '& .MuiSvgIcon-root': {
      marginTop: '10px',
      fontSize: '45px',
      color: `${background.nav_bg}`,
    }
  },

  brandLogoResp: {
    width: '50px',
    height: '50px',
  },



  textStyleDropdown: {
    fontSize: `${font.font_xs}`,
    fontWeight: `${fontWeight.regular}`,
    color: 'rgba(255, 255, 255, .8)',
    letterSpacing: '.5px',
    lineHeight: '1rem',
    marginBottom: '5px',
    '&:hover': {
      color: `${background.nav_bg}`,
      transition: 'all .3s ease',
    }
  },

  drawerStyle: {
    width: "300px",
  },

  drawerCloseStyle : {
    width: "300px",
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },

  listItemR: {
    height: '70px',

    '&:hover': {
      backgroundColor: `${color.text_color}`,
    },
    // marginBottom: '5px',
    borderBottom: `1px solid ${common.white}`
  },

  menuLink: {
    textDecoration: 'none',
    color: `${common.white}`,
    fontSize: `${font.font_md}`,
    textTransform: 'uppercase',

  },

  listItemSelected: {
    color: 'red',
  },

}))

export default useNavbarStyle;