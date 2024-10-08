import React, { useState } from 'react'
import { assignInstructor } from '../../api-client';

const InstrForm = ({studentEmail,courseId}) => {
    const [InstrName, setInstrName] = useState('');

    const handleCourseInstrAssign = async(e) => {
        e.preventDefault();
        try {
            // Call the assignInstructor API
            const res = await assignInstructor(studentEmail, courseId, InstrName);
            if (res === 'success') {
                alert('Instructor assigned successfully');
                setInstrName('');
            }
        } catch (error) {
            alert('Error assigning instructor:', error);
        }

    }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleCourseInstrAssign} className="space-y-4">
            <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">Course Name</label>
            <input
              type="text"
              name="courseName"
              id="courseName"
              value={InstrName}
              onChange={(e) => setInstrName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
        
            <button
              type="submit"
              className="w-full bg-blue text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
        </form>
    </div>
  )
}

export default InstrForm