import React, { useState } from 'react'
import { ImBin } from "react-icons/im";
import logo from '/logoWhite.jpg'
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
         <div><img src={logo} id='logo' style={{marginTop:"0rem"}}/></div>
       <div id='usernav'>
         <img src='https://i.pinimg.com/736x/c7/9a/37/c79a37e13ef14be556b51143bcbb1b01.jpg' />
        {userName}
        <RiArrowDropDownLine  size={34}   style={{ cursor: "pointer" }} onClick={()=>{setshowdialogye(!showdialogue)}}/>
       </div>
          </nav>
          <div id='person' style={{ display: showdialogue? "block" : "none" }}>
        <div id='info'>
          <img src='https://i.pinimg.com/736x/c7/9a/37/c79a37e13ef14be556b51143bcbb1b01.jpg' />
          <h2>{userName}</h2>
          <p>View/Edit Profile</p>
        </div>
        <hr />
        <div id='btn-con'>
          <button className='btn'><ImBin style={{  fontSize: "1.2rem" }} />Delete Account</button>
          <button className='btn'><IoMdExit style={{  fontSize: "1.2rem" }} /> Logout</button>
        </div>

          </div>
           <div className='chat-con'>
            <div id='chat-left'>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0.3rem",color:"#9588E8",boxSizing:"border-box"}}>
              <FaSearch size={25} style={{fontWeight:"bolder"}}/>
              <FaRegPenToSquare size={25}/>
              </div>
            </div>
            <div id="chat-right" style={{ width: '80%', background: '#fff', display: 'flex', flexDirection: 'column' }}>
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
            <FaImage size={24} color="#9588E8" />
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