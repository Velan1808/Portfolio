import React from 'react'
import { project_list } from '../../assests/assest'
import ProjectItem from '../ProjectItem/ProjectItem'


const Project = () => {
  return (
    <div id='project' className='w-screen  flex flex-col items-center gap-5 py-10'>
        <h2 className='text-3xl font-bold'>My Projects</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mx-10'>
           {project_list.map((item, index)=>{
            return(
                <ProjectItem key={index} item={item} />
            )
           })}
        </div>
    </div>
  )
}

export default Project