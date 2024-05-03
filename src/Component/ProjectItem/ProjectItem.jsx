import React from 'react'
import './ProjectItem.css'

const ProjectItem = ({item}) => {
  return (
    <div>
        <div  className='project_card'>
            <div className='card-top'>
                <img src={item.image} alt="" className='w-5/6 mx-8 mb-4'  />
                <h2 className='font-bold text-xl text-red-500 flex justify-center'>{item.project_name}</h2>
            </div>
            <p className='technology'>Technology: {item.technology}</p>
            <p className='details'>{item.description}</p>
            <div className='project-link'>
                <a href={item.link} className='bg-blue-500 px-2 py-1 rounded-md w-2/3 mx-3 flex justify-center font-semibold hover:bg-orange-500 text-white'> View Website</a>
                <a href={item.github_link} className='bg-blue-500 px-2 py-1 rounded-md w-2/3 mx-3 flex justify-center font-semibold hover:bg-orange-500 text-white'>View Code</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem