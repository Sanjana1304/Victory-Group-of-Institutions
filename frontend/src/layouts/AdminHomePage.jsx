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
import { getAllEnquiries, getAllStudents, getAllStudentSupport } from '../api-client';

const AdminHomePage = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  //all types of students
  const [allStudents, setAllStudents] = useState([]);
  const [allStudentsCount, setAllStudentsCount] = useState(0);
  const [inProgressStudents, setInProgressStudents] = useState([]);
  const [inProgressStudentsCount, setInProgressStudentsCount] = useState(0);
  const [completedStudents, setCompletedStudents] = useState([]);
  const [completedStudentsCount, setCompletedStudentsCount] = useState(0);
  const [studentsWithNoCourses, setStudentsWithNoCourses] = useState([]);

  //for enquiries
  const [genEnquiry, setGenEnquiry] = useState([]);
  const [genEnquiryCount, setGenEnquiryCount] = useState(0);
  const [closedEnquiry, setClosedEnquiry] = useState([]);
  const [closedEnquiryCount, setClosedEnquiryCount] = useState(0);
  const [openEnquiry, setOpenEnquiry] = useState([]);
  const [openEnquiryCount, setOpenEnquiryCount] = useState(0);

  //for student support
  const [studentSupport, setStudentSupport] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [resolvedRequests, setResolvedRequests] = useState([]);
  const [pendingRequestsCount, setPendingRequestsCount] = useState(0);
  const [resolvedRequestsCount, setResolvedRequestsCount] = useState(0);

  useEffect(() => {
    const fetchStudentSupport = async () => {
      const res = await getAllStudentSupport();
      setStudentSupport(res);
    }
    fetchStudentSupport();
  },[])

  useEffect(() => {
    // Split the support requests into pending and resolved arrays
    if (studentSupport.length) {
      const pending = studentSupport.filter(request => request.status === 'pending');
      const resolved = studentSupport.filter(request => request.status === 'resolved');
      
      setPendingRequests(pending);
      setPendingRequestsCount(pending.length);
      setResolvedRequests(resolved);
      setResolvedRequestsCount(resolved.length);
    }
  }, [studentSupport]);


  useEffect(() => {
    const fetchGenEnquiry = async () => {
      const res = await getAllEnquiries();
      setGenEnquiry(res);
      setGenEnquiryCount(res.length);
    }
    fetchGenEnquiry();
  },[genEnquiry,setGenEnquiry]);

  useEffect(() => {
    // Split the support requests into pending and resolved arrays
    if (genEnquiry.length) {
      const open = genEnquiry.filter(request => request.status === 'pending');
      const closed = genEnquiry.filter(request => request.status === 'resolved');
      
      setOpenEnquiry(open);
      setOpenEnquiryCount(open.length);
      setClosedEnquiry(closed);
      setClosedEnquiryCount(closed.length);
    }
  },[genEnquiry]);

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
                courseId: course._id,
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
          return <Dashboard 
          allStudentsCount={allStudentsCount}
                    inProgressStudentsCount={inProgressStudentsCount}
                    completedStudentsCount={completedStudentsCount}
                    genEnquiryCount={genEnquiryCount}
                    openEnquiryCount={openEnquiryCount}
                    closedEnquiryCount={closedEnquiryCount}
                    pendingRequestsCount={pendingRequestsCount}
                    resolvedRequestsCount={resolvedRequestsCount}
                    inProgressStudents={inProgressStudents}
                  />;
        case "Enrolled Students":
            return <EnrolledStuds inProgressStudents={inProgressStudents} />
        case "Registered Users":
            return <RegisteredUsers studentsWithNoCourses={studentsWithNoCourses}/>
        case "Course Requests":
            return <CourseReqs />;
        case "Student Support":
            return <StudentSupport
                      pendingRequests={pendingRequests}
                      resolvedRequests={resolvedRequests}
                   />;
        case "General Enquiries":
            return <GeneralEnquiries 
              closedEnquiry={closedEnquiry} openEnquiry={openEnquiry} />;
        
        
        case "Previous Students":
            return <PrevStuds completedStudents={completedStudents} />;
        default:
            return <Dashboard />;
    }
  };

  useEffect(() => {
    const fetchAllStudents = async () => {
      const res = await getAllStudents();
      setAllStudents(res);
      setAllStudentsCount(res.length);

      // Process the data after fetching the students
      const inProgress = processStudentsByCourseStatus(res, "In Progress");
      const completed = processStudentsByCourseStatus(res, "Completed");
      const noCourses = getStudentsWithNoCourses(res);
      //console.log("no",noCourses);

      // Set the state with the processed data
      setInProgressStudents(inProgress);
      setInProgressStudentsCount(inProgress.length);
      
      setCompletedStudents(completed);
      setCompletedStudentsCount(completed.length);
      
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