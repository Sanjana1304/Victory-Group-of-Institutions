import React from 'react'

const EnrolledStuds = ({inProgressStudents}) => {

  const handleMarkPaid = (email,courseId) => {
    console.log(email,courseId);
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
            <td className="p-4 border-b">{student.phone} <a href={`mailto:${student.email}`} className='text-blue'>{student.email}</a></td>
            <td className="p-4 border-b py-6"><button className='p-1 px-2 bg-red text-[10px] rounded text-white'>Remove</button><button className='mt-1 p-1 px-3 bg-blue text-[10px] rounded text-white'>Finish</button></td>
            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default EnrolledStuds