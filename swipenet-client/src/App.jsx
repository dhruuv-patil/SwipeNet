import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './components/card/card.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Card from './components/card/Card'

function App() {
  return (
    <>
    <div class="foreground">
      <Navbar/>
      <HeroSection/>
      
    </div>
    </>
  )
}

export default App;
