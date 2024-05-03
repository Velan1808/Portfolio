import React from 'react'
import './About.css'
import MyImage from '../../assests/image2.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
        <h2 className='about-heading' >About Me</h2>
        <div className='details'>
            <img className='' src={MyImage} alt="" />
            <p className=''>
            As a junior web developer proficient in HTML, CSS, JavaScript, React.js, Tailwind CSS, and GitHub, I've crafted diverse projects including a food delivery website, YouTube clone, e-commerce platform, and weather app. Completing Novitech's full-stack development course equipped me with a solid foundation in both front-end and back-end technologies. While I am new to the field, I am enthusiastic about contributing to innovative projects and eager to learn and grow. With a strong association with the IT field and a passion for web development, I am now seeking opportunities to apply my skills and make meaningful contributions to dynamic teams.
             </p>
        </div>
    </div>
  )
}

export default About