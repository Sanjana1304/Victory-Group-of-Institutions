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

    <section className='mt-2 w-[90%] mx-auto rounded mb-10'>
        <span className='text-red font-bold'>Can't find your course?</span> No worries! At Victory, you can create <span className='text-blue'> your own personalized course </span>, complete with a custom syllabus that fits your goals. Your education, your way!

        <form className='mt-4 py-2'>
            <h1 className='rounded font-semibold text-xl text-blue'>Craft your Own Course</h1>
            <p className='text-gray-500'>Submit your course details for review and approval.</p>

            <div className='mt-5 border rounded-lg shadow p-4'>
                <div>
                    <label className='text-blue'>Course Title</label>
                    <input type='text' className='w-full border p-2 rounded mt-2' placeholder='Course Title' required/>
                </div>
                <div className='mt-4'>
                    <label className='text-blue'>Course Category</label>
                    <select className='w-full border p-2 rounded mt-2'>
                        <option value={"Programming & Development"}>Programming & Development</option>
                        <option value={"Office Productivity Tools"}>Office Productivity Tools</option>
                        <option value={"Business & Accounting Solutions"} >Business & Accounting Solutions</option>
                        <option value={"Spoken Languages"}>Spoken Languages</option>
                        <option value={"Creative Design & Multimedia"}>Creative Design & Multimedia</option>
                        <option value={"Tuitions"}>Tuitions</option>
                        <option value={"Summer Camp"}>Summer Camp</option>
                    </select>
                </div>

                <div className='mt-4'>
                    <label className='text-blue'>Course Description</label>
                    <textarea className='w-full border p-2 rounded mt-2' placeholder='Course Description' rows={4}></textarea>
                </div>

                <button className='text-white bg-blue p-2 text-[11px] rounded mt-2'>Request Approval</button>


            </div>

        
        </form>
    </section>
    </>
  )
}

export default AllCourses