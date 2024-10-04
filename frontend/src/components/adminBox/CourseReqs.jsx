import React, { useEffect, useState } from 'react'
import { getAllCourseRequests } from '../../api-client';
import { acceptCourseReq } from '../../api-client';

const CourseReqs = () => {

  const [requests, setRequests] = useState([]);
  const [openRequests, setOpenRequests] = useState([]);
  const [closedRequests, setClosedRequests] = useState([]);

  const [approvedRequests, setApprovedRequests] = useState({});

  useEffect(() => {
    // Fetch course requests from the database
    const fetchRequests = async () => {
      try {
        const response = await getAllCourseRequests();
        console.log('Course requests:', response);
        setRequests(response);

         // Split requests based on requestStatus
         const open = response.filter(req => req.requestStatus === 'pending');
         const closed = response.filter(req => req.requestStatus === 'Accepted' || req.requestStatus === 'Rejected');
         
         setOpenRequests(open);
         setClosedRequests(closed);
      } catch (error) {
        console.error('Server error:', error);
      }
    };
    fetchRequests();
  }, []);

  const handleApprove = (index) => {
    setApprovedRequests((prev) => ({
      ...prev,
      [index]: true, // Mark this particular request as approved
    }));
  };

  const [shortTermFee, setShortTermFee] = useState('');
  const [mediumTermFee, setMediumTermFee] = useState('');
  const [longTermFee, setLongTermFee] = useState('');

  const handleSubmit = async(e,email) => {
    e.preventDefault();
    try {
      const res = await acceptCourseReq(email, shortTermFee, mediumTermFee, longTermFee);

      if (res === 'success') {
        alert('Course request accepted successfully');
        window.location.reload();
        
      }
    } catch (error) {
      alert('Server error:', error);
    }
  }
  
  return (
    <>
    <h1 className='p-2 px-5 font-bold text-xl'>Open Requests</h1>
    <div className="max-h-[450px] overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
      
      {openRequests.map((request, index) => (
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
            <button
              onClick={() => handleApprove(index)}
              className="text-white px-4 py-2 rounded bg-blue"
            >
              Approve
            </button>
            <button className="text-white px-4 py-2 rounded bg-red">
              Reject
            </button>
          </div>
          {
            approvedRequests[index] && 
            <form onSubmit={(e)=>handleSubmit(e,request.email)} className="max-w-md mx-auto p-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="shortTermFee">
                Short-term Fee (45 days):
              </label>
              <input
                type="number"
                id="shortTermFee"
                value={shortTermFee}
                onChange={(e) => setShortTermFee(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter fee for short-term"
                required
              />
            </div>
      
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="mediumTermFee">
                Medium-term Fee (3 months):
              </label>
              <input
                type="number"
                id="mediumTermFee"
                value={mediumTermFee}
                onChange={(e) => setMediumTermFee(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter fee for medium-term"
                required
              />
            </div>
      
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="longTermFee">
                Long-term Fee (6 months):
              </label>
              <input
                type="number"
                id="longTermFee"
                value={longTermFee}
                onChange={(e) => setLongTermFee(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter fee for long-term"
                required
              />
            </div>
      
            <button
              type="submit"
              className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
          }
        </div>
      ))}
    </div>

    <h1 className='p-2 px-5 font-bold text-xl'>Closed Requests</h1>
    <div className="max-h-[450px] overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
    {closedRequests.map((request, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2">Name: {request.name}</h3>
          <p>Email: {request.email}</p>
          <p>Phone: {request.phone}</p>
          <p>Course Title: {request.courseTitle}</p>
          <p>Category: {request.courseCategory}</p>
          {request.courseDescription && (
            <p>Description: {request.courseDescription}</p>
          )}
          <p className='font-semibold text-red'>Status: {request.requestStatus}</p>
          
        </div>
      ))}
    </div>


    </>
  );
};

export default CourseReqs;
