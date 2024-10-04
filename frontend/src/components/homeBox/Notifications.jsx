import React from 'react'
import CourseReqList from './CourseReqList'
import Header from './Header'

const Notifications = () => {
  return (
    <div>
      <Header/>
      <div className='w-[60%] mx-auto p-5'>
        <h1 className='font-bold text-2xl mb-5'>Notifications</h1>
        <CourseReqList/>
      </div>
      
        
    </div>
  )
}

export default Notifications