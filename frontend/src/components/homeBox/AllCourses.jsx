import React, { useState } from 'react';
import Sidebar from '../landBox/SideBar';
import OfficeTools from '../landBox/OfficeTools';
import SpokenLangs from '../landBox/SpokenLangs';
import PgmDev from '../landBox/PgmDev';
import AccountSolns from '../landBox/AccountSolns';
import Tuitions from '../landBox/Tuitions';
import SummerCamp from '../landBox/SummerCamp';
import DesignCourse from '../landBox/DesignCourse';
import Header from '../homeBox/Header';
import CraftCourseForm from './CraftCourseForm';

const AllCourses = () => {
    const [activeItem, setActiveItem] = useState("Programming & Development");

    const renderContent = () => {
        switch (activeItem) {
            case "Programming & Development":
              return <PgmDev enroll={true}/>;
            case "Office Productivity Tools":
                return <OfficeTools enroll={true} />
            case "Business & Accounting Solutions":
                return <AccountSolns enroll={true} />;
            case "Spoken Languages":
                return <SpokenLangs enroll={true} />;
            case "Creative Design & Multimedia":
                return <DesignCourse enroll={true} />; ;
            case "Tuitions":
              return <Tuitions enroll={true} />; ;
            
              case "Summer Camp":
              return <SummerCamp enroll={true}/>; ;
            default:
                return <PgmDev enroll={true}/>;
        }
      };
  return (
    <>
    <Header/>
    <section id='courses_offered' className='mt-2 courses-offered sm:flex w-[90%] mx-auto rounded border mb-10'>
          <a href="#courses_list"><Sidebar activeItem={activeItem} setActiveItem={setActiveItem}/></a>
          <div className="flex-grow p-8" id='courses_list'>
                {renderContent()}
                
          </div>

    </section>

    <CraftCourseForm/>
    </>
  )
}

export default AllCourses