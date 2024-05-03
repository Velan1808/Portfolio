import React from 'react'
import './Skills.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Skills = () => {

  return (
    <div id='skills' className='skills'>
        <h2 className='heading'>Skills</h2>
        <div>
          <ul className='my_skills'>
              <li className=''> <FaHtml5 className='icon HTML'/> HTML - 95%</li>
              <li className='' > <FaCss3Alt  className='icon CSS'/> CSS - 90%</li>
              <li className=''> <TbBrandJavascript  className='icon javascript'/> JavaScript - 80%</li>
              <li className=''> <FaReact  className='icon react'/> React Js - 75%</li>
              <li className=''> <SiTailwindcss  className='icon tailwind'/> Tailwind CSS - 70%</li>
              <li className=''> <FaGithub  className='icon github'/> GitHub - 70%</li>
          </ul>
        </div>
    </div>
  )
}

export default Skills