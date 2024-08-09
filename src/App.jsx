// import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import * as $ from "jquery" 
import Layout from "./components/design_components/layout"
import About from './components/pages_components/about_section/about_page/About'
import Home from "./components/pages_components/Home"
import Contact from "./components/pages_components/Contact"
import Service from './components/pages_components/Service'
import Gallery from './components/pages_components/Gallery'
import Blog from './components/pages_components/Blog'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'




function App() {
  
useEffect(()=>{
  Aos.init();
})
  return (
    <>
   
     <Router>
      <Routes>
        <Route path='/' element= {<Layout />} >
        <Route path = "" element={<Home />}/>
       
        <Route path = "about" element={<About />}/>

        <Route path = "service" element={<Service />}/>
        <Route path = "gallery" element={<Gallery />}/>
        <Route path = "contact" element={<Contact />}/>
        <Route path = "blog" element={<Blog />}/>

        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
