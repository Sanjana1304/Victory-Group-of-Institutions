import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../context/DataContext'
import Sidebar from '../components/adminBox/SideBar';
import Dashboard from '../components/adminBox/Dashboard';
import EnrolledStuds from '../components/adminBox/EnrolledStuds';
import CourseReqs from '../components/adminBox/CourseReqs';
import StudentSupport from '../components/adminBox/StudentSupport';
import GeneralEnquiries from '../components/adminBox/GeneralEnquiries';
import { useNavigate } from 'react-router-dom';
import RegisteredUsers from '../components/adminBox/RegisteredUsers';
import PrevStuds from '../components/adminBox/PrevStuds';
import { getAllStudents } from '../api-client';

const AdminHomePage = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const [allStudents, setAllStudents] = useState([]);
  const [inProgressStudents, setInProgressStudents] = useState([]);
  const [completedStudents, setCompletedStudents] = useState([]);
  const [studentsWithNoCourses, setStudentsWithNoCourses] = useState([]);

  // Function to split students based on course status
  const processStudentsByCourseStatus = (students, status) => {
    const result = [];

    students.forEach(student => {
      if (student.courses && student.courses.length > 0) {
        student.courses.forEach(course => {
          if (course.courseStatus === status) {
            // Create a new entry for each course with the same student info
            result.push({
              _id: student._id,
              name: student.name,
              email: student.email,
              phone: student.phone,
              course: {
                courseName: course.courseName,
                courseStatus: course.courseStatus,
                courseDuration: course.courseDuration,
                courseInstructor: course.courseInstructor,
                courseEnrollDate: course.courseEnrollDate,
                coursePrice: course.coursePrice,
                hasPaid: course.hasPaid,
                courseType: course.courseType
              }
            });
          }
        });
      }
    });

    return result;
  };

  const getStudentsWithNoCourses = (students) => {
    return students.filter(student => !student.courses || student.courses.length === 0);
  };

  const navig = useNavigate();
  
  const renderContent = () => {
    switch (activeItem) {
        case "Dashboard":
          return <Dashboard />;
        case "Enrolled Students":
            return <EnrolledStuds inProgressStudents={inProgressStudents} />
        case "Registered Users":
            return <RegisteredUsers studentsWithNoCourses={studentsWithNoCourses}/>
        case "Course Requests":
            return <CourseReqs />;
        case "Student Support":
            return <StudentSupport />;
        case "General Enquiries":
            return <GeneralEnquiries />;
        
        
        case "Previous Students":
            return <PrevStuds completedStudents={completedStudents} />;
        default:
            return <Dashboard />;
    }
  };

  useEffect(() => {
    const fetchAllStudents = async () => {
      const res = await getAllStudents();  // Your API call to fetch students
      setAllStudents(res);
      

      // Process the data after fetching the students
      const inProgress = processStudentsByCourseStatus(res, "In Progress");
      const completed = processStudentsByCourseStatus(res, "Completed");
      const noCourses = getStudentsWithNoCourses(res);

      // Set the state with the processed data
      setInProgressStudents(inProgress);
      
      setCompletedStudents(completed);
      
      setStudentsWithNoCourses(noCourses);
      
    };

    fetchAllStudents();
  }, []);


  

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
          <Sidebar activeItem={activeItem} setActiveItem={setActiveItem}/>
          <div className="flex-grow p-3 bg-gray-100" id='courses_list'>
                {renderContent()}
                
          </div>

    </section>
    

    </div>
  )
}

export default AdminHomePage        