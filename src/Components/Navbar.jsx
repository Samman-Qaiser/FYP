import React from 'react'
import './style.css'

import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav >
      <div></div>
      <div className='nav-links'>
      <Link to=''>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/working'>How it works</Link>
        <Link to='/faqs'>FAQs</Link>
      </div>
      <div className='button-con'>
      <div style={{ backgroundColor: 'white',borderRadius:"2rem" }}>
      <button className='button'>Login</button>/
      <button className='button'>SignUp</button>
      </div>
      
      </div>
    </nav>
  )
}

export default Navbar