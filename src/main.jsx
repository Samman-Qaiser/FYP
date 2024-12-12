import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Landing from './Components/Landing.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'
import Howitwork from './Components/Howitwork.jsx'
import FAQ from './Components/FAQ.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
       <Route path='/' element={<Landing />}/>
       <Route path='about' element={<About />}/>
       <Route path='/services' element={<Services />}/>
       <Route path='/working' element={<Howitwork />}/>
       <Route path='/faqs'   element={<FAQ/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
