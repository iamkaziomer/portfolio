import React from 'react'
import HeroSection from './_HomeComponents/Hero'
import About from './_HomeComponents/About'
import TechStack from './_HomeComponents/TechStack'
import Projects from './_HomeComponents/Projects'
import Contact from './_HomeComponents/Contact'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <About/>
      <TechStack/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default page
