import React from 'react'

const RegisteredUsers = ({studentsWithNoCourses}) => {
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
              <td className="p-4 border-b py-6 text-sm text-center"><button className='p-1 px-2 bg-red rounded text-white'>Remove</button><button className='ml-1 p-1 px-3 bg-blue rounded text-white'>Enroll</button></td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RegisteredUsers