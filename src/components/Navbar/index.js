import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import Footer from "../Footer";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(6),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    background: ""
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    background: ""
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Portfolio
          </Typography>
        </Toolbar>
        <Drawer
          className={classes.drawer}
          // variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem onClick={handleDrawerClose}>
              <Link to="/">About</Link>

            </ListItem>
            <ListItem onClick={handleDrawerClose}>
              <Link
                to="/portfolio">
                Portfolio
            </Link>
            </ListItem>
            <ListItem onClick={handleDrawerClose}>
              <Link
                to="/contact">
                Contact
            </Link>
            </ListItem>
          </List>
          <Divider />
          <Footer />
        </Drawer>
      </AppBar>
    </>
  )
}


