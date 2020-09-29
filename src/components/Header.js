import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box, Button } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar.jpg";




//  CSS STYLES
const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title: {
    color: "#F4AF1B"
  },
  subtitle: {
    color: "#F2BC94",
    marginBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Kudzanayi Dzvairo" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Kudzanayi Dzvairo"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["HTML/CSS", "JavaScript", "React", ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
      <Button variant="contained" color="primary" href="https://drive.google.com/file/d/1BuLQd_dnAqkB0sskSzoclpIDZN1NHVe8/view?usp=sharing" target="_blank">View Resume</Button>
    </Box>
  );
};

export default Header;
