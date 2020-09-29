import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#EFC9AF"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #104C91",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #104C91",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute"
    },
    // "&:before": {
    //   content: "''",
    //   position: "absolute",
    //   right: "-0.625rem",
    //   top: "calc(50% - 5px)",
    //   borderStyle: "solid",
    //   // borderColor: " #1F8AEE #1F8AEE transparent transparent",
    //   borderWidth: "0.625rem",
    //   transform: "rotate(45deg)"
    // },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#1F8AC0"
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        // borderColor: "transparent transparent #1F8AEE #1F8AEE"
      }
    }
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: '#1F8AEE',
    color: '#104C91',
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto"
      },
      "&:nth-of-type(2n):before": {
        display: "none"
      }
    }
  },
  heading: {
    color: "#104C91",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  subHeading: {
    color: '#104C91',
    padding: "0",
    textTransform: "uppercase"
  }
}));

// beige = '#EFC9AF'
// blue = '#104C91'
// lightblue = '#1F8AEE'

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Education And Work Experince
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019 - Present
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              Software Engineer
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: '#1F8AEE' }}
            >
              Dollaride
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: '#104C91' }}
            >
              FrontEnd Engineer for award winning mobile ride-sharing app. Specializing in React-Native with experience in Node and multiple third-party libraries 
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              Software Engineering Student
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: '#1F8AEE'}}
            >
              Flatiron School
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: '#104C91' }}
            >
            An immersive 15-week Full Stack Web Development program aimed towards helping students discover the beauty of code through a combination of pair programming, group projects, individual study, presentations and tech blogs.
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2014
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
             Cultural Strategist
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: '#1F8AEE'}}
            >
              CS Space
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: '#104C91' }}
            >
            Conducted qualitative and quantitative research on unique projects for clients including NFL, Disney, Nike, ESPN and CitiGroup, that informed future strategic business decisions 
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2008 - 2012
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              Bachelor of Arts 
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: '#1F8AEE' }}
            >
              Columbia University
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: '#104C91' }}
            >
            Major in History 
            Minor in Philosophy
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;

