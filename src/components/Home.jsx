import { Box, Typography } from '@mui/material'
import React from 'react'
import '../components/Home.css'
import ParticleBackground from './ParticleBackground'

const Home = () => {
    return (
      <>
    <Box id='home'>
      <ParticleBackground />
        <Typography variant='h2'>Hello! My name is <b className='name'>Anas ur Rehman</b>.</Typography>
        <Typography variant='h2'>I'm a Front-end Web Developer.</Typography>
    </Box>
    </>
  )
}

export default Home
