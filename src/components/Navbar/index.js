import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  ClickAwayListener,
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
      maxWidth: 200,
      backgroundColor: "#373737",
    },
    "& .MuiListItemIcon-root ": {
      color: "black",
    },
    "& .MuiDivider-root": {
      color: '#886ea4a'
    },
    position: "fixed",
  },
  link: {
    '&:hover': {
      color: '#e3874f'
    },
    color: "white",
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
    position: "static",
    background: "#21201f",
    color: "#e3874f"
  },
  name: {
    fontFamily: "lato",
    borderStyle: "solid",
    background: "#e3874f",
    textAlign: "center",
    padding: "25px",
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
            Portfolio
          </Typography>
        </Toolbar>
        <Drawer
          className={classes.root}
          anchor="left"
          open={open}
        >
          <div className={classes.drawerHeader}>
            <ClickAwayListener onClickAway={handleDrawerClose}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon fontSize="large" /> : <ChevronRightIcon />}
              </IconButton>
            </ClickAwayListener>
          </div>
          <Divider />
          <List component="nav">
            <ListItemText primary="Full-Stack Web Developer" className={classes.name} />
            <ListItem
              component={Link} to="/about"
              className={classes.button}
              button>
              <ListItemIcon>
                <EmojiPeopleIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="About" className={classes.link} />
            </ListItem>
            <ListItem
              component={Link} to="/portfolio"
              className={classes.button}
              button>
              <ListItemIcon>
                <ImportantDevicesTwoToneIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Projects" className={classes.link} />
            </ListItem>
            <ListItem
              component={Link} to="/contact"
              className={classes.button}
              button>
              <ListItemIcon>
                <MailTwoToneIcon fontSize="large" />
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
            startIcon={<SystemUpdateAltSharpIcon fontSize="large" />}>
            Resume
          </Button>
        </Drawer>
      </AppBar>
    </>
  )
}


