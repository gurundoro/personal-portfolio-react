import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import Twitter from "@material-ui/icons/Twitter";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<CreateIcon />}
        href="https://medium.com/@kudzanayi"

      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Twitter />}
        href="https://twitter.com/codename_kd"
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<LinkedInIcon />}
        href="https://www.linkedin.com/in/kudzanayi/"
      />
    </BottomNavigation>
  );
};

export default Footer;
