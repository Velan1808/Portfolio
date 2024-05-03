import React from 'react'
import './Project.css'
import { project_list } from '../../assests/assest'
import ProjectItem from '../ProjectItem/ProjectItem'


const Project = () => {
  return (
    <div id='project' className='project'>
        <h2 className='heading'>My Projects</h2>
        <div className='project-item'>
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