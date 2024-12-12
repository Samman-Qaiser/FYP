import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Circles = () => {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#circle-con',
                start: 'top 30%',
                end: 'top 10%',

                scrub: true,
            },
        });

        tl.from('.circle', {

            scale: 0,
            duration:6,
          
            stagger: -0.2,
        });
        tl.to('.circle', {

            scale: 1,

          
            stagger: 0.2,
        });

    }, []);
    return (
        <div id='circle-con'>
            <div className='circle c-one'><span></span>Dataset Prepration</div>
            <div className='circle c-two'><span></span>Image<br /> Preprocessing</div>
            <div className='circle c-three'><span></span>Model Training</div>
            <div className='circle c-four'><span></span>Model Testing</div>
            <div className='circle c-five'><span></span>Performance <br />Evaluation</div>

        </div>
    )
}

export default Circles