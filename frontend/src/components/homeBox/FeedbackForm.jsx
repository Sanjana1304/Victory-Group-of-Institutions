import React, { useState } from 'react'
import { addFeedback } from '../../api-client';

const FeedbackForm = ({courseId}) => {
    const [feedback, setFeedback] = useState('');

    const addFeedbackfunc = async (e) => {
        e.preventDefault();
        const res = await addFeedback(courseId, feedback);
        if(res === "success"){
            alert('Your Feedback has been added successfully');
        }else{
            alert('Failed to add feedback');
        }
    }
  return (
    <div>
        <form className='mt-4 bg-blue p-4 text-white rounded-lg' onSubmit={addFeedbackfunc}>
        <h2 className='text-lg mb-2'>Feedback Form</h2>
            <div className='flex flex-col'>
            <textarea id='feedback' 
                value={feedback} 
                onChange={(e)=>setFeedback(e.target.value) } 
                className='border p-2 rounded-lg text-gray-500' 
                placeholder='Enter your feedback here'
                rows='5'>

            </textarea>
            </div>
            <button type='submit' className='bg-white text-blue p-2 px-4 rounded-lg mt-4'>Submit</button>
        </form>
    </div>
  )
}

export default FeedbackForm