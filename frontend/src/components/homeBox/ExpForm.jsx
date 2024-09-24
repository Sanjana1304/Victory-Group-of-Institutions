import React, { useState } from 'react'
import api from '../../api/axiosConfig';

const ExpForm = () => {
    const [isexpAdded, setIsexpAdded] = useState(false);

    const [exp, setexp] = useState({
        role: '',
        company: '',
        start: '',
    });

    const handleChange = (e) => {
        setexp({
          ...exp,
          [e.target.name]: e.target.value,
        });
    };

    const handleAddExp = async(e) => {
        e.preventDefault();
        const expArray = [
            exp.role,
            exp.company,
            exp.start,
        ];

        try {
            const response = await api.put('/api/users/experience', expArray );
            console.log('Exp added', response.data);
            setIsexpAdded(true);
          } catch (error) {
            console.error('Error adding exp:', error);
          }
    }
  return (
    <div>
        <form className='bg-blue p-6 rounded-lg text-white' onSubmit={handleAddExp}>
                <h1 className='text-white text-xl font-semibold mb-3'>Add Experience</h1>
                <div className='flex flex-col mb-2'>
                    <label htmlFor="" className='mb-1'>Role</label>
                    <input name="role" type="text" className='rounded p-1 text-sm text-black' placeholder="SDE"
                            value={exp.role}
                            onChange={handleChange}
                            required />
                </div>

                <div className='flex flex-col mb-2'>
                    <label htmlFor="" className='mb-1'>Company</label>
                    <input type="text" name="company" className='rounded p-1 text-sm text-black' placeholder="Google"
                        value={exp.company}
                        onChange={handleChange}
                        required />
                </div>
            
                <div className='flex flex-col mb-2'>
                    <label htmlFor="" className='mb-1'>Start Year</label>
                    <input type="text" name="start" className='rounded p-1 text-sm text-black' placeholder="2019"
                            value={exp.start}
                            onChange={handleChange}
                            required/>
                </div>
                
                <button className='bg-white text-blue w-max mx-auto mt-2 rounded p-1 px-5'>Add</button>

                {
                    isexpAdded && <p className='text-white text-sm mt-2'>Experience Added Successfully. You may close the window</p>
                }
            </form>
    </div>
  )
}

export default ExpForm