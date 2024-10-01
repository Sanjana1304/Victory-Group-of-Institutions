import React, { useState } from 'react'
import { enrollCourse } from '../../api-client';

const EnrollForm = ({coursename,desc,fees}) => {
    const [selectedType,setSelectedType] = useState(null); //for course duration

    const handleRadioChange = (e) =>{
        setSelectedType(e.target.value);
    }

    const handleenrollCourse = async () => {
        if (!selectedType) {
            alert('Please select course duration');
            return;
        }
        let course_fee = 0;
        if (selectedType === '45 Days') {
            course_fee = fees[0];
        }
        else if (selectedType === '3 Months') {
            course_fee = fees[1];
        }
        else if (selectedType === '6 Months') {  
            course_fee = fees[2];
        }
        const res = await enrollCourse(coursename,desc,course_fee,selectedType);
        if (res === 'success') {
            alert('Enrolled successfully');
        } else {
            alert('Error enrolling in course');
        }

        //console.log('Enrolled in ',coursename,' for ',selectedType,' with fees Rs.',fees[0]);
    }

  return (
    <div className='bg-white w-[55%] mx-auto'>
        <div className='p-3 py-7 bg-blue text-white text-2xl text-center'>Enroll in {coursename}</div>
        <div>
            <div className='text-gray-600 p-3 text-sm'>{desc}</div>
            <div className=' p-3 text-sm font-semibold'>This course includes:
                <ul className='text-gray-600'>
                    <div className='flex justify-around'>
                    <li className='w-[40%] list-disc'>Online/Offline Training</li>
                    <li className='w-[40%] list-disc'>1 to 1 Support</li>
                    </div>

                    <div className='flex justify-around'>
                    <li className='w-[40%] list-disc'> Completion Certificate</li>
                    <li className='w-[40%] list-disc'>7 day refund policy</li>
                    </div>
                    
                </ul>
            </div>
            <div className='p-3'>
                <h1>Select your course duration</h1>
                <div className="flex justify-around mt-3">
                    <label
                        
                        className={`border p-6 px-7 rounded-lg shadow cursor-pointer
                            ${selectedType === '45 Days' ? 'bg-gray-200' : 'bg-white'}`}
                    >
                        <input 
                                type="radio"
                                value='45 Days'
                                required
                                checked={selectedType === '45 Days'}
                                onChange={(e)=>handleRadioChange(e)}
                                className="hidden"
                        />
                        <span className='font-semibold text-xl'>45 Days</span>
                        <br />
                        <span className='text-gray-600'>Rs. {fees[0]}</span>
                    </label>

                    <label
                        
                        className={`border p-6 px-7 rounded-lg shadow cursor-pointer
                            ${selectedType === '3 Months' ? 'bg-gray-200' : 'bg-white'}`}
                    >
                        <input 
                                type="radio"
                                value='3 Months'
                                required
                                checked={selectedType === '3 Months'}
                                onChange={(e)=>handleRadioChange(e)}
                                className="hidden"
                        />
                        <span className='font-semibold text-xl'>3 Months</span>
                        <br />
                        <span className='text-gray-600'>Rs. {fees[1]}</span>
                    </label>

                    <label
                        
                        className={`border p-6 px-7 rounded-lg shadow cursor-pointer
                            ${selectedType === '6 Months' ? 'bg-gray-200' : 'bg-white'}`}
                    >
                        <input 
                                type="radio"
                                value='6 Months'
                                required
                                checked={selectedType === '6 Months'}
                                onChange={(e)=>handleRadioChange(e)}
                                className="hidden"
                        />
                        <span className='font-semibold text-xl'>6 Months</span>
                        <br />
                        <span className='text-gray-600'>Rs. {fees[2]}</span>
                    </label>
                </div>
            </div>

            <button onClick={handleenrollCourse} className='flex p-2 px-6 bg-blue mx-auto text-white'>Enroll</button>
            <br />
        </div>
    </div>
  )
}

export default EnrollForm