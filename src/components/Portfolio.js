import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices'
import Navbar from "./Navbar";
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/react.png";
import project3 from "../images/react+hooks.png";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-rails.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#F4AF1B",
    height: "100%",
  },
  gitbutton: {
    margin: "2px"
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Netflix Clone
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  React, React-Router-Dom, Material UI, Mobile-Responsive
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <GitHubIcon/>
              <Button size="small" color="primary" href='https://github.com/Kudzanayi-Dzvairo/netflix-clone-react' target="_blank" className='gitbutton'>
                Github
              </Button>
              <ImportantDevicesIcon/>
              <Button size="small" color="primary" href='https://netflix-landing-clone.netlify.app/' target="_blank">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*Project New*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Full Stack Stock Trader
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 Ruby on Rails , React, React-Router-Dom, Bootstrap
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <GitHubIcon/>
              <Button size="small" color="primary" href='https://github.com/Kudzanayi-Dzvairo/ttp_challenge' target="_blank" className='gitbutton'>
                Github
              </Button>
              <ImportantDevicesIcon/>
              <Button size="small" color="primary" href='https://ttp-frontend-kd.herokuapp.com/signup' target="_blank">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  African Sceneries - Hotel Booking
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  React, React Contex API, Bootstrap, Mobile-Responsive
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <GitHubIcon/>
              <Button size="small" color="primary" href='https://github.com/Kudzanayi-Dzvairo/africa_sceneries' target="_blank">
                Github
              </Button>
              <ImportantDevicesIcon/>
              <Button size="small" color="primary" href='https://african-sceneries.netlify.app/' target="_blank">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*Project 1 moved*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  JS Con Event Website
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  React, React-Router-Dom, Material UI, Mobile-Responsive
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <GitHubIcon/>
              <Button size="small" color="primary" href='https://github.com/Kudzanayi-Dzvairo/conference-event-site' target="_blank" className='gitbutton'>
                Github
              </Button>
              <ImportantDevicesIcon/>
              <Button size="small" color="primary" href='https://js-conference.netlify.app' target="_blank">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Covid 19 Global Infection Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 React, React Hooks, Material UI, Charts js, Mobile-Responsive
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <GitHubIcon/>
              <Button size="small" color="primary" href='https://github.com/Kudzanayi-Dzvairo/covid-tracker-react' target="_blank">
                GitHub
              </Button>
              <ImportantDevicesIcon/>
              <Button size="small" color="primary" href='https://infectiontracker.netlify.app' target="_blank">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Diagon Alley - e-commerce
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Vanilla Js, JQuery, HTML, CSS
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <GitHubIcon/>
              <Button size="small" color="primary" href='https://github.com/Kudzanayi-Dzvairo/harry_potter_frontend-1' target="_blank">
                GitHub
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
