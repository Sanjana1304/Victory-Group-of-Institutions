import React, { useEffect, useState } from 'react'
import { getAllCourseRequests } from '../../api-client';



const CourseReqs = () => {

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch course requests from the database
    const fetchRequests = async () => {
      try {
        const response = await getAllCourseRequests();
        console.log('Course requests:', response);
        setRequests(response);
      } catch (error) {
        console.error('Server error:', error);
      }
    }
    fetchRequests();
  }
  , []);
  
  return (
    <div className="max-h-screen overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
      {requests.map((request, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2">Name: {request.name}</h3>
          <p>Email: {request.email}</p>
          <p>Phone: {request.phone}</p>
          <p>Course Title: {request.courseTitle}</p>
          <p>Category: {request.courseCategory}</p>
          {request.courseDescription && (
            <p>Description: {request.courseDescription}</p>
          )}
          <div className="mt-4 flex space-x-4">
            <button className=" text-white px-4 py-2 rounded bg-blue">
              Approve
            </button>
            <button className=" text-white px-4 py-2 rounded bg-red">
              Reject
            </button>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseReqs