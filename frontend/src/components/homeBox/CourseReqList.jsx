import React, { useEffect, useState } from 'react'
import { fetchUserData, getCourseReqByMail } from '../../api-client';
import { useQuery } from 'react-query';

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
                                    courseReq.requestStatus === 'Approved' && (
                                        <button className='bg-blue p-1 mt-3 text-sm px-4 text-white'>Enroll</button>
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
