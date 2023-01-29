import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <Box>
        <Typography variant="h1" sx={{ textDecoration: "underline" }}>
          About Me
        </Typography>

        <Grid container>
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
              <i class="fa-solid fa-rocket"></i>
            </Box>
            <Typography variant="h4">Fast</Typography>
            <Typography variant="h5" align="center">
              Fast load times without any lagging is my first priorty
            </Typography>
          </Grid>
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
              <i className="fa-solid fa-mobile-screen"></i>
            </Box>
            <Typography variant="h4">Responsive</Typography>
            <Typography variant="h5" align="center">
              My code is compatible with any device.
            </Typography>
          </Grid>
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
              <i class="fa-solid fa-rocket"></i>
            </Box>
            <Typography variant="h4">Fast</Typography>
            <Typography variant="h5" align="center">
              Fast load times without any lagging is my first priorty
            </Typography>
          </Grid>
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
              <i class="fa-solid fa-rocket"></i>
            </Box>
            <Typography variant="h4">Fast</Typography>
            <Typography variant="h5" align="center">
              Fast load times without any lagging is my first priorty
            </Typography>
          </Grid>
        </Grid>

        <Stack></Stack>

        <Typography variant="h4">
          My name is <b>Anas ur Rehman</b>. My interests are in Front End
          Engineering, and I love to convert beautiful designs into beautiful
          code.
          <br />
          <br />I am working as a Junior Front End Developer in <b>Bitspro</b>.
          Here I am working on creating websites and web applications.
        </Typography>
      </Box>
    </>
  );
};

export default About;