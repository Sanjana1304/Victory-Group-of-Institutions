import React, { useState } from 'react';
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";
import Sidebar from '../components/landBox/SideBar';
import OfficeTools from '../components/landBox/OfficeTools';
import SpokenLangs from '../components/landBox/SpokenLangs';
import PgmDev from '../components/landBox/PgmDev';
import AccountSolns from '../components/landBox/AccountSolns';
import Tuitions from '../components/landBox/Tuitions';
import SummerCamp from '../components/landBox/SummerCamp';
import DesignCourse from '../components/landBox/DesignCourse';
import Testimonials from '../components/landBox/Testimonials';
import ContactForm from '../components/landBox/ContactForm';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import Modal from './Modal';
import UserAuth from './UserAuth';

const LandingPage = () => {
    const [expanded, setExpanded] = useState(false);

    const [activeItem, setActiveItem] = useState("Programming & Development");

    const renderContent = () => {
      switch (activeItem) {
          case "Programming & Development":
            return <PgmDev/>;
          case "Office Productivity Tools":
              return <OfficeTools/>
          case "Business & Accounting Solutions":
              return <AccountSolns/>;
          
          case "Spoken Languages":
              return <SpokenLangs/>;
          case "Creative Design & Multimedia":
              return <DesignCourse/>; ;
          case "Tuitions":
            return <Tuitions/>; ;
          
            case "Summer Camp":
            return <SummerCamp/>; ;
          default:
              return <PgmDev/>;
      }
    };

    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const handleSignIn = (e) => {
      e.preventDefault();
      setIsAuthOpen(true);
    }
  
    const closeAuth = () => {
      setIsAuthOpen(false);
    };
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
              <a href="#courses_offered" className="text-base font-normal text-gray-600 transition hover:text-black">
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
                href='#contact'
                
              >
                Enquire
              </a>
            </div>

            <div className="relative hidden md:inline-flex">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
              <a
                className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-blue border border-transparent rounded-full"
                role="button"
                onClick={handleSignIn}
                
              >
                Sign In
              </a>
            </div>


          </div>

          {/* Mobile Menu */}
          {expanded && (
            <nav className="mt-4">
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <a href="#courses_offered" className="text-base font-normal text-gray-600 transition hover:text-black">
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
                    onClick={handleSignIn}
                    
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
                    <div className='p-9 rounded-full mx-auto bg-blue w-max text-white'><IoPerson className='text-3xl'/></div>
                    <h1 className='font-bold mt-2 flex justify-center mb-4'>Online and Offline Classes</h1>
                </div>

                <div>
                    <div className='p-9 rounded-full mx-auto bg-blue w-max text-white'><LuBrainCircuit className='text-3xl'/></div>
                    <h1 className='font-bold mt-2 flex justify-center mb-4'>Personalized Course Offerings</h1>
                </div>

                <div>
                    <div className='p-9 rounded-full mx-auto bg-blue w-max text-white'><MdOutlineContactSupport className='text-3xl' /></div>
                    <h1 className='font-bold mt-2 flex justify-center mb-4'>1 to 1 Support</h1>
                </div>

                
                
            </div>
        </section>

        <section className='offered'>
            <h1 className='flex text-xl md:text-4xl mt-7 mb-7 text-blue justify-center font-bold'>We Offer</h1>
            <div className="flex flex-col justify-around w-[90%] mx-auto sm:flex-row">
                
                <div className='cursor-pointer relative flex  items-center h-64 justify-center rounded bg-gradient-to-b from-cyan-400 to-cyan-600 px-3 sm:w-[23%] mb-3 overflow-hidden group'>
                    <h1 className='font-bold mt-2 text-2xl'>50+ Courses</h1>

                    <div className="absolute p-2 inset-0 flex items-center justify-center bg-gradient-to-b from-cyan-500 to-purple-400 text-white font-medium text-sm opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      We offer over 50 courses in a wide range of fields, including Computer Science, SAP, Tally, and Spoken Languages. Our diverse curriculum ensures comprehensive learning opportunities for students to excel in their chosen area of interest.
                    </div>
                </div>

                <div className='cursor-pointer relative flex items-center h-64 justify-center rounded bg-gradient-to-b from-cyan-500 to-purple-400 px-3 sm:w-[23%] mb-3 overflow-hidden group'>
                    
                    <h1 className='font-bold mt-2 text-2xl'>College Admissions</h1>

                    <div className="absolute p-2 inset-0 flex items-center justify-center bg-gradient-to-b from-cyan-400 to-cyan-600 text-white font-medium text-sm opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      We provide personalized college admission guidance to help students navigate the application process, choose the right institutions, and maximize their chances of success. Our expert support ensures students make informed decisions for their higher education.
                    </div>
                </div>

                <div className='cursor-pointer relative flex items-center h-64 justify-center rounded bg-gradient-to-b from-cyan-400 to-cyan-600 px-3 sm:w-[23%] mb-3 overflow-hidden group'>
                    
                    <h1 className='font-bold mt-2 text-2xl'>Open Schooling</h1>

                    <div className="absolute p-2 inset-0 flex items-center justify-center bg-gradient-to-b from-cyan-500 to-purple-400 text-white font-medium text-sm opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      Whether you prefer self-paced study or guidance, we've got you covered. We assist you in applying to NIOS Boards, ensuring a seamless journey from admissions to examinations. With our guidance and access to the board's portals, you can confidently navigate the entire process.
                    </div>
                </div>

                <div className='cursor-pointer relative flex items-center h-64 justify-center rounded bg-gradient-to-b from-cyan-500 to-purple-400 px-3 sm:w-[23%] mb-3 overflow-hidden group'>
                    
                    <h1 className='font-bold mt-2 text-2xl'>Job Bootcamps</h1>

                    <div className="absolute p-2 inset-0 flex items-center justify-center bg-gradient-to-b from-cyan-400 to-cyan-600 text-white font-medium text-sm opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      We offer comprehensive job training, including interview preparation, valuable tips, and expert guidance. Our programs are designed to equip students with the skills and confidence needed to succeed in the competitive job market.
                    </div>
                </div>
            </div>
        </section>

        <h1 className='flex text-xl md:text-4xl mt-7 mb-7 text-blue justify-center font-bold'>Courses Offered</h1>
        
        <section id='courses_offered' className='courses-offered sm:flex w-[90%] mx-auto rounded border'>
          <a href="#courses_list"><Sidebar activeItem={activeItem} setActiveItem={setActiveItem}/></a>
          <div className="flex-grow p-8" id='courses_list'>
                {renderContent()}
                
          </div>

        </section>

        <div className='w-[90%] mx-auto text-gray-600 text-sm'>
          <span className='text-red font-bold'>Can't find your course?</span> No worries! At Victory, you can create <span className='text-blue'> your own personalized course </span>, complete with a custom syllabus that fits your goals. Your education, your way!
        </div>

        <Testimonials/>

        <ContactForm />

        <section className='about-us w-[90%] mx-auto shadow p-2 mb-10' id='aboutus'>
            <h1 className='flex text-xl md:text-4xl mt-7 mb-7 text-blue justify-center font-bold'>About Us</h1>
            <div className='flex flex-col sm:flex-row'>
                <div className='p-5'>
                    <img src='/images/aboutus.webp' alt='' className='w-[1000px] h-[250px] mx-auto rounded'/>
                </div>
                <div className='p-5'>
                    <h1 className='font-bold text-2xl text-blue'>Victory Group of Institutions</h1>
                    <p className='mt-2'>Victory Group of Institutions is a leading educational institution that offers a wide range of courses to help students achieve their academic and career goals. Our comprehensive curriculum, experienced faculty, and personalized approach ensure that students receive the best education and support to excel in their chosen field.</p>
                    <div className="flex mt-4">
                      <a href=""><FaInstagram className='text-red text-xl mr-2' /></a>
                      <a href=""><FaLinkedin className='text-blue text-xl mr-2' /></a>
                      <a href=""><TfiYoutube className='text-red text-xl mr-2' /></a>
                      <a href=""><FaFacebook className='text-blue text-xl mr-2' /></a>
                      
                    </div>
                </div>
            </div>
        </section>

        {isAuthOpen && (
          <Modal onClose={closeAuth}>
              <UserAuth/>
          </Modal>
        )}

        <footer className='bg-blue text-white'>
            <div className='flex flex-col sm:flex-row p-4 justify-between'>
                <p className='font-bold'>VGI</p>
                <p>Address: 123, XYZ Street, ABC City</p>
                <p>Phone: +91 9962360444</p>
                <p>Email: 
                    <a href='mailto:' className='ml-1'>victorygroupofinstitutions@gmail.com</a>
                </p>
            </div>
        </footer>



    </div>
  )
}

export default LandingPage