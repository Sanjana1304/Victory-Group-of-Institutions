import React, { useState } from 'react';
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";

const LandingPage = () => {
    const [expanded, setExpanded] = useState(false);
  return (
    <div className="">
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
              <a href="#feature" className="text-base font-normal text-gray-600 transition hover:text-black">
                Courses Offered
              </a>
              <a href="#testi" className="text-base font-normal text-gray-600 transition hover:text-black">
                Testimonals
              </a>
              <a href="#aboutus" className="text-base font-normal text-gray-600 transition hover:text-black">
                About Us
              </a>
            </nav>

            {/* CTA Button */}

            <div className="relative hidden md:inline-flex">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
              <a
                className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-blue border border-transparent rounded-full"
                role="button"
                
              >
                Enquire
              </a>
            </div>

            <div className="relative hidden md:inline-flex">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
              <a
                className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-blue border border-transparent rounded-full"
                role="button"
                
              >
                Sign In
              </a>
            </div>


          </div>

          {/* Mobile Menu */}
          {expanded && (
            <nav className="mt-4">
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <a href="#feature" className="text-base font-normal text-gray-600 transition hover:text-black">
                Courses Offered
                </a>
                <a href="#testi" className="text-base font-normal text-gray-600 transition hover:text-black">
                Testimonals
                </a>
                <a href="#aboutus" className="text-base font-normal text-gray-600 transition hover:text-black">
                
                About Us
                </a>

                <div className="relative inline-flex items-center justify-center group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <a
                    className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-blue border border-transparent rounded-full"
                    role="button"
                    
                  >
                    Enquire
                  </a>
                </div>

                <div className="relative inline-flex items-center justify-center group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <a
                    className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-blue border border-transparent rounded-full"
                    role="button"
                    
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
        </header>

        <img src="/images/victory_banner.png" alt="" className=' mx-auto items-center justify-center w-[92%] h-[60%]' />

        <section className='hero-2'>
            <h1 className='flex text-xl md:text-4xl mt-7 mb-7 text-blue justify-center font-bold'>Why are we different from others?</h1>
            <div className=' flex flex-col justify-around sm:flex-row'>
                <div className=''>
                    <div className='p-9 rounded-full mx-auto bg-blue w-max text-white flex justify-center'><FaBookOpen className='text-3xl' /></div>
                    <h1 className=' font-bold mt-2 flex justify-center mb-4'>Best Curriculum</h1>
                </div>
                
                <div>
                    <div className='p-9 rounded-full mx-auto bg-blue w-max text-white'><MdOutlineContactSupport className='text-3xl' /></div>
                    <h1 className='font-bold mt-2 flex justify-center mb-4'>1 to 1 Support</h1>
                </div>
                <div>
                    <div className='p-9 rounded-full mx-auto bg-blue w-max text-white'><IoPerson className='text-3xl'/></div>
                    <h1 className='font-bold mt-2 flex justify-center mb-4'>Best Teachers</h1>
                </div>
                <div>
                    <div className='p-9 rounded-full mx-auto bg-blue w-max text-white'><LuBrainCircuit className='text-3xl'/></div>
                    <h1 className='font-bold mt-2 flex justify-center mb-4'>Personalized Course Offerings</h1>
                </div>
            </div>
        </section>

        <section className='offered'>
            <h1 className='flex text-xl md:text-4xl mt-7 mb-7 text-blue justify-center font-bold'>We Offer</h1>
            <div className="flex flex-col justify-around w-[90%] mx-auto sm:flex-row">
                <div className='flex  items-center h-64 justify-center rounded bg-gradient-to-b from-cyan-400 to-cyan-600 px-3 sm:w-[23%] mb-3 '>
                    <h1 className='font-bold mt-2 text-2xl'>50+ Courses</h1>
                </div>
                <div className='flex items-center h-64 justify-center rounded bg-gradient-to-b from-cyan-500 to-purple-400 px-3 sm:w-[23%] mb-3'>
                    
                    <h1 className='font-bold mt-2 text-2xl'>College Admissions</h1>
                </div>
                <div className='flex items-center h-64 justify-center rounded bg-gradient-to-b from-cyan-400 to-cyan-600 px-3 sm:w-[23%] mb-3'>
                    
                    <h1 className='font-bold mt-2 text-2xl'>Open Schooling</h1>
                </div>
                <div className='flex items-center h-64 justify-center rounded bg-gradient-to-b from-cyan-500 to-purple-400 px-3 sm:w-[23%] mb-3'>
                    
                    <h1 className='font-bold mt-2 text-2xl'>Job Training</h1>
                </div>
            </div>
        </section>

    </div>
  )
}

export default LandingPage