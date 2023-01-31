import './App.css';
import { Stack} from '@mui/material'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <Skills />
    {/* <About /> */}
    {/* <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About />} />   
      <Route path='/work' element={<Work/>} />
    </Routes> */}
    </>
  );
}

export default App;
