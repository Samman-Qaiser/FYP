import React, { useState } from 'react'
import robot from '/robot2.png'
import logo from '/logoWhite.jpg'
import styles from './Signup.module.css'
import { Link, useNavigate } from 'react-router-dom'
const Signup = () => {
      const [email,setemail]=useState("")
      const [password,setpass]=useState("")
      const [name,setname]=useState("")
      const navigate=useNavigate()
    function handleSignup(e){
        e.preventDefault();
        if(name&&email&&password){
             navigate('/login')
        }
        else{
            alert('Please fill out all fields')
        }
    }
  return (
    <div className={styles.main}>
      <div className={styles.WelcomeContainer}>
        <div className={styles.HeadingContainer}>
          <p style={{ color: "white", fontSize: "1.8rem", fontWeight: "500" }}>
            WELCOME TO
          </p>
          <img className={styles.logo} src={logo} alt="logo" />
          <p className={styles.secondHeading}>
            Your Journey to Clearer Skin Starts Here! <br />
            Understand Your Skin! <br />
            Treat It Right!
          </p>
          <img className={styles.robot2} src="robot2.png" alt="flying robot" />
        </div>

        {/* <img className="flyRobo" src="flyingRobot.png" alt="flying robot" /> */}
      </div>
      <div className={styles.signupContainer}>
        <div className={styles.FormContainer}>
          <h1 style={{color: "#8072e1", fontSize: '2.2rem'}}>Create Account</h1>
          <form className={styles.inputContainer} action="">
            <input type="text" value={name}  onChange={(e)=>setname(e.target.value)} placeholder="Full Name" />
            <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email Address" />
            <input type="password" value={password} onChange={(e)=>setpass(e.target.value)} placeholder="Password" />
            <div className={styles.checkboxWrapper}>
              <input
                className={styles.checkboxinput}
                type="checkbox"
                id="policy"
                name="policy"
              />
              <label htmlFor="policy" className={styles.label}>
                I agree to the terms of services and privacy policy.
              </label>
            </div>
            <button className={styles.signupButton} onClick={handleSignup}>Sign Up</button>
          </form>
        </div>

        <div className={styles.thirdpartysignup}>
          <h4 className={styles.LineText}>Or Sign Up With</h4>
          <div className={styles.icons}>
            <i className={`fab fa-google ${styles.googleIcon}`}></i>
            <i className="fa-brands fa-facebook-square" style={{color : '#1c40ad'}}></i>
            <i className="fa-brands fa-twitter" style={{color : '#285AEB'}}></i>
            <i className="fab fa-linkedin" style={{color : '#173cae'}}></i>
          </div>
          <p style={{ color: "grey", textDecoration: "underline",fontSize:'1.1rem' }}>
            Already have an account?{" "}
            <span>
            <Link to='/login'>Sign In</Link>
         
            </span>
          </p>
        </div>
      </div>
     
    </div>
  )
}

export default Signup