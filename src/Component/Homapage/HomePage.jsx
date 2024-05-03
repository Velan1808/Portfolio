import React from 'react'
import './HomePage.css'
import MyImage from '../../assests/image3.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const HomePage = () => {
  return (
    <div id='home' className='homepage'>
        <div className='home-left'>
            <h1 className=''>I am <span className='name'>VELAN</span></h1>
            <h2>Junior Web Developer</h2>
            <div className='social-icons'>
                <div className='icon '> <a href="https://www.linkedin.com/in/velank18/"><FaLinkedin className='linkedin'/></a> </div>
                <div className='icon '> <a href="https://github.com/Velan1808"><FaGithub className='github'/></a></div>
                <div className='icon'> <a href="https://wa.me/916369961739"><FaWhatsappSquare className='whatsapp'/></a></div>
            </div>

            <a href="VELAN_Resume.pdf" download="Resume.pdf"> <button className=''>View Resume</button></a>
        </div>

        <div className='home-right' id='image'>
          <div className=''>
               <img className='' src={MyImage} alt="" />
          </div>
        </div>
    </div>
  )
}

export default HomePage