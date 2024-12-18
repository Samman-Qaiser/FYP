import React, { useEffect, useRef, useState } from 'react'
import HeroSection from './HeroSection'
import Marquee from './Marquee'
import video from '/Acne_Diagnosis_and_Treatment_App.mp4'
import { GrMoney } from "react-icons/gr";
import { IoAccessibility } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";
import { OrbitControls, TorusKnot, Environment, Text, useTexture, MeshTransmissionMaterial } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber'
import Circles from './Circles';
import { MdOutlineRecommend } from "react-icons/md";
import { gsap } from "gsap";
import { RiChatPrivateFill } from "react-icons/ri";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import  './Landingstyle.css';
gsap.registerPlugin(ScrollTrigger);
const Landing = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".adv-con",
        start: "top 20%",
        end: "top 0%",
        scrub: true,
      }
    })
    tl.from('.adv-box', {
      y: "160%",
      stagger: 0.5
    })
    tl.to('.adv-box', {
      y: "0%",

    })
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#acne-con",
        start: "top 20%",
        end: "top 0%",
        scrub: true,
    
      }
    })
    // tl2.from('.acne-box', {
    //   y: "160%",
    //   stagger: 1
    // })
    // tl2.to('.acne-box', {
    //   y: "0%",

    // })
  }, [])
  const ref=useRef()
  function Torus(){
     
    useFrame((state, delta) => {
       const speed=hover?2:0.3
        ref.current.rotation.x += delta * speed;
        ref.current.rotation.y += delta * speed;
      });
    return(
        <mesh
        ref={ref}
        position={[2, 0, 0]}
        onPointerEnter={() => sethover(true)}
        onPointerLeave={() => sethover(false)}
     
      >
        <torusKnotGeometry args={[1,0.5,300,20]} />
   
        <MeshTransmissionMaterial
   
    color={"#6a8adb"}
      transmission={0.71}
      thickness={0.2}
      roughness={0}
      ior={1.73}
      chromaticAberration={0.19}
      anisotropy={0}
      distortion={0}
      distortionScale={0.36}
      />
      </mesh>
    )
}
  return (
    <div>
      <HeroSection />
      <Marquee />
      <h1 style={{ marginLeft: "2rem", fontSize: "1.7rem" }}>Say goodbye to guesswork and <br />hello to confidence—your<br /> perfect skincare companion <br />is just a click away!</h1>
      <div className='page2'>
        <div className='pg2-right'>
          <div>
            <div className='pg2-r-con' >
              <div className='pg2-right-box'>
                <h1>01- Model Training</h1>
                <p>A deep learning model is trained using labeled datasets of acne and clear skin images to classify and detect acne types accurately.</p>
              </div>
              <div className='pg2-right-box'>
                <h1>02- Upload Image</h1><p>The user uploads a facial image to the web application for analysis.</p>
              </div>
            </div>
            <div className='pg2-r-con' >
              <div className='pg2-right-box'>
                <h1>03- Image Preprocessing</h1>
                <p>The application preprocesses the uploaded image by resizing, normalizing, and ensuring clarity before feeding it to the trained model for classification.</p>
              </div>
              <div className='pg2-right-box'>
                <h1>04- Result Recommendations </h1><p>The model processes the image, detects acne (if present), classifies its type (e.g., blackheads, whiteheads, pustules), and provides detailed results along with tailored skincare recommendations based on the analysis.</p>
              </div>
            </div>
          </div>

        </div>

        <div className='pg2-left'>
          <Circles />
       
        </div>

      </div>
      <div className='adv-con'>
        <div className='adv-box-con'>
          <p>Your Concern, Our Expertise</p>
          <h1>Our Advantages</h1>
        </div>
        <div className='adv-box-con' id='adv-box-main'>
          <div className='adv-box adv' >
            <div className='adv-box-con'><span>Advantages</span><GoArrowUpRight size={74} style={{ color: "#AA9FEE" }} /></div>
            <h2>Accurate Diagnosis</h2>
            <p>The application uses advanced deep learning models to classify facial acne with precision, helping users identify specific acne types such as blackheads, whiteheads, or pustules.</p>
            <div className='adv-box-con'>  <h1>01</h1><CiCircleCheck size={54} style={{ color: "#AA9FEE" }}/></div>
            
          </div>
          <div className='adv-box adv'>
            <div className='adv-box-con'><span>Advantages</span><GoArrowUpRight size={74} style={{ color: "#AA9FEE" }} /></div>
            <h2>Personalized Recommendations</h2>
            <p>Based on the acne type detected, the application provides tailored skincare and treatment suggestions, saving users time and effort in finding effective solutions.</p>
            <div className='adv-box-con'> <h1>02</h1>
            <MdOutlineRecommend size={54} style={{ color: "#AA9FEE" }} />
            </div>
           
          </div>
          <div className='adv-box adv'>
            <div className='adv-box-con'><span>Advantages</span><GoArrowUpRight size={74} style={{ color: "#AA9FEE" }} /></div>
            <h2>User-Friendly and Accessible</h2>
            <p>The web interface is designed to be intuitive, enabling users to upload images easily and receive instant results, making skincare advice accessible to a broader audience.</p>
            <div className='adv-box-con'>
              <h1>03</h1>
              <FaUserFriends size={54} style={{ color: "#AA9FEE" }} />
            </div>
          
          </div>
        </div>
      </div>
      <h1 style={{ marginLeft: "2rem" }} id='h1-acne'>Acne Type Classification</h1>
      <div id='acne-con'>
         <div className='acne-box'><div className='acne-overlay'><h2>Blackheads</h2><p>Blackheads are open comedones caused by clogged pores filled with oil and dead skin cells. They appear as small, dark spots on the skin due to oxidation.</p></div></div>
         <div className='acne-box'><div className='acne-overlay'><h2>Whiteheads</h2><p>Whiteheads are closed comedones where pores are clogged with oil and dead skin cells. Unlike blackheads, they remain under the skin, appearing as white or flesh-colored bumps.</p></div></div>
         <div className='acne-box'><div className='acne-overlay'><h2>Nodules</h2><p>Nodules are severe acne lesions that develop deep within the skin. They are painful, hard, and can leave permanent scars if not treated effectively.</p></div></div>
         <div className='acne-box'><div className='acne-overlay'><h2>Papules</h2><p>Papules are small, red, and inflamed pimples caused by irritation or infection in clogged pores. They are tender to the touch and lack visible pus.</p></div></div>
         <div className='acne-box'><div className='acne-overlay'><h2>Postules</h2><p>Pustules are similar to papules but contain pus, appearing as red bumps with a white or yellow center. They are often caused by bacterial infection in clogged pores.</p></div></div>
         <div className='acne-box'><div className='acne-overlay'><h2>Cysts</h2><p>Cysts are large, painful, and pus-filled acne lesions that form deep under the skin. They are severe and often require professional treatment to prevent scarring.</p></div></div>
      </div>
      <h1  id='h1-choose'>Why Choose Us?</h1>
      <div id='page3'>
          <div className='pg3-left'>
          <div>
          <video src={video} autoPlay muted loop />
          </div>
             

        
          </div>
          <div className='pg3-right'>
            <div className='pg3r-top'>
            <div className='sum-con'>
            <h2>Combining AI and healthcare insights to assist users in their skincare free of cost</h2>
                 <details>
                  <summary><span className='btn'>Read More</span></summary><p>Using advanced AI and healthcare expertise, our chatbot delivers personalized recommendations to address unique skin concerns.
                  Say goodbye to guesswork and
                  hello to confidence—your
                  perfect skincare companion
                  is just a click away!</p>
                 </details>
            </div>
            <div className='canvas-con'>
         
            <img src='./blob.gif'  />
            </div>
               
            </div>
            <div className='benefits-con'>
            <div className='benefits-div'><h3><GrMoney size={34} style={{color:"#9588E8"}} />
            Cost affective</h3><p>Eliminates transportation, hospital and consultation charges.</p></div>
            <div className='benefits-div'><h3><IoTime size={34} style={{color:"#9588E8"}} />24/7 Availability</h3><p>Available 24/7, allowing users to get help without waiting for clinic hours.</p></div>
            <div className='benefits-div'><h3><IoAccessibility size={34} style={{color:"#9588E8"}} />Accessibility </h3><p>Access healthcare advice from homes without visiting hospital.</p></div>
            <div className='benefits-div'><h3><RiChatPrivateFill  size={34} style={{color:"#9588E8"}} />Privacy</h3><p>Tailored to individual concerns while maintaining user anonymity.</p></div>
            </div>
           
          </div>
       
      </div>
    </div>
  )
}

export default Landing