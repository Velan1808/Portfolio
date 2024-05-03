import React from 'react'

const ProjectItem = ({item}) => {
  return (
    <div >
        <div className=' bg-gray-300 p-3 mb-4 rounded-lg flex flex-col shadow-xl h-full relative hover:bg-white'>
            <div className='flex flex-col justify-center'>
                <img src={item.image} alt="" className='w-5/6 mx-8 mb-4'  />
                <h2 className='font-bold text-xl text-red-500 flex justify-center'>{item.project_name}</h2>
            </div>
            <p className='mx-5 font-medium text-sm my-2'>Technology: {item.technology}</p>
            <p className='mx-5 font-medium text-sm mb-2 flex justify-center'>{item.description}</p>
            <div className='grid grid-cols-2'>
                <a href={item.link} className='bg-blue-500 px-2 py-1 rounded-md w-2/3 mx-3 flex justify-center font-semibold hover:bg-orange-500 text-white'> View Website</a>
                <a href={item.github_link} className='bg-blue-500 px-2 py-1 rounded-md w-2/3 mx-3 flex justify-center font-semibold hover:bg-orange-500 text-white'>View Code</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem