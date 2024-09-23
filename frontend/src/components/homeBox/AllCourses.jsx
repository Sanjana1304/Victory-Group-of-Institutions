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

const AllCourses = () => {
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
  return (
    <>
    <Header/>
    <section id='courses_offered' className='courses-offered sm:flex w-[90%] mx-auto rounded border mb-10'>
          <a href="#courses_list"><Sidebar activeItem={activeItem} setActiveItem={setActiveItem}/></a>
          <div className="flex-grow p-8" id='courses_list'>
                {renderContent()}
                
          </div>

    </section>
    </>
  )
}

export default AllCourses