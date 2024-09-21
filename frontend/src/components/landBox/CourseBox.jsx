import React from 'react'

const CourseBox = ({coursename,imgg,desc}) => {
  return (
    <div className='border shadow flex mb-3 p-2'>
        <div className='p-4'>
            <div className='text-center'>
                <img src={imgg} alt='course' height={"250px"} width={"300px"}/>
            </div>
           
        </div>
        <div className='p-4'>
            <h4 className='text-2xl'>{coursename}</h4>
            <p className='text-[11px]'>{desc} <span className='font-bold text-blue'>Get Certfifed</span></p>
        </div>
    </div>
  )
}

export default CourseBox