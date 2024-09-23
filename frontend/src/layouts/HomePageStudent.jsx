import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext'
import api from '../api/axiosConfig';
import { useQuery } from 'react-query'
import { fetchUserData } from '../api-client';
import CourseBox from '../components/landBox/CourseBox';

const HomePageStudent = () => {
  const [expanded, setExpanded] = useState(false);
  const {handleSignOut} = useContext(DataContext);

  const {data : userdata} = useQuery('fetchUserData',fetchUserData);


  return (
    <div>
      <header className="py-4 sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* App Name */}
            <div className="">
              <a href="#" className="flex">
                <span className='text-xl font-bold text-blue'>Victory Group Of Institutions</span>
              </a>
            </div>

            {/* Mobile Menu(Hamburger) Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <span aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                ) : (
                  <span aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center space-x-10 lg:ml-20 lg:space-x-12">
              <a href="#courses_offered" className="text-base font-normal text-gray-600 transition hover:text-black">
                Explore All Courses
              </a>
              <a href="#aboutus" className="text-base font-normal text-gray-600 transition hover:text-black">
                Get Project Assistance
              </a>
              <a href="#aboutus" className="text-base font-normal text-gray-600 transition hover:text-black">
                College Admission Guidance
              </a>
            </nav>

            {/* CTA Button */}

            <div className="relative hidden md:inline-flex">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
              <a
                className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-blue border border-transparent rounded-full"
                role="button"
              >
                Help
              </a>
            </div>

            <div className="relative hidden md:inline-flex">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
              <a
                className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-red border border-transparent rounded-full"
                role="button"
                onClick={handleSignOut}
              >
                Log Out
              </a>
            </div>


          </div>

          {/* Mobile Menu */}
          {expanded && (
            <nav className="mt-4">
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <a href="#courses_offered" className="text-base font-normal text-gray-600 transition hover:text-black">
                Explore All Courses
                </a>
                <a href="#aboutus" className="text-base font-normal text-gray-600 transition hover:text-black">
                
                Get Project Assistance
                </a>
                <a href="#aboutus" className="text-base font-normal text-gray-600 transition hover:text-black">
                
                College Admission Guidance
                </a>

                <div className="relative inline-flex items-center justify-center group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <a
                    className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-blue border border-transparent rounded-full"
                    role="button"
                  >
                    Help
                  </a>
                </div>

                <div className="relative inline-flex items-center justify-center group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <a
                    className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-red border border-transparent rounded-full"
                    role="button"
                    onClick={handleSignOut}
                  >
                    Log Out
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

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