import React from 'react'

const EduForm = () => {

    const handleAddEdu = (e) => {
        e.preventDefault();
        console.log('Adding Education');
    }

    return (
        <div>
            <form className='bg-blue p-6 rounded-lg text-white' onSubmit={handleAddEdu}>
                <h1 className='text-white text-xl font-semibold mb-3'>Add Education</h1>
                <div className='flex flex-col mb-2'>
                    <label htmlFor="" className='mb-1'>Degree</label>
                    <input type="text" className='rounded' />
                </div>

                <div className='flex flex-col mb-2'>
                    <label htmlFor="" className='mb-1'>Field of Study</label>
                    <input type="text" className='rounded' />
                </div>
            
                <div className='flex flex-col mb-2'>
                    <label htmlFor="" className='mb-1'>Institution</label>
                    <input type="text" className='rounded'/>
                </div>
                <div className='flex flex-col mb-2'>
                    <label htmlFor="" className='mb-1'>Year</label>
                    <input type="text" className='rounded' />
                </div>
                <div className='flex flex-col mb-2'>
                    <label htmlFor="" className='mb-1'>Percentage</label>
                    <input type="text" className='rounded' />
                </div>
                
                <button className='bg-white text-blue w-max mx-auto mt-2 rounded p-1 px-5'>Add</button>
                
            
            </form>
        </div>
    )
}

export default EduForm