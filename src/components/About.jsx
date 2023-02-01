import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import React from "react";
import "./About.css";

const About = () => {
  const features = [
    {
      icon: 'fa-solid fa-rocket',
      heading: 'Fast',
      desc: 'Fast load times without any lagging is my first priorty'
    },
    {
      icon: 'fa-solid fa-mobile-screen',
      heading: 'Responsive',
      desc: 'My code is compatible with any device.'
    },
    {
      icon: 'fas fa-lightbulb',
      heading: 'Intuitive',
      desc: 'Strong preference for easy to use, intuitive UI/UX.'
    },
    {
      icon: 'fa-solid fa-bolt',
      heading: 'Dynamic',
      desc: 'I can develop websites both Static and Dynamic.'
    }
  ]
  return (
    <>
      <Box>
        <Typography variant="h1" sx={{ textDecoration: "underline" }}>
          About Me
        </Typography>
        <Grid container>
          {features.map((item) => {
            return(
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
            }}
          >
            <Box className="bubble">
              <i className={item.icon}/>
            </Box>
            <Typography variant="h4">{item.heading}</Typography>
            <Typography variant="h5" align="center">
              {item.desc}
            </Typography>
          
           </Grid>
            )
          })}
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>Image</Grid>
          <Grid item xs={12} md={6}>
          <Typography variant="h4">
          My name is <b>Anas ur Rehman</b>. My interests are in Front End
          Engineering, and I love to convert beautiful designs into beautiful
          code.
          <br />
          <br />I am working as a Junior Front End Developer in <b>Bitspro</b>.
          Here I am working on creating websites and web applications.
        </Typography>
        <Button variant='contained'>Contact Me</Button>
        <Button variant='outline'>Resume</Button>
          </Grid>
        </Grid>
        
      </Box>
    </>
  );
};

export default About;
