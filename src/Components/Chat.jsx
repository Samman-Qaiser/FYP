import React, { useState } from 'react'
import { ImBin } from "react-icons/im";
import logo from '/logoWhite.jpg'
import styles from './Chat.module.css'
import { FaPaperPlane, FaImage } from 'react-icons/fa';
import {  FaSearch } from 'react-icons/fa';
import { IoMdExit } from "react-icons/io";
import { FaRegPenToSquare } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
const Chat = ({userName}) => {
  const[showdialogue,setshowdialogye]=useState(false)
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSendMessage = () => {
    if (message || selectedFile) {
      console.log('Message:', message);
      console.log('Selected file:', selectedFile);
      setMessage('');
      setSelectedFile(null);
    }
  };
  return (
    <> 
    <div>
    <nav style={{backgroundColor:"#9588E8",height:"15vh"}}>
         <div><img src={logo} className={styles.logo} style={{marginTop:"0rem"}}/></div>
       <div className={styles.usernav}>
         <img src='https://i.pinimg.com/736x/c7/9a/37/c79a37e13ef14be556b51143bcbb1b01.jpg' />
        {userName}
        <RiArrowDropDownLine  size={34}   style={{ cursor: "pointer" }} onClick={()=>{setshowdialogye(!showdialogue)}}/>
       </div>
          </nav>
          <div className={styles.person} style={{ display: showdialogue? "block" : "none" }}>
             <div className={styles.info}>
          <img src='https://i.pinimg.com/736x/c7/9a/37/c79a37e13ef14be556b51143bcbb1b01.jpg' />
          <h2>{userName}</h2>
          <p>View/Edit Profile</p>
              </div>
        <hr />
        <div className={styles.btncon}>
          <button className={styles.btn}><ImBin style={{  fontSize: "1.2rem" }} />Delete Account</button>
          <button className={styles.btn}><IoMdExit style={{  fontSize: "1.2rem" }} /> Logout</button>
        </div>

          </div>
           <div className={styles.chatcon}>
            <div className={styles.chatleft}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",wclassNameth:"100%",padding:"0.3rem",color:"#9588E8",boxSizing:"border-box"}}>
              <h2>Your Chat History</h2>
              <div style={{gap:"0.7rem",display:"flex",alignItems:"center"}}>
              <FaSearch size={25} style={{fontWeight:"bolder"}}/>
              <FaRegPenToSquare size={25}/>
              </div>
            
              </div>
            </div>
            <div className={styles.chatright} style={{ width: '80%', background: '#fff', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, padding: '1rem', overflowY: 'scroll' }}>
          {/* Chat messages can be displayed here */}
          <p style={{ color: '#aaa', textAlign: 'center' }}>No messages yet...</p>
        </div>

        {/* Chat Input Field */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            borderTop: '1px solid #ddd',
            background: '#f9f9f9',
          
          }}
        >
          {/* File Upload Button */}
          <label htmlFor="file-upload" style={{ cursor: 'pointer', marginRight: '1rem' }}>
            <FaImage size={30} color="#9588E8" style={{transform:"translateY(5%)"}} />
          </label>
          <input
            type="file"
            id="file-upload"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            accept="image/*"
          />

          {/* Text Input */}
          <input
            type="text"
            value={message}
            placeholder="Type your message..."
            onChange={(e) => setMessage(e.target.value)}
            style={{
              flex: 1,
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              border: '1px solid #ddd',
              outline: 'none',
              fontSize: '1rem',
            }}
          />

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            style={{
              marginLeft: '1rem',
              backgroundColor: '#9588E8',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <FaPaperPlane size={18} />
          </button>
        </div>
        </div>
           </div>
    </div>
         
    </>
   
  )
}

export default Chat