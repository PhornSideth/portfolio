import React, { useState } from 'react'
import Loading from './components/Loading'
import './index.css'
import Navbar from './components/section/Navbar'
import MobileMenu from './components/MobileMenu'
import Home from './components/section/Home'
import About from './components/section/About'
import Projects from './components/section/Projects'
import Contact from './components/section/Contact'
const App = () => {
  const [loaded,setIsLoaded]=useState(false)
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <>
      {!loaded && <Loading onComplet={()=>setIsLoaded(true)}/>}{" "}
        <div className={`min-h-screen transition-opacity duration-700 ${loaded ?'opacity-100':'opacity-0'} `}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        </div>
        
    </>
  )
}

export default App