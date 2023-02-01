import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Skills = () => {
  return (
    <>
      <Stack>
        <Typography variant="h2">My Skills</Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography>
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
        </Grid>
      </Stack>
    </>
  );
};

export default Skills;
