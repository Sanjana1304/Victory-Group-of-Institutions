import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext'
import Sidebar from '../components/adminBox/SideBar';
import Dashboard from '../components/adminBox/Dashboard';
import EnrolledStuds from '../components/adminBox/EnrolledStuds';
import CourseReqs from '../components/adminBox/CourseReqs';
import StudentSupport from '../components/adminBox/StudentSupport';
import GeneralEnquiries from '../components/adminBox/GeneralEnquiries';

const AdminHomePage = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  
  const renderContent = () => {
    switch (activeItem) {
        case "Dashboard":
          return <Dashboard />;
        case "Enrolled Students":
            return <EnrolledStuds />
        case "Course Requests":
            return <CourseReqs />;
        case "Student Support":
            return <StudentSupport />;
        case "General Enquiries":
            return <GeneralEnquiries />;
        default:
            return <Dashboard />;
    }
  };
  

  const {handleSignOut} = useContext(DataContext);
  return (
    <div>
      <header className='shadow-none flex items-center justify-between p-2 mx-2'  style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              <button 
                className="flex"
                onClick={() => navig('/admin')}
                >
                <span className='text-xl font-bold text-blue'>Victory Group Of Institutions</span>
              </button>
            
              <a
                className="p-2 px-3 items-center justify-center text-base font-normal text-white bg-red border border-transparent rounded-full"
                role="button"
                onClick={handleSignOut}
              >
                Log Out
              </a>
      </header>

      <section id='courses_offered' className='mt-[1.7px] courses-offered sm:flex rounded'>
          <a href="#courses_list"><Sidebar activeItem={activeItem} setActiveItem={setActiveItem}/></a>
          <div className="flex-grow p-8" id='courses_list'>
                {renderContent()}
                
          </div>

    </section>
    

    </div>
  )
}

export default AdminHomePage        