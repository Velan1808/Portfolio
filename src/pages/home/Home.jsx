import React from 'react'
import Navbar from '../../Component/navbar/Navbar'
import HomePage from '../../Component/Homapage/HomePage'
import About from '../../Component/About/About'
import Skills from '../../Component/Skills/Skills'
import Project from '../../Component/Project/Project'
import Footer from '../../Component/Footer/Footer'

const Home = () => {
  return (
    <div>
       <Navbar />
       <HomePage />
       <About />
       <Skills />
       <Project />
       <Footer />
    </div>
  )
}

export default Home