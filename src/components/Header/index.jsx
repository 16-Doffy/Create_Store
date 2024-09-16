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

  const handleClickOpen = () => {
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

          <Typography variant="h6" className={classes.title}  style={{ color: 'pink' }} >
            <Link to="/" className={classes.link} style={{ color: 'inherit' }} >
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
            <Button color="inherit" onClick={handleClickOpen}>
              Resgister
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
          <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
