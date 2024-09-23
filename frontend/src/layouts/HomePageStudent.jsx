import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext'
import api from '../api/axiosConfig';
import { useQuery } from 'react-query'
import { fetchUserData } from '../api-client';
import CourseBox from '../components/landBox/CourseBox';

import Header from '../components/homeBox/Header';


const HomePageStudent = () => {
  const {data : userdata} = useQuery('fetchUserData',fetchUserData);

  

  
  
  return (
    <div>
      <Header/>

      <main className='mt-5 w-[92%] mx-auto flex flex-col justify-between sm:flex-row text-[#2d4ca9]'>
        
        <div className='w-[100%] sm:w-[27%] border p-4 flex flex-col rounded-lg '>
          <p className='text-2xl font-semibold mb-3 mx-auto'>Personal Details</p>
          <img src='https://via.placeholder.com/200' alt='profile' className='mx-auto rounded-full' />
          <button className='bg-blue w-max mx-auto mt-1 rounded text-white p-1 text-[10px] cursor-pointer'>Add Photo</button>
          <p className='text-xl font-semibold mt-2 mx-auto'>{userdata?.name}</p>
          <p className='text-sm font-normal mt-2 mx-auto'>{userdata?.email}</p>
          <p className='text-sm font-normal mx-auto'>{userdata?.phone}</p>

          <div className='mt-4 mx-auto'>
            <h1 className='text-xl font-semibold'>Education</h1>
            {
              !userdata?.education ? 
              <button className='bg-blue w-max mx-auto mt-1 rounded text-white p-1 text-[10px] cursor-pointer'>Add Education</button>
              :
              <div>
                <p className='text-sm '>{userdata?.education}</p>
              </div>
            }
            
          </div>

          <div className='mt-4 mx-auto flex flex-col justify-center'>
            <h1 className='text-xl font-semibold'>Work Experience</h1>
            {
              !userdata?.experience ? 
              <button className='bg-blue w-max mx-auto mt-1 rounded text-white p-1 text-[10px] cursor-pointer'>Add Work Experience</button>
              :
              <p className='text-sm'>{userdata?.experience}</p>
            }
            
          </div>
        </div>

        <div className='w-[100%] sm:w-[70%] border p-4 rounded-lg'>
          <h1 className='font-semibold text-xl'>Courses Enrolled</h1>
          {
            userdata?.courses?.length>0
            ?
            <div className='mt-4'>
              {
                userdata.courses.map((course,index) => {
                  return <CourseBox key={index} coursename={course.courseName} imgg="/images/comp2.avif" desc={course.courseDescription} coursePrice={course.coursePrice} courseRegDate={course.courseRegDate} courseDuration={course.courseDuration} courseInstructor={course.courseInstructor} status={"In progress"}  />
                })
              }
            </div>
            :
            <>
            <p className='text-gray-500 mt-5'>Oops ! You haven't enrolled in any Courses yet !</p>
            <p className='text-blue'>Explore our 50+ courses and enroll ASAP to claim exclusive offers</p>
            
            </>
          }
        </div>
      </main>
    </div>
  )
}

export default HomePageStudent