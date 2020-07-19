import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ImportantDevicesTwoToneIcon from '@material-ui/icons/ImportantDevicesTwoTone';
import SystemUpdateAltSharpIcon from '@material-ui/icons/SystemUpdateAltSharp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      width: '100%',
      maxWidth: 360,
      backgroundColor: "#373737",
    }
  },
  link: {
    color: "#e3874f",
  },
  menuButton: {
    marginRight: theme.spacing(6),
  },
  hide: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    background: "#21201f",
    color: "#e3874f"
  },
  name: {
    fontFamily: "serif",
    background: "#e3874f",
    padding: "50px",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  button: {
    margin: theme.spacing(1),
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
            Welcome
          </Typography>
        </Toolbar>
        <Drawer
          className={classes.root}
          anchor="left"
          open={open}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List component="nav">
            <ListItemText primary="Full-Stack Web Developer" className={classes.name} />
            <ListItem
              component={Link} to="/about"
              className={classes.button}
              button onClick={handleDrawerClose}>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary="About" className={classes.link} />
            </ListItem>
            <ListItem
              component={Link} to="/portfolio"
              className={classes.button}
              button onClick={handleDrawerClose}>
              <ListItemIcon>
                <ImportantDevicesTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" className={classes.link} />
            </ListItem>
            <ListItem
              component={Link} to="/contact"
              className={classes.button}
              button onClick={handleDrawerClose}>
              <ListItemIcon>
                <MailTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" className={classes.link} />
            </ListItem>
          </List>
          <Divider />
          <Button
            size="large"
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<SystemUpdateAltSharpIcon />}>
            Resume
          </Button>
        </Drawer>
      </AppBar>
    </>
  )
}


