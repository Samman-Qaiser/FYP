import React, { useState } from 'react'
import robot from '/robot2.png'
import logo from '/logoWhite.jpg'
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
    <div className='main'>
      <div className="WelcomeContainer">
        <div className="HeadingContainer">
          <p style={{ color: "white", fontSize: "1.8rem", fontWeight: "500" }}>
            WELCOME TO
          </p>
          <img className="logo" src={logo} alt="logo" />
          <p className="secondHeading">
            Your Journey to Clearer Skin Starts Here! <br />
            Understand Your Skin! <br />
            Treat It Right!
          </p>
          <img className="robot2" src="robot2.png" alt="flying robot" />
        </div>

        {/* <img className="flyRobo" src="flyingRobot.png" alt="flying robot" /> */}
      </div>
      <div className="signupContainer">
        <div className="FormContainer">
          <h1 style={{color: "#8072e1"}}>Create Account</h1>
          <form className="inputContainer" action="">
            <input type="text" value={name}  onChange={(e)=>setname(e.target.value)} placeholder="Full Name" />
            <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email Address" />
            <input type="password" value={password} onChange={(e)=>setpass(e.target.value)} placeholder="Password" />
            <div className="checkboxWrapper">
              <input
                className="checkboxContainer"
                type="checkbox"
                id="policy"
                name="policy"
              />
              <label htmlFor="policy">
                I agree to the terms of services and privacy policy.
              </label>
            </div>
            <button className="signupButton" onClick={handleSignup}>Sign Up</button>
          </form>
        </div>

        <div className="thirdpartysignup">
          <h4 className="LineText">Or Sign Up With</h4>
          <div className="icons">
            <i class="fab fa-google "></i>
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fab fa-linkedin"></i>
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