import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Slide,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import { color } from "../../util/globalTheme";

const useScrollDialog = makeStyles((theme) => ({
  dialogWrapper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    // height: "60%",
    width: "65%",
    borderRadius: "1rem",
    backgroundColor: `${color.nav_bg}`,
  },

  scrollPaper: {
    alignItems: 'baseline', // default center -> position of dialogBox
    marginTop: '105px',
  },

  headerWrapper: {
    "&.MuiDialogTitle-root": {
      padding: ".1rem",
    },
    borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
  },

  headerText: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textFont: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: '1px',
  },

  formLogin: {
    "&.MuiDialogContent-root": {
      padding: "1rem",
    },
  },

  actionButton: {
    "&.MuiDialogActions-root": {
      padding: "0px",
    },
  },
}));

const scrollTransition =
  React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const LoginDialog = (props) => {
  const classes = useScrollDialog();
  const { children, openDialog, handleClose } = props;

  return (
    <>
      <Dialog
        BackdropProps={{style: {opacity: '.5'}}}
        // variant="outlined"
        classes={{paper: classes.dialogWrapper, scrollPaper: classes.scrollPaper }}
        open={openDialog}
        maxWidth="sm"
        TransitionComponent={scrollTransition}
        onClose={handleClose}
      >
        <DialogTitle className={classes.headerWrapper}>
          <div className={classes.headerText}>
            <Typography>LOGIN FORM</Typography>

            <IconButton onClick={handleClose}>
              <CloseIcon fontSize="large" color="error" />
            </IconButton>
          </div>
        </DialogTitle>

        <DialogContent
          className={classes.formLogin}
        >
          {/* LoginForm is rendered here as children */}
          {children}
        </DialogContent>
        {/*<DialogActions className={classes.actionButton}>*/}
        {/*  <Button onClick={handleClose} color="primary">Cancel</Button>*/}
        {/*  <Button onClick={() => console.log("abc")} color="primary">Ok</Button>*/}
        {/*</DialogActions>*/}
      </Dialog>
    </>
  );
};

export default LoginDialog;
