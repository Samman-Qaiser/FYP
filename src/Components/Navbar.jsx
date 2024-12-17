import React, { useState } from 'react'
import './style.css'
import { CgMenuRight } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom'
import logo from '/logo.jpg'
const Navbar = () => {
  const [sidebarOpen,setsidebar]=useState(false)
  const navigate=useNavigate()
  return (
    <>  
            <nav >
      <div><img src={logo} id='logo'/></div>
      <div className='nav-links'>
        <Link to=''>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/services'>Services</Link>
        <Link to='/working'>How it works</Link>
        <Link to='/faqs'>FAQs</Link>
      </div>
      <div className='button-con'>
      <div style={{ backgroundColor: 'white',borderRadius:"2rem" }}>
      <button className='button' ><Link to='/login'>Login</Link></button>/
      <button className='button'><Link to='/signup'>SignUp</Link></button>
      </div>
      
      </div>
      <CgMenuRight className='menu' size={34} onClick={()=>{
        setsidebar(!sidebarOpen)
      }}/>
            </nav>
    <div id='sidebar' style={{right:sidebarOpen?"0%":"-100%"}}>
        <Link to=''>Home</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/working'>How it works</Link>
        <Link to='/faqs'>FAQs</Link>
      <div className='button-con'>
      <div style={{ backgroundColor: 'white',borderRadius:"2rem" }}>
      <button className='button' ><Link to='/login'>Login</Link></button>/
      <button className='button'><Link to='/signup'>SignUp</Link></button>
      </div>
      </div>
        
    </div>
    </>
   
  )
}

export default Navbar