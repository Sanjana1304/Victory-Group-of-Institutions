import React from 'react'
import CourseBox from './CourseBox'

const OfficeTools = ({enroll}) => {
  const courses = ["Microsoft Excel","Advanced Microsoft Excel","Microsoft Word","Microsoft PowerPoint"];

  const descriptions = [
    "Our Microsoft Excel course provides a comprehensive introduction to Excel, a powerful spreadsheet application. Learn how to create, format, and analyze data using Excel's advanced features.",
    "Our Advanced Microsoft Excel course builds on the foundational skills learned in the Excel course. Learn how to use advanced formulas, functions, and tools to analyze complex data sets and create dynamic reports.",
    "Our Microsoft Word course provides a comprehensive introduction to Word, a popular word processing application. Learn how to create, format, and edit documents using Word's advanced features.",
    "Our Microsoft PowerPoint course provides a comprehensive introduction to PowerPoint, a powerful presentation application. Learn how to create, design, and deliver professional presentations using PowerPoint's advanced features.",
  ]

  return (
    <div className='max-h-[500px] overflow-y-scroll'>
      {courses.map((course,index) => {
        return <CourseBox coursename={course} imgg="/images/msoffice.jpg" desc={descriptions[index]} enroll={enroll}/>
      })}
    </div>
  )
}

export default OfficeTools