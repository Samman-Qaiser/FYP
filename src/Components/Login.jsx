import React, { useState } from 'react'
import robot from '/flyingRobot.png'
import logo from '/logoWhite.jpg'
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = ({setLoggedIn,setuserName}) => {
  const [email,setemail]=useState("")
  const [password,setpass]=useState("")
  const navigate=useNavigate()
  function handlelogin(e){
    e.preventDefault();
   if(email&&password){
       setLoggedIn(true)
       setuserName(email)
       navigate('/chat')
   }
   else{
    alert("Fill the required fields to Proceed")
   }
  }
 
  return (
    <> 
    <div className={styles.main}>
   
    <div className={styles.loginContainer}>
    <div className={styles.FormContainer}>
      <h1 style={{color: "#8072e1"}}>Welcome Back</h1>
      <form className={styles.inputContainer} action="" >
        <input type="text"   value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Username or Email Address" />
        <input type="password" value={password} onChange={(e)=>setpass(e.target.value)} placeholder="Password" />
        <a className={styles.forgotPass}href="" style={{fontSize:"0.9rem"}}>Forgot Password?</a>
        <button  className={styles.loginButton} onClick={handlelogin}>Login</button>
      </form>
    </div>

    <div className={styles.thirdpartyLogin}>
      <h4 className={styles.LineText} style={{fontSize:"0.9rem"}}>Or Login With</h4>
      <div className={styles.icons}>
        <i class="fab fa-google "></i>
        <i class="fa-brands fa-facebook-square"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fab fa-linkedin"></i>
      </div>
      <p style={{ color: "grey", textDecoration: "underline",fontSize:'1.1rem' }}>
        Don't have an account?{" "}
        <span> 
        <Link to='/signup'>Sign Up</Link>
   
        </span>
      </p>
    </div>
       </div>
       <div className={styles.WelcomeContainer}>
        <div className={styles.HeadingContainer}>
          <p style={{ color: "white", fontSize: "1.8rem", fontWeight: "500" }}>
            WELCOME TO
          </p>
          <img className={styles.logo} src={logo} alt="logo" />
          <p className={styles.secondHeading}>
            Your Clear Skin Journey Awaits. <br />
            Log In to Glow Forward!
          </p>
        </div>

        <img className={styles.flyRobo} src={robot} alt="flying robot" />
      </div>
    </div>
      
   
    </>
 

  )
}

export default Login
