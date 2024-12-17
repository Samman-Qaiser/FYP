import React from 'react'
import video from '/modelVedio.mp4'
import image from '/modelImage.png'
const HeroSection = () => {
  return (
    <>
          <div className='hero-con'>
        <div className='hero-con-left'>
        <div>
        <h1>
        Your Personalized Companion <br/> for Smarter <span style={{color:'#9588E8'}}>Acne Detection</span>
        </h1>
            <p>Personalized solutions for every skin type, backed by advanced detection and prevention tools. Using advanced AI and healthcare expertise, our chatbot delivers personalized recommendations to address unique skin concerns. Detect your acne type to get started.</p>
            <button className='button'>Get Started</button>
        </div>
           
        </div>
        <div className='hero-con-right'>
        <img src='/blob2.gif' id='blob' style={{position:"absolute",right:"-10%",width:"260px",top:"0"}} />
        <img src={image} />
        <div className='model-box' id='model-box-1' style={{left:"-20%",top:"50%"}}>Upload, classify, treat—achieve your best skin ever!</div>
        <div className='model-box' id='model-box-2' style={{right:"0%",top:"90%"}}>Get personalized acne care with just a photo!</div>
        <div className='model-box' id='model-box-3' style={{left:"-10%",top:"0%"}}>Detect, classify, and treat—your path to clearer skin.</div>
          {/* <video src={video}  muted  loop autoPlay/> */}
        </div>
    </div>
    <div className='hero-b-con'>
    <div className='hero-below'>
    <div className='hero-b-head'>
    <h1>01</h1>
    <h2>AI-Powered Acne Detection and Classification</h2>
    </div>
   
      <p>Discover clearer skin with our AI-powered web app! Upload a photo to detect and classify facial acne, providing instant, accurate results. Your journey to healthier skin starts here!</p>
    </div>
    </div>
   
    </>
    
  )
}

export default HeroSection