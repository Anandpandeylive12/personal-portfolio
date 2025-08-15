import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const App = () => {

useEffect(() => {
  AOS.init({
    duration: 1500,
    once: true,
  });
}, []);

  return (
    
    <main>
      {/* gradient image */}
      <img className='absolute top-0 right-0 opacity-60 -z-10' src="src\assets\gradient.png" alt="gradient-png"  />
      {/* blur effect */}
      <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10'>
      </div>
      <Header/>
      <Hero/>
    </main>
  )
}

export default App