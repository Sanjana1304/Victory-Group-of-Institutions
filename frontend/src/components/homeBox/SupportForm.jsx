import React, { useState } from 'react'
import { support } from '../../api-client';
import { useQuery } from 'react-query'
import { craftCourse, fetchUserData } from '../../api-client';

const SupportForm = () => {
    const {data : userdata} = useQuery('fetchUserData',fetchUserData);

    const [msg, setmsg] = useState("");

    const [isSupportSent, setIsSupportSent] = useState(false);
   

    const handleSupportForm = async(e) => {
        e.preventDefault();
        if(userdata){
        try {
            const response = await support(userdata?.email,msg);
            if(response === 'success'){
                setIsSupportSent(true);
                setmsg("");
            }else{
                alert('Error sending message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
        }
    }

  return (
         <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <form className='space-y-4' onSubmit={handleSupportForm}>
        <label className='mb-1 block text-md text-gray-700 font-semibold'>Contact Support</label>
                <label className='mb-1 block text-sm font-medium text-gray-700'>Message</label>
                    <textarea type="text"
                                value={msg}
                                onChange={(e)=>setmsg(e.target.value)}
                                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                rows={5}
                                required />
            <button type="submit" className="w-full bg-blue text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send </button>

            {isSupportSent && <p className='text-white'>Message sent successfully</p>}

        </form>
    </div>
  )
}

export default SupportForm