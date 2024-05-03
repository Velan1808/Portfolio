import React from 'react'
import './HomePage.css'
import MyImage from '../../assests/image3.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const HomePage = () => {
  return (
    <div id='home' className='w-screen h-max flex flex-col-reverse md:flex-row  justify-center items-center lg:gap-2 sm:gap-y-10 relative lg:-top-5 sm:top-4 my-20'>
        <div className='lg:w-10/12 sm:w-10/12 ml-10 flex items-center justify-center flex-col'>
            <h1 className='text-2xl font-bold mb-3'>I am <span className='text-orange-500'>VELAN</span></h1>
            <h2  className='text-orange-400 text-3xl font-bold'>Junior Web Developer</h2>
            <div className='flex items-top gap-4 mt-5 '>
                <div className='mt-6 hover:mt-5 '> <a href="https://www.linkedin.com/in/velank18/"><FaLinkedin className='w-10  h-10 text-blue-600'/></a> </div>
                <div className='mt-6 hover:mt-5 '> <a href="https://github.com/Velan1808"><FaGithub className='w-10  h-10 text-black-600'/></a></div>
                <div className='mt-6 hover:mt-5 '> <a href="https://wa.me/916369961739"><FaWhatsappSquare className='w-10  h-10 text-green-600'/></a></div>
            </div>

            <a href="VELAN_Resume.pdf" download="Resume.pdf"> <button className='px-5 py-2 mt-6 bg-blue-500 text-white  hover:bg-blue-400 hover:text-black rounded-lg shadow-xl font-medium'>View Resume</button></a>
        </div>

        <div className=' flex justify-center lg:w-full sm:w-10/12' id='image'>
          <div className='Myimage w-1/2 flex justify-center items-center py-3 px-10'>
               <img className='w-80 rounded-full my-6 -ml-6' src={MyImage} alt="" />
          </div>
        </div>
    </div>
  )
}

export default HomePage