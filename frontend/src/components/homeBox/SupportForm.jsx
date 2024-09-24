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
    <div>
        <form className='bg-blue p-6 rounded-lg text-white' onSubmit={handleSupportForm}>
            <div className='flex flex-col mb-2'>
                <label className='mb-1'>Message</label>
                    <textarea type="text" className='rounded p-1 text-sm text-black'
                                value={msg}
                                onChange={(e)=>setmsg(e.target.value)}
                                rows={5}
                                required />
            </div>
            <button type="submit" className='bg-white text-blue rounded p-1'>Send </button>

            {isSupportSent && <p className='text-white'>Message sent successfully</p>}

        </form>
    </div>
  )
}

export default SupportForm