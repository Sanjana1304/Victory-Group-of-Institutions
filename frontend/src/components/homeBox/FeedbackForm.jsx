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
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <form className='space-y-4' onSubmit={addFeedbackfunc}>
        <label className='block text-sm font-medium text-gray-700'>Feedback Form</label>
            <textarea id='feedback' 
                value={feedback} 
                onChange={(e)=>setFeedback(e.target.value) } 
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' 
                placeholder='Enter your feedback here'
                rows='5'>

            </textarea>
           
            <button type='submit' className='w-full bg-blue text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Submit</button>
        </form>
    </div>
  )
}

export default FeedbackForm