import { useState } from 'react'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'
import Howitwork from './Components/Howitwork.jsx'
import FAQ from './Components/FAQ.jsx'
import Contact from './Components/Contact.jsx'
import Chat from './Components/Chat.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Components/Footer.jsx'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { path } from 'framer-motion/client'
function App() {
const [userName,setuserName]=useState("")
const [isLoggedIn,setLoggedIn]=useState(false)
function Layout({children}){
const location=useLocation()
const hideNavbarAndFooter=['/chat','/login','/signup'].includes(location.pathname)
return(
  <>
    {!hideNavbarAndFooter&&<Navbar />}
    <div>{children}</div>
    {!hideNavbarAndFooter&&<Footer />}
  </>
)
}
  return (
    <>
     <Router>
     <Layout>
     <Routes>

<Route path='/' element={<Landing />}/>
 <Route path='about' element={<About />}/>
 <Route path='/services' element={<Services />}/>
 <Route path='/contact' element={<Contact />}/>
 <Route path='/working' element={<Howitwork />}/>
 <Route path="/chat"   element={isLoggedIn? (<Chat userName={userName} />):(<Navigate to='/login' replace/>)}/>
 <Route path='/faqs'   element={<FAQ/>}/>
 <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setuserName={setuserName}/>} />
 <Route path='/signup' element={<Signup />}/>
</Routes>
     </Layout>
     
     </Router>
    </>
  )
}

export default App
