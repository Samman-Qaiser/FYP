import React, { useState } from 'react'
import styles from './Landingstyle.module.css'
import { CgMenuRight } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom'
import logo from '/logo.jpg'
const Navbar = () => {
  const [sidebarOpen,setsidebar]=useState(false)
  const navigate=useNavigate()
  return (
    <>  
            <nav >
      <div><img src={logo} className={styles.logo}/></div>
      <div className={styles.navlinks}>
        <Link to=''>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/services'>Services</Link>
        <Link to='/working'>How it works</Link>
        <Link to='/faqs'>FAQs</Link>
      </div>
      <div className={styles.buttoncon}>
      <div style={{ backgroundColor: 'white',borderRadius:"2rem" }}>
      <button className={styles.button} id='nav-btn'  ><Link to='/login' style={{color:"black"}}>Login</Link></button>/
      <button className={styles.button} id='nav-btn'  ><Link to='/signup' style={{color:"black"}}>SignUp</Link></button>
      </div>
      
      </div>
      <CgMenuRight className={styles.menu} size={34} onClick={()=>{
        setsidebar(!sidebarOpen)
      }}/>
            </nav>
    <div className={styles.sidebar} style={{right:sidebarOpen?"0%":"-100%"}}>
        <Link to=''>Home</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/working'>How it works</Link>
        <Link to='/faqs'>FAQs</Link>
      <div className={styles.buttoncon}>
      <div style={{ backgroundColor: 'white',borderRadius:"2rem" }}>
      <button className={styles.button} ><Link to='/login'>Login</Link></button>/
      <button className={styles.button}><Link to='/signup'>SignUp</Link></button>
      </div>
      </div>
        
    </div>
    </>
   
  )
}

export default Navbar