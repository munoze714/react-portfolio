import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles({
  root: {
    '& .Mui-selected': {
      color: 'white',
    },
    height: "56px",
    backgroundColor: "#21201f",
  },
  icons: {
    color: '#e3874f'
  },
});

export default function Links() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="linkedin" value="linkedin" href="https://www.linkedin.com/in/emunoz714/" target="_blank" icon={<LinkedInIcon />} className={classes.icons} />
        <BottomNavigationAction label="resume" value="resume" href="/files/" target="_blank" icon={<DescriptionIcon />} className={classes.icons} />
        <BottomNavigationAction label="github" value="github" href="https://github.com/munoze714" target="_blank" icon={<GitHubIcon />} className={classes.icons} />
      </BottomNavigation>
    </>
  );
}


