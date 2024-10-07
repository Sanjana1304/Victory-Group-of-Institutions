import React, { useState } from 'react'
import ModalConfirm from './ModalConfirm';
import { markCompleted, markPaid } from '../../api-client';

const EnrolledStuds = ({inProgressStudents}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const [feeMarkStudMail, setFeeMarkStudMail] = useState('');
  const [feeMarkCourseId, setFeeMarkCourseId] = useState('');

  const handleMarkPaid = (email,courseId) => {
    setFeeMarkStudMail(email);
    setFeeMarkCourseId(courseId);
    setIsModalOpen1(true);
  }

  const confirmPayment = async() => {
    try {
      // Call the markPaid API
      await markPaid(feeMarkStudMail, feeMarkCourseId);
      alert('Payment marked successfully');
      setFeeMarkCourseId('');
      setFeeMarkStudMail('');

      
    } catch (error) {
      alert('Error marking payment:', error);
      
    }
    setIsModalOpen1(false);
    
  }

  const handleCourseFinish = async(email,courseId) => {
    setFeeMarkStudMail(email);
    setFeeMarkCourseId(courseId);
    setIsModalOpen(true);
  }

  const confirmFinish = async() => {
    try {
      // Call the markCompleted API
      await markCompleted(feeMarkStudMail, feeMarkCourseId);
      alert('Course finished successfully');
      setFeeMarkCourseId('');
      setFeeMarkStudMail('');

    } catch (error) {
      alert('Error finishing course:', error);
    }
    setIsModalOpen(false);
    //console.log('Course finished');
  }

  
  return (
    <div className=" max-h-screen overflow-y-scroll">
    <table className="text-sm min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="px-4 py-3 border-b text-start">Name</th>
          <th className="px-4 py-3 border-b text-start">Course</th>
           <th className="px-4 py-3 border-b text-start">Enroll</th>
          <th className="px-4 py-3 border-b text-start">Duration</th>
          <th className="px-4 py-3 border-b text-start">Instructor</th>
          <th className="px-4 py-3 border-b text-start">Fee</th>
          <th className="px-4 py-3 border-b text-start">Status</th>
          <th className="px-4 py-3 border-b text-start">Mode</th>
          <th className="px-4 py-3 border-b text-start">Contact</th>
          <th className="px-4 py-3 border-b text-start">Action</th>
          <th className="px-4 py-3 border-b text-start">Other</th>
        </tr>
      </thead>
      <tbody className='text-sm text-gray-700'>
        {inProgressStudents.map((student,index) => (
          <tr key={index}>
            <td className="p-4 border-b font-semibold">{student.name}</td>
            <td className="p-4 border-b">{student.course.courseName}</td>
            <td className="p-4 border-b">{student.course.courseEnrollDate}</td>
            <td className="p-4 border-b">{student.course.courseDuration}</td>
            <td className="p-4 border-b">{student.course.courseInstructor}</td>
            <td className="p-4 border-b">{student.course.coursePrice}</td>
            <td className="p-4 border-b">{student.course.hasPaid?<span className=' font-semibold'>Paid</span>:<span className='text-red font-semibold'>Pending<button className='mt-1 text-white bg-blue text-[8px] px-1' onClick={()=>handleMarkPaid(student.email,student.course.courseId)}>Mark Paid</button></span>}</td>
            <td className="p-4 border-b">{student.course.courseType}</td>
            <td className="p-4 border-b flex flex-col">
              <a href={`https://wa.me/${student.phone}`} target='_blank' className='text-blue'>{student.phone}</a>
              <a href={`mailto:${student.email}`} target='_blank' className='text-blue'>{student.email}</a>
            </td>
            <td className="p-4 border-b py-6"><button onClick={()=>handleCourseFinish(student.email,student.course.courseId)} className='mt-1 p-1 px-3 bg-blue text-[10px] rounded text-white'>Finish</button></td>
            
          </tr>
        ))}
      </tbody>
    </table>

    <ModalConfirm
      isOpen={isModalOpen1}
      onClose={() => setIsModalOpen1(false)}
      onConfirm={() => confirmPayment()}
      message="Are you sure you want to mark this student as paid?"
    />

    <ModalConfirm
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onConfirm={() => confirmFinish()}
      message="Are you sure you want to mark this student's course as finished?"
    />
  </div>
  )
}

export default EnrolledStuds