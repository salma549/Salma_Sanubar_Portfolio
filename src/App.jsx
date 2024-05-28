import React from 'react'
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'
import SocialLinks from './components/SocialLinks'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <NavBar/>
      <Home />
      <About />
      <SocialLinks />
      <Portfolio />
      <Experience />
      <Contact/>
   </div>

  )
}

export default App