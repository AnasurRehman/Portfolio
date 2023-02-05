import './App.css';
import { Divider, Stack } from '@mui/material'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/skills/Skills';

function App() {
  return (
    
    <Stack className= 'App'>
    <Home />
    <Navbar />
    <About />
    <Skills />
    {/* <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About />} />   
      <Route path='/work' element={<Work/>} />
    </Routes> */}
    </Stack>
    
  );
}

export default App;
