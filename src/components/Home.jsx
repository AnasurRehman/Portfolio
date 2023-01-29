import { Stack, Typography } from '@mui/material'
import React from 'react'
import '../components/Home.css'

const Home = () => {
    return (
      <>
    <Stack className='home'>
        <Typography variant='h3'>Hello! My name is <b className='name'>Anas ur Rehman</b>.</Typography>
        <Typography variant='h3'>I'm a Front-end Web Developer.</Typography>
    </Stack>
    </>
  )
}

export default Home
