import React, { useEffect, useState } from 'react'
import { fetchUserData, getCourseReqByMail } from '../../api-client';
import { useQuery } from 'react-query';
import Modal from '../../layouts/Modal';
import EnrollForm from './EnrollForm';

const CourseReqList = () => {
    const { data: userdata } = useQuery('fetchUserData', fetchUserData);
    const [courseReqList, setCourseReqList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourseReqList = async () => {
            setLoading(true); // Set loading true before fetching
            try {
                const res = await getCourseReqByMail(userdata?.email);
                setCourseReqList(res);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false); // Set loading false after the fetch completes
            }
        }

        if (userdata?.email) {
            fetchCourseReqList();
        }

    }, [userdata?.email]); // Only depend on userdata.email

    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [coursefee, setCourseFee] = useState(0);

  const handleEnroll = (fees) => {
    setCourseFee(fees);
    console.log("fee",fees);
    setIsEnrollOpen(true);
    
  }

  const closeEnroll = () => {
    setIsEnrollOpen(false);
  }


    return (
        <div>
            {loading ? (
                <h1 className='text-xl font-semibold text-center mt-5'>Loading...</h1>
            ) : (
                courseReqList.length > 0 ? (
                    courseReqList.map((courseReq, index) => (
                        <div key={index} className='shadow p-4 hover:bg-gray-200 cursor-pointer'>
                            <h1 className='text-xl font-semibold'>Course Request</h1>
                            <div className='mt-2 text-gray-500'>
                                <p>Course Name: {courseReq.courseTitle}</p>
                                <p>Course Category: {courseReq.courseCategory}</p>
                                <p>Course Description: {courseReq.courseDescription}</p>
                                <p className='text-red font-semibold'>Status: {courseReq.requestStatus}</p>
                                {
                                    courseReq.requestStatus === 'Accepted' && (
                                        <button 
                                        onClick={()=>handleEnroll(courseReq.feeProposed)}
                                        className='bg-blue p-1 mt-3 text-sm px-4 text-white'>Enroll</button>
                                    )
                                }
                                {
                                    isEnrollOpen && (
                                    <Modal onClose={closeEnroll}>
                                        <div className='w-[900px]'>
                                            <EnrollForm coursename={courseReq.courseTitle} desc={courseReq.courseDescription} fees={coursefee} />
                                        </div>
                                    </Modal>
                                    )
                                }
                            </div>
                        </div>
                    ))
                ) : (
                    <h1 className='text-xl font-semibold text-center mt-5'>No Notifications</h1>
                )
            )}
        </div>
    );
}

export default CourseReqList;
