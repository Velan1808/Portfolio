import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Skills = () => {

  const list_icon='flex gap-2 font-semibold text-2xl text-black justify-start items-center bg-white px-6 py-3 rounded-xl shadow-xl scale-100 cursor-pointer'

  const icon_animation = 'hover:bg-orange-100 duration-100 delay-100 '
  return (
    <div id='skills' className=' pt-4 flex flex-col justify-center items-center gap-4 w-screen h-3/4 pb-10'>
        <h2 className='text-4xl font-bold pb-3'>Skills</h2>
        <div>
          <ul className='grid grid-cols-2 gap-12 '>
              <li className={`${list_icon} ${icon_animation}`}> <FaHtml5 className='w-20 h-20 text-red-500'/> HTML - 95%</li>
              <li className={`${list_icon} ${icon_animation}`}> <FaCss3Alt  className='w-20 h-20 text-blue-700 '/> CSS - 90%</li>
              <li className={`${list_icon} ${icon_animation}`}> <TbBrandJavascript  className='w-20 h-20 text-yellow-500'/> JavaScript - 80%</li>
              <li className={`${list_icon} ${icon_animation}`}> <FaReact  className='w-20 h-20 text-blue-400'/> React Js - 75%</li>
              <li className={`${list_icon} ${icon_animation}`}> <SiTailwindcss  className='w-20 h-20 text-blue-600'/> Tailwind CSS - 70%</li>
              <li className={`${list_icon} ${icon_animation}`}> <FaGithub  className='w-20 h-20 text-back'/> GitHub - 70%</li>
          </ul>
        </div>
    </div>
  )
}

export default Skills