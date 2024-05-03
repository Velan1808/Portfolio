import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

  const [menu, SetMenu] = useState([])

  return (
    <nav className='navbar'>
        <h2 className='nav-name'>velan</h2>

        <ul className='menu-list'>
           <a href="#home"><li className={menu==='home'?'active':''} onClick={()=>SetMenu('home')}>Home</li></a>
            <a href="#about"> <li className={ `${menu==='about'? 'active' : ''}`} onClick={()=>SetMenu('about')}>About Me</li></a>
           <a href="#skills"><li className={`${menu==='skills'? 'active' : ''}`} onClick={()=>SetMenu('skills')} >Skills</li></a>
            <a href="#project"><li className={`${menu==='project'? 'active' : ''}`} onClick={()=>SetMenu('project')}>Project</li></a>
            <a href="#footer"> <li className={`${menu==='contact'?'active' : ''}`} onClick={()=>SetMenu('contact')}>Contact</li></a>
           
        </ul>
    </nav>
  )
}

export default Navbar