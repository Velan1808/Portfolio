import React, { useState } from 'react'

const Navbar = () => {

  const [menu, SetMenu] = useState([])

  const list_style ='px-5 py-2 mx-3 bg-orange-300 font-medium rounded-xl text-base hover:bg-orange-600 hover:text-white cursor-pointer transition-colors duration-400' 

  return (
    <nav className='bg-orange-400 p-3 sticky top-0 z-10 flex flex-row flex-space justify-between drop-shadow-xl '>
        <h2 className='text-4xl font-bold text-black '>velan</h2>

        <ul className='flex flex-row justify-around '>
           <a href="#home"><li className={`${list_style} ${menu==='home'? 'text-white bg-orange-600' : ''}`} onClick={()=>SetMenu('home')}>Home</li></a>
            <a href="#about"> <li className={`${list_style} ${menu==='about'? 'text-white bg-orange-600' : ''}`} onClick={()=>SetMenu('about')}>About Us</li></a>
           <a href="#skills"><li className={`${list_style} ${menu==='skills'? 'text-white bg-orange-600' : ''}`} onClick={()=>SetMenu('skills')} >Skills</li></a>
            <a href="#project"><li className={`${list_style} ${menu==='project'? 'text-white bg-orange-600' : ''}`} onClick={()=>SetMenu('project')}>Project</li></a>
            <a href="#footer"> <li className={`${list_style} ${menu==='contact'?'text-white bg-orange-600' : ''}`} onClick={()=>SetMenu('contact')}>Contact</li></a>
           
        </ul>
    </nav>
  )
}

export default Navbar