import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import { colors } from "../tools/theme";
import React from "react";
import "./About.css";
import Questions from './Questions.gif';

const About = () => {
  const features = [
    {
      icon: "fa-solid fa-rocket fa-3x icon",
      heading: "Fast",
      desc: "Fast load times without any lagging is my first priorty",
    },
    {
      icon: "fa-solid fa-mobile-screen fa-3x icon",
      heading: "Responsive",
      desc: "My code is compatible with any device.",
    },
    {
      icon: "fas fa-lightbulb fa-3x icon",
      heading: "Intuitive",
      desc: "Strong preference for easy to use, intuitive UI/UX.",
    },
    {
      icon: "fa-solid fa-bolt fa-3x icon",
      heading: "Dynamic",
      desc: "I can develop websites both Static and Dynamic.",
    },
  ];
  return (
    <>
      <Box className="about">
        <Typography variant="h1" sx={{ textDecoration: "underline", padding: '1.5rem', ':hover': {transition: '0.2s', color: colors.orange} }}>
          About Me
        </Typography>
        <Grid container className= 'grid'>
          {features.map((item) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: '4rem'
                }}
              >
                <Box className="bubble">
                  <i className={item.icon} />
                </Box>
                <Typography variant="h3" pt={1}>{item.heading}</Typography>
                <Typography variant="h4" align="center">
                  {item.desc}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
        <Grid container className='grid' sx={{padding: '0rem 2rem', alignItems: 'center'}}>
          <Grid item xs={12} md={6}>
            <img src={Questions} alt='Quesitons' />
          </Grid>
          <Grid item xs={12} md={6} align='left'>
            <Typography variant='h2' sx={{textDecoration: 'underline',paddingLeft: '5rem', color: colors.orange }}>Who am I?</Typography>
            <Typography variant="h4" className="introduction">
              My name is <b>Anas ur Rehman</b>. My interests are in Front End
              Engineering, and I love to convert beautiful designs into
              beautiful code.
              <br />
              <br />I am working as a Junior Front End Developer in{" "}
              <b>Bitspro</b>. Here I am working on creating websites and web
              applications.
            </Typography>
            <Box sx={{paddingLeft:'5rem'}}>
            <Button variant="contained" sx={{marginRight: 2}} >
              Contact Me
            </Button>
            <Button variant="outlined" >Resume</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
