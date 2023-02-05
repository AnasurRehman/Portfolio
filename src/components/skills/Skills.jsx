import { Grid, Stack, Typography } from "@mui/material";
import './Skills.css';
import React from "react";
import { colors } from "../../tools/theme";
import Creator from './WebsiteCreator.gif'
import SliderComponent from "./SliderComponent";

const Skills = () => {
  return (
    <>
      <Stack className= 'skills'>
      <Typography variant="h1" sx={{ textDecoration: "underline", padding: '1.5rem', ':hover': {transition: '0.2s', color: colors.orange} }}>
          My Skills</Typography>
        <Grid container sx={{padding: '0rem 2rem', alignItems: 'center'}}>
          <Grid item xs={12} md={6}>
            <Typography variant='h4' className='skillsdesc'>
              I'm constantly keen to learn new technologies and develop projects
              with them because web technologies advance so quickly.<br/><br/>
              Additionally, I'm eager to learn new tools if they are required
              for the project I'm working on for the company. I adapt my
              strategy when working with teams to meet your needs. Everyone
              responds differently to different tools, so I constantly try to
              get the greatest outcomes for the people I'm dealing with right
              now.<br/><br/> Just a few of the technologies and tools I've used in the
              past are listed below:
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} pr='5rem'>
            <img src={Creator} alt='Website Creator'/>
          </Grid>
          <SliderComponent />
        </Grid>
      </Stack>
    </>
  );
};

export default Skills;
