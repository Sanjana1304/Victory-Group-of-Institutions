import React, { useState } from 'react'
import Modal from '../../layouts/Modal';
import FeedbackForm from '../homeBox/FeedbackForm';

const CourseBox = ({coursename,imgg,desc,coursePrice,courseRegDate,courseDuration,courseInstructor,status,enroll,courseId,courseFeedback}) => {

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  
  const handleAddFeedback = () => {
    setIsAuthOpen(true);
  }

  const closeAuth = () => {
    setIsAuthOpen(false);
  };

  return (
    <div className='border shadow flex mb-3 p-2'>
        <div className='p-4'>
            <div className='text-center'>
                <img src={imgg} alt='course' height={"200px"} width={"150px"}/>
            </div>
           
        </div>
        <div className='p-4'>
            <h4 className='text-2xl'>{coursename}</h4>
            <p className='text-[11px]'>{desc} <span className='font-bold text-blue'>Get Certfifed</span></p>
            
            {
              coursePrice
              ?
              <>
                <p className='font-semibold'>Fee paid :  Rs. {coursePrice}</p>
                <p>Enrolled On : {courseRegDate}</p>
                <p>Duration : {courseDuration}</p>
                <p>Instructor : {courseInstructor}</p>

                {
                  status === "In progress"?
                  <p className='text-red'>Status : {status}</p>
                  :
                  <>
                  <p style={{ color: '#28a745' }}>Status : {status}</p>
                  <button className='bg-blue text-white p-2 text-[10px] rounded-lg mt-2'>View Certificate</button>
                  {
                    courseFeedback?
                    <p className='mt-2 text-[10px]'>Feedback provided : {courseFeedback}</p>
                    :
                    <>
                    <button onClick={handleAddFeedback} className='bg-green text-white p-2 text-[10px] rounded-lg mt-2 ml-2'>Add Feedback</button>
                      {isAuthOpen && (
                        <Modal onClose={closeAuth}>
                          <FeedbackForm courseId={courseId}/>
                        </Modal>
                      )}
                    </>
                  }
                  
                  </>
                }
              </>
              :''
            }

            {
              enroll?
              <button className='bg-blue text-sm p-2 px-4 rounded-lg text-white mt-2'>Enroll</button>
              :
              ''
            }
            
            

        </div>
    </div>
  )
}

export default CourseBox