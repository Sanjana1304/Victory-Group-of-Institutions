import React, { useState } from 'react'
import Modal from '../../layouts/Modal';
import EnrollForma from './EnrollForma';
import ModalConfirm from './ModalConfirm';
import api from '../../api/axiosConfig';

const RegisteredUsers = ({studentsWithNoCourses}) => {

  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userRemovedid, setUserRemovedid] = useState('');

  const closeEnroll = () => {
    setIsEnrollOpen(false);
  }

  const [enrolledUserId, setEnrolledUserId] = useState('');

  const handleAdminEnroll = (studId) => {
    setEnrolledUserId(studId);
    setIsEnrollOpen(true);
  }

  const handleRemoveUser = (studId) => {
    setUserRemovedid(studId);
    setIsModalOpen(true);
  }

  const confirmRemoveUser = async() => {
    // console.log('Remove user confirmed');
    try {
      const res = await api.delete(`/api/admin/removeStudent/${userRemovedid}`);
      alert(res.data.message);
    } catch (error) {
      alert('Error removing user:');  
      console.error('Error removing user:', error); 
    }
    setIsModalOpen(false);
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
                <button onClick={()=>handleRemoveUser(student._id)} className='p-1 px-2 bg-red rounded text-white'>Remove</button>
                <button onClick={()=>handleAdminEnroll(student._id)} className='ml-1 p-1 px-3 bg-blue rounded text-white'>Enroll</button>
              </td>
            
            </tr>
          ))}
        </tbody>
      </table>

      <ModalConfirm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => confirmRemoveUser()}
        message="Are you sure you want to remove this user from your database?"
      />

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