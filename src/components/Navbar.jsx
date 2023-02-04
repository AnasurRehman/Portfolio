import { Button, Box, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Home from './Home'


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
    {isMobile ? (
    <>
    <Button variant='text' size='large' onClick={() => setOpen(open => true)}>
      <i className='fas fa-bars'/>
    </Button>
    <Menu open={open} onClose={() => setOpen(open => false)}>
      <MenuItem>Home</MenuItem>
      <MenuItem>Work</MenuItem>
      <MenuItem>Contact</MenuItem>
      <MenuItem>About</MenuItem>
    </Menu>
    </>
    ): (<Box>
         <Button variant='text'><Link to='/'>Home</Link></Button>
         <Button variant='text'><Link to='/work'>Work</Link></Button>
         <Button variant='text'><Link to='/skills'>Skills</Link></Button>
         <Button variant='text'><Link to='./about'>About</Link></Button>
         <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/about' element={<About />} />   
      <Route path='/work' element={<Work/>} />
      <Route path='/skills' element={<Skills />} />
    </Routes>
     </Box>)}    
    </>
  )
}

export default Navbar
