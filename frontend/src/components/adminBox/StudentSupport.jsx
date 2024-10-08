import React, { useState } from 'react'
import ModalConfirm from './ModalConfirm';
import api from '../../api/axiosConfig';

const StudentSupport = ({pendingRequests,resolvedRequests}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ticketId, setticketId] = useState('');


  const handleCloseTicket = (id) => {
    setticketId(id);
    setIsModalOpen(true);
  }

  const confirmCloseTicket = async() => {
    try {
      console.log('Inside Close ticket', ticketId);
      const res = await api.put(`/api/admin/closeTicket/${ticketId}`);
      alert(res.data.message);
      
    } catch (error) {
      console.error('Error closing ticket:', error);
      alert('Error closing ticket');
      
    }
    setIsModalOpen(false);
  }



  return (
    <div>
      <div className='bg-white p-3'>
        <h1 className=' mb-5 font-semibold text-gray-600'>Open Tickets</h1>
        <p className='border-b mb-6'></p>
        <div className='max-h-[300px] overflow-y-scroll'>
          <table className="text-sm min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-3 border-b text-start">Name</th>
                <th className="px-4 py-3 border-b text-start">Email</th>
                <th className="px-4 py-3 border-b text-start">Message</th>
                <th className="px-4 py-3 border-b text-start">Action</th>
              </tr>
            </thead>
            <tbody className='text-sm text-gray-700'>
              {
                pendingRequests.map((student, index) => (
                  <tr key={index}>
                    <td className="p-4 border-b font-semibold">{student.name}</td>
                    <td className="p-4 border-b"> {student.email}</td>
                    <td className="p-4 border-b">{student.message}</td>
                    <td className="p-4 border-b"><button onClick={()=>handleCloseTicket(student._id)} className='p-1 px-2 bg-red text-[10px] rounded text-white'>Close Ticket</button></td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      <div className='bg-white p-3 mt-6'>
        <h1 className='mt-1 mb-5 font-semibold text-gray-600'>Closed Tickets</h1>
        <p className='border-b mb-6'></p>
        <div className='max-h-[300px] overflow-y-scroll'>
          <table className="text-sm min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-3 border-b text-start">Name</th>
                  <th className="px-4 py-3 border-b text-start">Email</th>
                  <th className="px-4 py-3 border-b text-start">Message</th>
                </tr>
              </thead>
              <tbody className='text-sm text-gray-700'>
                {
                  resolvedRequests.map((student, index) => (
                    <tr key={index}>
                      <td className="p-4 border-b font-semibold">{student.name}</td>
                      <td className="p-4 border-b"> {student.email}</td>
                      <td className="p-4 border-b">{student.message}</td>
                    </tr>
                ))}
              </tbody>
          </table>

          <ModalConfirm
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={()=>confirmCloseTicket()}
            message='Close this ticket?'
          />

        </div>
        <div>
        </div>

      </div>
    </div>
  )
}

export default StudentSupport