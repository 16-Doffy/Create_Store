import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import Register from "components/features/Auth/components/Register";
import Login from "components/features/Auth/components/Login";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 16, // Use fixed value instead of theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  navLinks: {
    marginLeft: "auto",
  },
});

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [isRegister, setIsRegister] = React.useState(true); 

  const handleClickOpen = (isRegisterForm) => {
    setIsRegister(isRegisterForm);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <QrCode2Icon className={classes.menuButton} />

          <Typography
            variant="h6"
            className={classes.title}
            style={{ color: "pink" }}
          >
            <Link to="/" className={classes.link} style={{ color: "inherit" }}>
              Doflamingo
            </Link>
          </Typography>

          <Box className={classes.navLinks}>
            <NavLink to="/todos" className={classes.link}>
              <Button color="inherit">Todo</Button>
            </NavLink>

            <NavLink to="/album" className={classes.link}>
              <Button color="inherit">Album</Button>
            </NavLink>
            <Button color="inherit" onClick={() => handleClickOpen(true)}>
              Register
            </Button>
            <Button color="inherit" onClick={() => handleClickOpen(false)}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Dialog
        open={open}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleClose();
          }
        }}
        BackdropProps={{
          onClick: (event) => {
            event.stopPropagation();
          },
        }}
      >
        <DialogContent>
          {isRegister ? (
            <Register closeDialog={handleClose} />
          ) : (
            <Login closeDialog={handleClose} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
