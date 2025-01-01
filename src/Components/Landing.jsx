import React, { useEffect, useRef, useState } from 'react'
import HeroSection from './HeroSection'
import Marquee from './Marquee'
import video from '/Acne_Diagnosis_and_Treatment_video.mp4'
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
import  styles from'./Landingstyle.module.css';
gsap.registerPlugin(ScrollTrigger);
const Landing = () => {
  const advcon=useRef(null)
  const advbox=useRef(null)
  const acnecon=useRef(null)


  return (
    <div>
      <HeroSection />
      <Marquee />
      <h1 style={{ marginLeft: "2rem", fontSize: "1.7rem" }}>Say goodbye to guesswork and <br />hello to confidence—your<br /> perfect skincare companion <br />is just a click away!</h1>
      <div className={styles.page2}>
        <div className={styles.pg2right}>
          <div>
            <div className={styles.pg2rcon} >
              <div className={styles.pg2rightbox}>
                <h1>01- Your Privacy is <br/> Our Priority </h1>
                <p>We ensure that your uploaded images and data are kept private. We do not share, sell, or misuse any personal information.</p>
              </div>
              <div className={styles.pg2rightbox}>
                <h1>02- Secure Image <br/>Uploads</h1><p>When you upload an image, it’s transmitted securely using encryption, ensuring no unauthorized access to your data.</p>
              </div>
            </div>
            <div className={styles.pg2rcon} >
              <div className={styles.pg2rightbox}>
                <h1>03- Temporary Data<br/> Storage</h1>
                <p>Uploaded images are only stored temporarily for analysis purposes and are automatically deleted after processing to protect your privacy.</p>
              </div>
              <div className={styles.pg2rightbox}>
                <h1>04- Transparent Data Handling </h1><p>We are clear about how your data is used. The images are analyzed only for acne detection, and we don’t store or use your data for anything else.</p>
              </div>
            </div>
          </div>

        </div>

        <div className={styles.pg2left}>
          <Circles />
       
        </div>

      </div>


<div className={styles.advcon} ref={advcon}>
  <div className={styles.advboxcon}>
    <p>Your Concern, Our Expertise</p>
    <h1>Our Advantages</h1>
  </div>
  <div className={`${styles.advboxcon} ${styles['advboxmain']}`}>
    <div className={`${styles.advbox} ${styles.adv}`} ref={advbox}>
      <div className={styles['advboxcon']}>
        <span>Advantages</span>
        <GoArrowUpRight size={74} style={{ color: "#AA9FEE" }} />
      </div>
      <h2>Accurate Diagnosis</h2>
      <p>
        The application uses advanced deep learning models to classify facial
        acne with precision, helping users identify specific acne types such as
        blackheads, whiteheads, or pustules.
      </p>
      <div className={styles.advboxcon}>
        <h1>01</h1>
        <CiCircleCheck size={54} style={{ color: "#AA9FEE" }} />
      </div>
    </div>
    <div className={`${styles.advbox} ${styles.adv}`} ref={advbox}>
      <div className={styles.advboxcon}>
        <span>Advantages</span>
        <GoArrowUpRight size={74} style={{ color: "#AA9FEE" }} />
      </div>
      <h2>Personalized Recommendations</h2>
      <p>
        Based on the acne type detected, the application provides tailored
        skincare and treatment suggestions, saving users time and effort in
        finding effective solutions.
      </p>
      <div className={styles.advboxcon}>
        <h1>02</h1>
        <MdOutlineRecommend size={54} style={{ color: "#AA9FEE" }} />
      </div>
    </div>
    <div className={`${styles.advbox} ${styles.adv}`} ref={advbox}>
      <div className={styles.advboxcon}>
        <span>Advantages</span>
        <GoArrowUpRight size={74} style={{ color: "#AA9FEE" }} />
      </div>
      <h2>User-Friendly and Accessible</h2>
      <p>
        The web interface is designed to be intuitive, enabling users to upload
        images easily and receive instant results, making skincare advice
        accessible to a broader audience.
      </p>
      <div className={styles.advboxcon}>
        <h1>03</h1>
        <FaUserFriends size={54} style={{ color: "#AA9FEE" }} />
      </div>
    </div>
  </div>
</div>;

      <h1 style={{ marginLeft: "2rem" }} className={styles.h1acne}>Acne Type Classification</h1>
      <div className={styles.acnecon}>
         <div className={styles.acnebox}><div className={styles.acneoverlay}><h2>Blackheads</h2><p>Blackheads are open comedones caused by clogged pores filled with oil and dead skin cells. They appear as small, dark spots on the skin due to oxidation.</p></div></div>
         <div className={styles.acnebox}><div className={styles.acneoverlay}><h2>Whiteheads</h2><p>Whiteheads are closed comedones where pores are clogged with oil and dead skin cells. Unlike blackheads, they remain under the skin, appearing as white or flesh-colored bumps.</p></div></div>
         <div className={styles.acnebox}><div className={styles.acneoverlay}><h2>Nodules</h2><p>Nodules are severe acne lesions that develop deep within the skin. They are painful, hard, and can leave permanent scars if not treated effectively.</p></div></div>
         <div className={styles.acnebox}><div className={styles.acneoverlay}><h2>Papules</h2><p>Papules are small, red, and inflamed pimples caused by irritation or infection in clogged pores. They are tender to the touch and lack visible pus.</p></div></div>
         <div className={styles.acnebox}><div className={styles.acneoverlay}><h2>Postules</h2><p>Pustules are similar to papules but contain pus, appearing as red bumps with a white or yellow center. They are often caused by bacterial infection in clogged pores.</p></div></div>
         <div className={styles.acnebox}><div className={styles.acneoverlay}><h2>Cysts</h2><p>Cysts are large, painful, and pus-filled acne lesions that form deep under the skin. They are severe and often require professional treatment to prevent scarring.</p></div></div>
      </div>
      <h1  className={styles.h1choose}>Why Choose Us?</h1>
      <div className={styles.page3}>
          <div className={styles.pg3left}>
          <div>
          <video src={video} autoPlay muted loop />
          </div>
             

        
          </div>
      </div>
            <div className={styles.benefitscon}>
               <div className={styles.benefitsdiv}><h3><GrMoney size={34}  />
               Cost affective</h3><p>Eliminates transportation, hospital and consultation charges.</p></div>
               <div className={styles.benefitsdiv}><h3><IoTime size={34} />24/7 Availability</h3><p>Available 24/7, allowing users to get help without waiting for clinic hours.</p></div>
               <div className={styles.benefitsdiv}><h3><IoAccessibility size={34} />Accessibility </h3><p>Access healthcare advice from homes without visiting hospital.</p></div>
               <div className={styles.benefitsdiv}><h3><RiChatPrivateFill  size={34}  />Privacy</h3><p>Tailored to individual concerns while maintaining user anonymity.</p></div>
            </div>
           
          
       
     
    </div>
  )
}

export default Landing