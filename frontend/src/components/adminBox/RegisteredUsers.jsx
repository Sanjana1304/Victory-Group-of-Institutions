import React, { useState } from 'react'
import Modal from '../../layouts/Modal';
import EnrollForma from './EnrollForma';

const RegisteredUsers = ({studentsWithNoCourses}) => {

  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  const closeEnroll = () => {
    setIsEnrollOpen(false);
  }

  const [enrolledUserId, setEnrolledUserId] = useState('');

  const handleAdminEnroll = (studId) => {
    setEnrolledUserId(studId);
    setIsEnrollOpen(true);
  }

  return (
    <div className=" max-h-screen overflow-y-scroll">
      <table className="text-sm min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-3 border-b text-start">Name</th>
            <th className="px-4 py-3 border-b text-start">Email</th>
            <th className="px-4 py-3 border-b text-start">Phone</th>
            <th className="px-4 py-3 border-b text-start">Course Request</th>
            <th className="px-4 py-3 border-b">Action</th>
          </tr>
        </thead>

        <tbody className='text-sm text-gray-700'>
          {studentsWithNoCourses.map((student,index) => (
            <tr key={index}>
              <td className="p-4 border-b font-semibold">{student.name}</td>
              <td className="p-4 border-b">{student.email}</td>
              <td className="p-4 border-b">{student.phone}</td>
              <td className="p-4 border-b">No</td>
              <td className="p-4 border-b py-6 text-sm text-center">
                <button className='p-1 px-2 bg-red rounded text-white'>Remove</button>
                <button onClick={()=>handleAdminEnroll(student._id)} className='ml-1 p-1 px-3 bg-blue rounded text-white'>Enroll</button>
              </td>
            
            </tr>
          ))}
        </tbody>
      </table>

      {
        isEnrollOpen && (
          <Modal onClose={closeEnroll}>
            <EnrollForma studentId={enrolledUserId} />
          </Modal>
        )
    }
    </div>
  )
}

export default RegisteredUsers