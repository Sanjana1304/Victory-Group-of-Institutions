import React from 'react'

const EnrolledStuds = () => {
  const students = [
    { id: 1, name: 'John Doe', course: 'Web Development', enrollmentDate: '2023-09-15', duration: '6 months', instructor: 'Mr. John Doe', fee: '₦100,000', mode: 'Online', contact: '08012345678', other: 'Nil' },
    { id: 2, name: 'Jane Smith', course: 'Data Science', enrollmentDate: '2023-09-20' },
    { id: 1, name: 'John Doe', course: 'Web Development', enrollmentDate: '2023-09-15', duration: '6 months', instructor: 'Mr. John Doe', fee: '₦100,000', mode: 'Online', contact: '08012345678', other: 'Nil' },
    { id: 2, name: 'Jane Smith', course: 'Data Science', enrollmentDate: '2023-09-20' },
    { id: 1, name: 'John Doe', course: 'Web Development', enrollmentDate: '2023-09-15', duration: '6 months', instructor: 'Mr. John Doe', fee: '₦100,000', mode: 'Online', contact: '08012345678', other: 'Nil' },
    { id: 2, name: 'Jane Smith', course: 'Data Science', enrollmentDate: '2023-09-20' },
    { id: 1, name: 'John Doe', course: 'Web Development', enrollmentDate: '2023-09-15', duration: '6 months', instructor: 'Mr. John Doe', fee: '₦100,000', mode: 'Online', contact: '08012345678', other: 'Nil' },
    { id: 2, name: 'Jane Smith', course: 'Data Science', enrollmentDate: '2023-09-20' },
    { id: 1, name: 'John Doe', course: 'Web Development', enrollmentDate: '2023-09-15', duration: '6 months', instructor: 'Mr. John Doe', fee: '₦100,000', mode: 'Online', contact: '08012345678', other: 'Nil' },
    { id: 2, name: 'Jane Smith', course: 'Data Science', enrollmentDate: '2023-09-20' },
    { id: 1, name: 'John Doe', course: 'Web Development', enrollmentDate: '2023-09-15', duration: '6 months', instructor: 'Mr. John Doe', fee: '₦100,000', mode: 'Online', contact: '08012345678', other: 'Nil' },
    { id: 2, name: 'Jane Smith', course: 'Data Science', enrollmentDate: '2023-09-20' },
    { id: 1, name: 'John Doe', course: 'Web Development', enrollmentDate: '2023-09-15', duration: '6 months', instructor: 'Mr. John Doe', fee: '₦100,000', mode: 'Online', contact: '08012345678', other: 'Nil' },
    { id: 2, name: 'Jane Smith', course: 'Data Science', enrollmentDate: '2023-09-20' },
    { id: 1, name: 'John Doe', course: 'Web Development', enrollmentDate: '2023-09-15', duration: '6 months', instructor: 'Mr. John Doe', fee: '₦100,000', mode: 'Online', contact: '08012345678', other: 'Nil' },
    { id: 2, name: 'Jane Smith', course: 'Data Science', enrollmentDate: '2023-09-20' },
    { id: 1, name: 'John Doe', course: 'Web Development', enrollmentDate: '2023-09-15', duration: '6 months', instructor: 'Mr. John Doe', fee: '₦100,000', mode: 'Online', contact: '08012345678', other: 'Nil' },
    { id: 2, name: 'Jane Smith', course: 'Data Science', enrollmentDate: '2023-09-20' },
    { id: 1, name: 'John Doe', course: 'Web Development', enrollmentDate: '2023-09-15', duration: '6 months', instructor: 'Mr. John Doe', fee: '₦100,000', mode: 'Online', contact: '08012345678', other: 'Nil' },
    { id: 2, name: 'Jane Smith', course: 'Data Science', enrollmentDate: '2023-09-20' },
    { id: 1, name: 'John Doe', course: 'Web Development', enrollmentDate: '2023-09-15', duration: '6 months', instructor: 'Mr. John Doe', fee: '₦100,000', mode: 'Online', contact: '08012345678', other: 'Nil' },
    { id: 2, name: 'Jane Smith', course: 'Data Science', enrollmentDate: '2023-09-20' },
    { id: 1, name: 'John Doe', course: 'Web Development', enrollmentDate: '2023-09-15', duration: '6 months', instructor: 'Mr. John Doe', fee: '₦100,000', mode: 'Online', contact: '08012345678', other: 'Nil' },
    { id: 2, name: 'Jane Smith', course: 'Data Science', enrollmentDate: '2023-09-20' },
    { id: 1, name: 'John Doe', course: 'Web Development', enrollmentDate: '2023-09-15', duration: '6 months', instructor: 'Mr. John Doe', fee: '₦100,000', mode: 'Online', contact: '08012345678', other: 'Nil' },
    { id: 2, name: 'Jane Smith', course: 'Data Science', enrollmentDate: '2023-09-20' },
    { id: 1, name: 'John Doe', course: 'Web Development', enrollmentDate: '2023-09-15', duration: '6 months', instructor: 'Mr. John Doe', fee: '₦100,000', mode: 'Online', contact: '08012345678', other: 'Nil' },
    { id: 2, name: 'Jane Smith', course: 'Data Science', enrollmentDate: '2023-09-20' },
    
    // More students...
  ];
  return (
    <div className=" max-h-screen overflow-y-scroll">
    <table className="text-sm min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 border-b">Name</th>
          <th className="px-6 py-3 border-b">Course</th>
           <th className="px-6 py-3 border-b">Enroll</th>{/* duartion ingaye vekkalam */}
          <th className="px-6 py-3 border-b">Instructor</th>
          <th className="px-6 py-3 border-b">Fee</th>
          <th className="px-6 py-3 border-b">Mode</th>
          <th className="px-6 py-3 border-b">Contact</th>
          <th className="px-6 py-3 border-b">Action</th>
          <th className="px-6 py-3 border-b">Other</th>
        </tr>
      </thead>
      <tbody className=''>
        {students.map((student) => (
          <tr key={student.id}>
            <td className="px-4 py-4 border-b">{student.name}</td>
            <td className="px-4 py-4 border-b">{student.course}</td>
            <td className="px-4 py-4 border-b">{student.enrollmentDate} (6months)</td>
            <td className="px-4 py-4 border-b">{student.instructor}</td>
            <td className="px-4 py-4 border-b">{student.fee}</td>
            <td className="px-4 py-4 border-b">{student.mode}</td>
            <td className="px-4 py-4 border-b">{student.contact}</td>
            <td className="px-4 py-4 border-b flex"><button className='p-1 bg-red text-[10px] rounded text-white'>Remove</button><button className='ml-1 p-1 px-2 bg-blue text-[10px] rounded text-white'>Finish</button></td>
            <td className="px-4 py-4 border-b">{student.other}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default EnrolledStuds