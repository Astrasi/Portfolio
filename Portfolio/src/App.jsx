// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navigation/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWorks from './Components/MyWorks/MyWorks'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWorks/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
