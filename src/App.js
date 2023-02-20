import './App.css'
import React from 'react'
import Navi from './components/navi/Navi'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
        <Navi/>
        <Hero/>
        {/* <Profile/>
        <Projects/>
        <Contacts/> */ }
        <Footer/>
    </>
  );
}

export default App
