import React, { useState } from 'react'
import api from '../../api/axiosConfig';

const EnrollForma = ({studentId}) => {

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
  
    const [formData, setFormData] = useState({
        studId: studentId,
        courseName: '',
        courseCategory: '',
        courseDescription: '',
        coursePrice: '',
        courseRegDate: formattedDate,
        courseEnrollDate: '',
        courseDuration: '',
        courseInstructor: 'To be assigned',
        courseStatus: 'In Progress',
        courseType: '',
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const res = await api.post('/api/admin/enrollStud', formData, {
                headers:{
                    'Content-Type':'application/json',
                },
                withCredentials: true,
            });
            if (res.status === 200) {
                alert('Enrollment Successful');
                //window.location.reload();
            }

        } catch (error) {
            alert(error);
        }
        
        
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Course Enrollment Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Course Name */}
          <div>
            <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">Course Name</label>
            <input
              type="text"
              name="courseName"
              id="courseName"
              value={formData.courseName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Course Category */}
          <div>
            <label htmlFor="courseCategory" className="block text-sm font-medium text-gray-700">Course Category</label>
            <select
              name="courseCategory"
              id="courseCategory"
              value={formData.courseCategory}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="">Select Category</option>
              <option value="Programming & Development">Programming & Development</option>
              <option value="Office Productivity Tools">Office Productivity Tools</option>
              <option value="Business & Accounting Solutions">Business & Accounting Solutions</option>
              <option value="Spoken Languages">Spoken Languages</option>
              <option value="Creative Design & Multimedia">Creative Design & Multimedia</option>
              <option value="Tuitions">Tuitions</option>
              <option value="Summer Camp">Summer Camp</option>
              
            </select>
          </div>
  
          {/* Course Description */}
          <div>
            <label htmlFor="courseDescription" className="block text-sm font-medium text-gray-700">Course Description</label>
            <textarea
              name="courseDescription"
              id="courseDescription"
              value={formData.courseDescription}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
  
          {/* Course Fee */}
          <div>
            <label htmlFor="coursePrice" className="block text-sm font-medium text-gray-700">Course Fee</label>
            <input
              type="number"
              name="coursePrice"
              id="coursePrice"
              value={formData.coursePrice}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
  
          {/* Course Duration */}
          <div>
            <label htmlFor="courseDuration" className="block text-sm font-medium text-gray-700">Course Duration</label>
            <select
              name="courseDuration"
              id="courseDuration"
              value={formData.courseDuration}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="">Select Duration</option>
              <option value="3 months">3 Months</option>
              <option value="6 months">6 Months</option>
              <option value="1 year">1 Year</option>
            </select>
          </div>
  
          {/* Location (Online/Offline) */}
          <div>
            <label htmlFor="courseType" className="block text-sm font-medium text-gray-700">Course Location</label>
            <select
              name="courseType"
              id="courseType"
              value={formData.courseType}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="">Select Location</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
  
          {/* Enrollment Date */}
          <div>
            <label htmlFor="courseEnrollDate" className="block text-sm font-medium text-gray-700">Enrollment Date</label>
            <input
              type="date"
              name="courseEnrollDate"
              id="courseEnrollDate"
              value={formData.courseEnrollDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
  
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-blue text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    )
}

export default EnrollForma