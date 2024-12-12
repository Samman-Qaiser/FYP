import { useState } from 'react'

import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'

import { Outlet } from 'react-router-dom'
import { Footer } from './Components/Footer.jsx'

function App() {


  return (
    <>
     <Navbar />
    <Outlet/>
     <Footer />
    </>
  )
}

export default App
