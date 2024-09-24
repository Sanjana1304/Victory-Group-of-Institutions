import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { craftCourse, fetchUserData } from '../../api-client';

const CraftCourseForm = () => {
    const {data : userdata} = useQuery('fetchUserData',fetchUserData);

    const [success, setSuccess] = useState(false);

    const [course, setCourse] = useState({
        courseTitle: '',
        courseCategory: '',
        courseDescription: '',
    });

    const handleCraftCourse = async(e) => {
        e.preventDefault();
        //console.log(course);
        if(userdata){
        try {
            const res = await craftCourse(userdata?.name, userdata?.email, userdata?.phone, course.courseTitle, course.courseCategory, course.courseDescription);
            if(res === "success"){
                setSuccess(true);
                setCourse({
                    courseTitle: '',
                    courseCategory: '',
                    courseDescription: '',
                });
            }
            else{
                alert("Error submitting course request");
            }
          } catch (error) {
            console.log(error);
          }
        }
    }

  return (
    <section className='mt-2 w-[90%] mx-auto rounded mb-10'>
    <span className='text-red font-bold'>Can't find your course?</span> No worries! At Victory, you can create <span className='text-blue'> your own personalized course </span>, complete with a custom syllabus that fits your goals. Your education, your way!

    <form className='mt-4 py-2' onSubmit={handleCraftCourse}>
        <h1 className='rounded font-semibold text-xl text-blue'>Craft your Own Course</h1>
        <p className='text-gray-500'>Submit your course details for review and approval.</p>

        <div className='mt-5 border rounded-lg shadow p-4'>
            <div>
                <label className='text-blue'>Course Title</label>
                <input 
                    type='text' 
                    className='w-full border p-2 rounded mt-2' 
                    value={course.courseTitle}
                    onChange={(e) => setCourse({...course, courseTitle: e.target.value})}
                    placeholder='Course Title' required/>
            </div>
            
            <div className='mt-4'>
                <label className='text-blue'>Course Category</label>
                <select 
                    className='w-full border p-2 rounded mt-2'
                    value={course.courseCategory}
                    onChange={(e) => setCourse({...course, courseCategory: e.target.value})}
                >
                    <option value={"Programming & Development"}>Programming & Development</option>
                    <option value={"Office Productivity Tools"}>Office Productivity Tools</option>
                    <option value={"Business & Accounting Solutions"} >Business & Accounting Solutions</option>
                    <option value={"Spoken Languages"}>Spoken Languages</option>
                    <option value={"Creative Design & Multimedia"}>Creative Design & Multimedia</option>
                    <option value={"Tuitions"}>Tuitions</option>
                    <option value={"Summer Camp"}>Summer Camp</option>
                </select>
            </div>

            <div className='mt-4'>
                <label className='text-blue'>Course Description</label>
                <textarea 
                    className='w-full border p-2 rounded mt-2' 
                    placeholder='Course Description' 
                    value={course.courseDescription}
                    onChange={(e) => setCourse({...course, courseDescription: e.target.value})}
                    rows={4}  ></textarea>
            </div>

            <input type='submit' className='text-white bg-blue p-2 text-[11px] rounded mt-2' value={"Request Approval"} />

            {success && <p className='text-green'>Course request submitted successfully!</p>}
        </div>

    
    </form>
</section>
  )
}

export default CraftCourseForm