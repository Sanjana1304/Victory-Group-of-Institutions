import React from 'react'

const PrevStuds = ({completedStudents}) => {
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
            <th className="px-4 py-3 border-b text-start">Mode</th>
            <th className="px-4 py-3 border-b text-start">Contact</th>
            <th className="px-4 py-3 border-b text-start">Action</th>
          </tr>
       </thead>

        <tbody className='text-sm text-gray-700'>
          {completedStudents.map((student,index) => (
            <tr key={index}>
              <td className="p-4 border-b font-semibold">{student.name}</td>
              <td className="p-4 border-b">{student.course.courseName}</td>
              <td className="p-4 border-b">{student.course.courseEnrollDate}</td>
              <td className="p-4 border-b">{student.course.courseDuration}</td>
              <td className="p-4 border-b">{student.course.courseInstructor}</td>
              <td className="p-4 border-b">{student.course.coursePrice}</td>
              <td className="p-4 border-b">{student.course.courseType}</td>
              <td className="p-4 border-b">{student.phone} <a href={`mailto:${student.email}`} className='text-blue'>{student.email}</a></td>
              <td className="p-4 border-b py-6"><button className='p-1 px-2 bg-blue text-[10px] rounded text-white'>View Certificate</button></td>
            </tr>
          ))}
        </tbody>
       </table>
    </div>
  )
}

export default PrevStuds