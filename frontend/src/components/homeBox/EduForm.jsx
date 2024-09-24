import React, { useState } from 'react';
import api from '../../api/axiosConfig';


const EduForm = ({isEduAdded, setIsEduAdded}) => {

    const [education, setEducation] = useState({
        degree: '',
        field: '',
        institution: '',
        year: '',
        grade: '',
    });

    //const [isEduAdded, setIsEduAdded] = useState(false);

    const handleChange = (e) => {
        setEducation({
          ...education,
          [e.target.name]: e.target.value,
        });
    };

    const handleAddEdu = async(e) => {
        e.preventDefault();
        const educationArray = [
            education.degree,
            education.field,
            education.institution,
            education.year,
            education.grade,
        ];

        try {
            const response = await api.put('/api/users/education', educationArray );
            console.log('Education added', response.data);
            setIsEduAdded(true);
          } catch (error) {
            console.error('Error adding education:', error);
          }
    }

    return (
        <div>
            <form className='bg-blue p-6 rounded-lg text-white' onSubmit={handleAddEdu}>
                <h1 className='text-white text-xl font-semibold mb-3'>Add Education</h1>
                <div className='flex flex-col mb-2'>
                    <label htmlFor="" className='mb-1'>Degree</label>
                    <input name="degree" type="text" className='rounded p-1 text-sm text-black' placeholder="BE/BTech"
                            value={education.degree}
                            onChange={handleChange}
                            required />
                </div>

                <div className='flex flex-col mb-2'>
                    <label htmlFor="" className='mb-1'>Field of Study</label>
                    <input type="text" name="field" className='rounded p-1 text-sm text-black' placeholder="in Computer Science"
                        value={education.field}
                        onChange={handleChange}
                        required />
                </div>
            
                <div className='flex flex-col mb-2'>
                    <label htmlFor="" className='mb-1'>Institution</label>
                    <input type="text" name="institution" className='rounded p-1 text-sm text-black' placeholder="IIT"
                            value={education.institution}
                            onChange={handleChange}
                            required/>
                </div>
                <div className='flex flex-col mb-2'>
                    <label htmlFor="" className='mb-1'>Year</label>
                    <input type="text" name="year" className='rounded p-1 text-sm text-black' placeholder="20xx"
                                value={education.year}
                                onChange={handleChange}
                                required />
                </div>
                <div className='flex flex-col mb-2'>
                    <label htmlFor="" className='mb-1'>Percentage</label>
                    <input type="text"  name="grade" className='rounded p-1 text-sm text-black'  placeholder="95%"
                                    value={education.grade}
                                    onChange={handleChange}
                                    required />
                </div>
                
                <button className='bg-white text-blue w-max mx-auto mt-2 rounded p-1 px-5'>Add</button>

                {
                    isEduAdded && <p className='text-white text-sm mt-2'>Education Added Successfully. You may close the window</p>
                }
            </form>
        </div>
    )
}

export default EduForm