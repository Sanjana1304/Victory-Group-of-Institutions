import React from 'react'
import CourseBox from './CourseBox'

const DesignCourse = ({enroll}) => {

  const courses = ["Graphic Design","Web Design","UI/UX Design","Adobe Photoshop","Adobe Illustrator","Adobe XD","Figma","Canva","CorelDRAW"];

  const descriptions = [
    "Our Graphic Design course provides a comprehensive introduction to graphic design principles and practices. Learn how to create visual concepts, design layouts, and produce digital graphics using industry-standard tools.",
    "Our Web Design course provides a comprehensive introduction to web design principles and practices. Learn how to create user-friendly websites, design responsive layouts, and optimize web content for different devices.",
    "Our UI/UX Design course provides a comprehensive introduction to user interface and user experience design principles and practices. Learn how to create intuitive interfaces, design interactive user experiences, and optimize digital products for usability.",
    "Our Photoshop course provides a comprehensive introduction to Adobe Photoshop, a popular image editing software. Learn how to retouch photos, create digital art, and design graphics using Photoshop.",
    "Our Illustrator course provides a comprehensive introduction to Adobe Illustrator, a popular vector graphics software. Learn how to create logos, illustrations, and graphics using Illustrator.",
    "Our Adobe XD course provides a comprehensive introduction to Adobe XD, a popular user experience design software. Learn how to design interactive prototypes, create wireframes, and optimize user experiences using Adobe XD.",
    "Our Figma course provides a comprehensive introduction to Figma, a popular web-based design tool. Learn how to design user interfaces, create interactive prototypes, and collaborate on design projects using Figma.",
    "Our Canva course provides a comprehensive introduction to Canva, a popular graphic design tool. Learn how to create social media graphics, marketing materials, and visual content using Canva.",
    "Our CorelDRAW course provides a comprehensive introduction to CorelDRAW, a popular vector graphics software. Learn how to create illustrations, logos, and designs using CorelDRAW."
  ]


  return (
    <div className='max-h-[500px] overflow-y-scroll'>
      {courses.map((course,index) => {
        return <CourseBox key={index} coursename={course} imgg="/images/design.avif" desc={descriptions[index]} enroll={enroll}/>
      })}
    </div>
  )
}

export default DesignCourse