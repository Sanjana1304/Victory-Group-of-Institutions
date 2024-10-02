import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import { fetchUserData } from '../api-client';
import CourseBox from '../components/landBox/CourseBox';

import Header from '../components/homeBox/Header';
import Modal from './Modal';
import EduForm from '../components/homeBox/EduForm';
import ExpForm from '../components/homeBox/ExpForm';


const HomePageStudent = () => {
  const {data : userdata} = useQuery('fetchUserData',fetchUserData);

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isAuthOpenExp, setIsAuthOpenExp] = useState(false);
  

  const [isEduAdded, setIsEduAdded] = useState(false);

  //console.log(userdata);

  const addEduForm = () => {
    setIsAuthOpen(true);
  }

  const addExpForm = () => {
    setIsAuthOpenExp(true);
  }

  const closeAuth = () => {
    setIsAuthOpen(false);
  };

  const closeAuthExp = () => {
    setIsAuthOpenExp(false);
  }

  return (
    <div>
      <Header/>

      <main className='mt-5 w-[92%] mx-auto flex flex-col justify-between sm:flex-row text-[#2d4ca9]'>
        
        <div className='w-[100%] sm:w-[27%] border p-4 flex flex-col rounded-lg '>
          <p className='text-2xl font-semibold mb-3 mx-auto'>Personal Details</p>
          
          {
            userdata?.photo?
            <>
            <img src={userdata.photo} alt='profile' className='mx-auto rounded-full' /> 
            </>
            :
            <>
            <img src='https://via.placeholder.com/200' alt='profile' className='mx-auto rounded-full' />
            <button className='bg-blue w-max mx-auto mt-1 rounded text-white p-1 text-[10px] cursor-pointer'>Add Photo</button>
          
            </>
          }
          <p className='text-xl font-semibold mt-2 mx-auto'>{userdata?.name}</p>
          <p className='text-sm font-normal mt-2 mx-auto'>{userdata?.email}</p>
          <p className='text-sm font-normal mx-auto'>{userdata?.phone}</p>

          <div className='mt-4 mx-auto'>
            <h1 className='text-xl font-semibold'>Education</h1>
            {
              isEduAdded || userdata?.education?.length>0?
              <div>
                <p className='text-sm '>{userdata?.education[0]} - {userdata?.education[1]}</p>
                <p className='text-sm '>{userdata?.education[2]}, {userdata?.education[3]}</p>
                <p className='text-sm '>{userdata?.education[4]}%</p>
              </div>
              :
              <button
                className='bg-blue w-max mx-auto mt-1 rounded text-white p-1 text-[10px] cursor-pointer'
                onClick={addEduForm}
              >
                Add Education
              </button>
            }
            
            {
              isAuthOpen && (
                <Modal onClose={closeAuth}>
                    <EduForm isEduAdded={isEduAdded} setIsEduAdded ={setIsEduAdded} />
                </Modal>
              )
            }
            
              
            
            
          </div>

          <div className='mt-4 mx-auto flex flex-col justify-center'>
            <h1 className='text-xl font-semibold'>Work Experience</h1>
            {
              userdata?.experience?.length>0 ? 
              <div>
                <p className='text-sm '>{userdata?.experience[0]} - {userdata?.experience[1]}</p>
                <p className='text-sm '>{userdata?.experience[2]} - Present</p>
                
              </div>
              
              :
              <button 
                className='bg-blue w-max mx-auto mt-1 rounded text-white p-1 text-[10px] cursor-pointer'
                onClick={addExpForm}
              >
                Add Work Experience
              </button>
            }

            {
              isAuthOpenExp && (
                <Modal onClose={closeAuthExp}>
                    <ExpForm />
                </Modal>
              )
            }
            
          </div>
        </div>

        <div className='w-[100%] sm:w-[70%]  p-2 rounded-lg'>
          <h1 className='font-semibold text-2xl'>Courses Enrolled</h1>
          {
            userdata?.courses?.length>0
            ?
            <div className='mt-4'>
              {
                userdata.courses.map((course,index) => {
                  return <CourseBox key={index} coursename={course.courseName} imgg="/images/comp2.avif" desc={course.courseDescription} coursePrice={course.coursePrice} courseRegDate={course.courseRegDate}  courseEnrollDate={course.courseEnrollDate} courseDuration={course.courseDuration} courseInstructor={course.courseInstructor} status={course.courseStatus} courseId= {course._id} courseFeedback = {course.courseFeedback} hasPaid={course.hasPaid} />
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