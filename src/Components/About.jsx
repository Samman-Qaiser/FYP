
import style from './about.module.css';
import Detection from '/detection.jpg';
import Medication from '/medication.png';
import DoctorMeeting3 from '/doctormeeting3.jpeg';
import Privacy from '/privacy.jpeg';
import AIHealthcare from '/aiHealthcare.jpeg';
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { GrSecure } from "react-icons/gr";
import { useEffect, useState } from "react";
import splitFaceMale from '/splitFaceMale.jpeg';
import splitFaceFemale from '/splitFaceFemale.jpeg';
import HyperPigmentation from "/hyperPigmentation.jpg";


export default function About() {
    const [isAnimated, setIsAnimated] = useState(false);
    const [isFade, setIsfade] = useState(true);
    const [index, setIndex] = useState(0);
    const [animationState, setAnimationState] = useState("slidein");
    const contentArray = [{
        img: splitFaceMale,
        text: 'The impact of acne on the skin is clearly demonstrated in the above picture.  Clear, healthy skin is often associated with confidence and vitality, while acne can lead to feelings of self-consciousness and lower self-esteem.'
    },
    {
        img: splitFaceFemale,
        text: 'The impact of acne on the skin is clearly demonstrated in the above picture.  Clear, healthy skin is often associated with confidence and vitality, while acne can lead to feelings of self-consciousness and lower self-esteem.'
    },
    {
        img: HyperPigmentation,
        text: 'Hyperpigmentation is a common aftermath of acne, where dark spots or patches develop due to increased melanin production in response to skin inflammation. Early acne treatment and proper skincare can help minimize the risk of hyperpigmentation'
    }
    ];

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        console.log(scrollPosition);
        if (scrollPosition > 450) {
            setIsAnimated(true);
        } else {
            setIsAnimated(false);
        }
        if(scrollPosition >= 390 && scrollPosition <= 1430){
            setIsfade(false);
        }else{
            setIsfade(true);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationState("slideout");
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
                setAnimationState("hidden");
                setTimeout(() => {
                    setAnimationState("slidein");
                }, 50);
            }, 500);
        }, 5000);
        return () => clearInterval(interval);
    }, [contentArray.length]);



    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        localStorage.setItem("storedValue", 1);
    }, []);
    return (
        <div className={style.about}>
        
            <div className={style.container}>
                <div className={style.herosection}>
                    <div className={style.heroheadingdiv}>
                        <p className={style.heroheading}>Combining AI and healthcare insights to assist users in their skincare free of cost</p>
                        <p className={style.herodesc}>In today’s busy world, skincare often takes a backseat as hectic routines and the belief that it’s costly discourage many. However, maintaining healthy skin doesn’t have to be expensive or time-consuming. Simple habits like cleansing, moisturizing, and applying sunscreen can easily fit into a packed schedule, keeping your skin healthy and protected without breaking the bank.</p>
                    </div>
                    <img src={DoctorMeeting3} className={`${style.heroimg} ${isFade ? style.fadein : ''}`} />
                </div>
                <div className={style.ouraimdiv}>
                    <p style={{ margin: '30px', fontSize: '40px', fontWeight: '500', color: 'white' }}>Our aim</p>
                    <p className={style.aimdesc}>Using advanced AI and healthcare expertise, our chatbot
                        delivers personalized recommendations to address unique skin
                        concerns.<p className={style.conditionallyhiddentext}> The system aims to make acne care accessible,
                            efficient, and personalized while educating users about proper skincare practices.</p></p>
                    <p className={style.aimdesc} style={{ marginTop: '20px' }}>To create an intelligent chatbot that assists users in identifying acne types, suggesting
                        appropriate skincare routines, recommending over-the-counter treatments, and providing
                        preventive measures to improve skin health, based on user inputs and uploaded images.</p>
                </div>
                <p className={style.services}>Services we offer</p>
                <div className={`${style.descriptioncontainer} ${isAnimated ? style.animate : ''}`}>
                    <div className={style.advantage} style={{ background: '#dbd8f0' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: '20px' }}>
                            <div className={style.icondiv}>
                                <p style={{ color: 'white', textAlign: 'center', fontSize: '17px' }}>   <IoSearchOutline  color="white" /></p>
                             
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>Acne detection</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <img src={Detection} width='85%' height={200} />
                        <p style={{ margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>By analyzing your skin type and identifying the specific acne category, we provide tailored recommendations to help you manage and treat acne more effectively. Our system delivers expert insights for healthier, clearer skin.</p>
                    </div>
                    <div className={style.advantage} style={{ background: '#dbd8f0' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: '20px' }}>
                            <div className={style.icondiv}>
                            <p style={{ color: 'white', textAlign: 'center', fontSize: '17px' }}> 
                                  <MdOutlineHealthAndSafety color="white" />
                    </p>
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>Preventive measures</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <img src={DoctorMeeting3} width='85%' height={200} />
                        <p style={{ margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Prevention is essential for clear skin. Our app offers personalized tips, from skincare routines to lifestyle and dietary changes, all tailored to your skin type. Reduce breakouts and maintain a glowing complexion with expert advice designed for your unique needs.</p>
                    </div>
                    <div className={style.advantage} style={{ background: '#dbd8f0' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: '20px' }}>
                            <div className={style.icondiv}>
                            <p style={{ color: 'white', textAlign: 'center', fontSize: '17px' }}> 
                                <AiOutlineMedicineBox  color="white" />
                                </p>
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>Medication</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <img src={Medication} width='85%' height={200} />
                        <p style={{margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4'}}>Based on your acne type and skin condition, we provide personalized medication suggestions, including over-the-counter options and professional treatments. Our AI-driven recommendations ensure you receive the right care for clearer, healthier skin.</p>
                    </div>
                    <div className={style.advantage} style={{ background: '#dbd8f0' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: '20px' }}>
                            <div className={style.icondiv}>
                                <p style={{ color: 'white', textAlign: 'center', fontSize: '20px' }}><GrSecure  style={{ color: 'white', textAlign: 'center', fontSize: '17px' }} /></p>
                                
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>User privacy</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <img src={Privacy} width='85%' height={200} />
                        <p style={{margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4'}}>We ensure all your personal and skin data is kept secure and confidential. Our app protects your anonymity, with no sharing of information to third parties. Access personalized acne detection and treatment confidently, knowing your data remains private.</p>
                    </div>
                </div>
                <div className={style.whyitmattersdiv}>
                    <p style={{ fontSize: '40px', fontWeight: '500' }}>Why It Matters</p>
                    <div className={style.mattercontainer}>
                        <div className={`${style.matters} ${style[animationState]}`}>
                            <img src={contentArray[index]['img']} className={style.matterimg}>
                            </img>
                            <p style={{margin: '10px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4'}}>{contentArray[index]['text']}</p>
                        </div>
                    </div>
                </div>
                <div className={style.herosection}>
                <img src={AIHealthcare} className={`${style.heroimg} ${isFade ? style.fadein : ''}`} />
                    <div className={style.heroheadingdiv}>
                        <p className={style.heroheading}>Custom-trained AI model for Detecting Acne</p>
                        <p className={style.herodesc}>Revolutionizing skincare with a custom-trained AI model specifically designed for acne detection. This advanced solution accurately identifies acne types, provides preventive tips, and offers tailored treatment plans to promote healthier, clearer skin.</p>
                    </div>
                </div>
            </div>
      
        </div>

    );
}