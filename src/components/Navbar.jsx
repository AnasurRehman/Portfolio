import { Button, Box, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

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
    ): (
    <Box className="navbarDesktop">
         <Button variant='text'><Link to='/'>Home</Link></Button>
         <Button variant='text'><Link to='/work'>Work</Link></Button>
         <Button variant='text'>Contact</Button>
         <Button variant='text'>About</Button>
     </Box>)}    
    </>
  )
}

export default Navbar
