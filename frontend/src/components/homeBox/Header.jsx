import React, { useContext, useState } from 'react'
import DataContext from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';
import Modal from '../../layouts/Modal';
import SupportForm from './SupportForm';

const Header = () => {
    const {handleSignOut} = useContext(DataContext);

    const [expanded, setExpanded] = useState(false);
    const navig = useNavigate();
    
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const showAllCourses = () => {
        navig('/home/allcourses');
    }

    const openSupportModal = (e) => {
        e.preventDefault();
        setIsAuthOpen(true);
    }

    const closeAuth = () => {
      setIsAuthOpen(false);
    };

  return (
    <header className="py-4 sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* App Name */}
            <div className="">
              <button 
                className="flex"
                onClick={() => navig('/home')}
                >
                <span className='text-xl font-bold text-blue'>Victory Group Of Institutions</span>
              </button>
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
              <button 
                className="text-base font-normal text-gray-600 transition hover:text-black"
                onClick={showAllCourses}
              >
                Explore All Courses
              </button>
              <button className="text-base font-normal text-gray-600 transition hover:text-black">
                Get Project Assistance
              </button>
              <button className="text-base font-normal text-gray-600 transition hover:text-black">
                College Admission Guidance
              </button>
            </nav>

            {/* CTA Button */}

            <div className="relative hidden md:inline-flex">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
              <a
                className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-blue border border-transparent rounded-full"
                role="button"
                onClick={openSupportModal}
              >
                Help
              </a>

              {
                isAuthOpen && (
                  <Modal onClose={closeAuth}>
                    <SupportForm/>
                  </Modal>
                )
              }
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
                <a 
                    className="text-base font-normal text-gray-600 transition hover:text-black"
                    role='button'
                    onClick={showAllCourses}
                >
                Explore All Courses
                </a>

                <a 
                  className="text-base font-normal text-gray-600 transition hover:text-black"
                  role='button'
                >
                
                Get Project Assistance
                </a>

                <a 
                  className="text-base font-normal text-gray-600 transition hover:text-black"
                  role='button'
                >
                
                College Admission Guidance
                </a>

                <div className="relative inline-flex items-center justify-center group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <a
                    className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-blue border border-transparent rounded-full"
                    role="button"
                    onClick={openSupportModal}
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
  )
}

export default Header