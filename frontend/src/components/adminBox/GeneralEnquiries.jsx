import React, { useEffect, useState } from 'react'
import { getAllEnquiries } from '../../api-client';
import ModalConfirm from './ModalConfirm';
import api from '../../api/axiosConfig';

const GeneralEnquiries = ({openEnquiry,closedEnquiry}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enquiryId, setenquiryId] = useState('');

  const handleCloseEnquiry = (id) => {
    console.log('Close enquiry', id);
    setenquiryId(id);
    setIsModalOpen(true);
  }

  const ConfirmCloseEnquiry = async() => {
    try {
      const res = await api.put(`/api/admin/closeEnquiry/${enquiryId}`);
      alert(res.data.message);
      
    } catch (error) {
      console.error('Error closing enquiry:', error);
      alert('Error closing enquiry');
      
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
                <th className="px-4 py-3 border-b text-start">Phone</th>
                <th className="px-4 py-3 border-b text-start">Email</th>
                <th className="px-4 py-3 border-b text-start">Message</th>
                <th className="px-4 py-3 border-b text-start">Action</th>
              </tr>
            </thead>
            <tbody className='text-sm text-gray-700'>
              {
                openEnquiry.map((enquiry, index) => (
                  <tr key={index}>
                    <td className="p-4 border-b font-semibold">{enquiry.name}</td>
                    <td className="p-4 border-b">{enquiry.phone}</td>
                    <td className="p-4 border-b">{enquiry.email}</td>
                    <td className="p-4 border-b">{enquiry.message}</td>
                    <td className="p-4 border-b"><button onClick={()=>handleCloseEnquiry(enquiry._id)} className='p-1 px-2 bg-red text-[10px] rounded text-white'>Close Enquiry</button></td>
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
                  closedEnquiry.map((enquiry, index) => (
                    <tr key={index}>
                      <td className="p-4 border-b font-semibold">{enquiry.name}</td>
                      <td className="p-4 border-b">{enquiry.email}</td>
                      <td className="p-4 border-b">{enquiry.message}</td>
                    </tr>
                ))}
              </tbody>
          </table>
          
          <ModalConfirm
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={()=>ConfirmCloseEnquiry()}
            message='Are you sure you want to close this enquiry?'
          />

        </div>
      </div>
    </div>
  )
}

export default GeneralEnquiries