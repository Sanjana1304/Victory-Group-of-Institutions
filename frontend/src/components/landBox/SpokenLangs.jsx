import React from 'react'
import CourseBox from './CourseBox'

const SpokenLangs = ({enroll}) => {
  const courses = ["English","Hindi (Spoken / Prathamic / Madhyama / Rashtra Basha)","French","Tamil","German","Japanese"];

  const descriptions = [
    "Our English course provides a comprehensive introduction to the English language. Learn how to speak, read, and write in English with confidence and fluency.",
    "Our Hindi course provides a comprehensive introduction to the Hindi language. Learn how to speak, read, and write in Hindi with confidence and fluency. We also give tutoring on Prathamic, Madhyama, and Rashtra Basha exams along with application guidance.",
    "Our French course provides a comprehensive introduction to the French language. Learn how to speak, read, and write in French with confidence and fluency.",
    "Our Tamil course provides a comprehensive introduction to the Tamil language. Learn how to speak, read, and write in Tamil with confidence and fluency.",
    "Our German course provides a comprehensive introduction to the German language. Learn how to speak, read, and write in German with confidence and fluency.",
    "Our Japanese course provides a comprehensive introduction to the Japanese language. Learn how to speak, read, and write in Japanese with confidence and fluency."
  ]

  return (
    <div className='max-h-[500px] overflow-y-scroll'>
      {courses.map((course,index) => {
        return <CourseBox key={index} coursename={course} imgg="/images/spokenlang.jpg" desc={descriptions[index]} enroll={enroll}/>
      })}
    </div>
  )
}

export default SpokenLangs