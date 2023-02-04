import { Stack, Typography } from '@mui/material'
import React from 'react'
import '../components/Home.css'
import ParticleBackground from './ParticleBackground'

const Home = () => {
    return (
      <>
    <Stack className='home'>
      <ParticleBackground />
        <Typography variant='h3' className='as'>Hello! My name is <b className='name'>Anas ur Rehman</b>.</Typography>
        <Typography variant='h3'>I'm a Front-end Web Developer.</Typography>
    </Stack>
    </>
  )
}

export default Home
