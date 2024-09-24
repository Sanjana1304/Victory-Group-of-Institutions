import React from 'react'
import CourseBox from './CourseBox'

const SummerCamp = ({enroll}) => {

  const courses = ["Art & Craft","Dance","Music","Theatre","Yoga","Fitness","Coding","Robotics","Science Experiments"];

  const descriptions = [
    "Our Art & Craft camp provides a creative outlet for children to explore their artistic talents. Learn how to create beautiful crafts, paintings, and sculptures using different art materials and techniques.",
    "Our Dance camp provides a fun and energetic environment for children to learn different dance styles and routines. Learn how to move to the beat, improve coordination, and express yourself through dance.",
    "Our Music camp provides an interactive platform for children to learn different musical instruments and genres. Learn how to play, sing, and compose music with guidance from experienced instructors.",
    "Our Theatre camp provides a stage for children to showcase their acting skills and creativity. Learn how to perform, improvise, and collaborate on theatrical productions with fellow campers.",
    "Our Yoga camp provides a peaceful and mindful environment for children to practice yoga and meditation. Learn how to improve flexibility, focus, and relaxation through yoga poses and breathing exercises.",
    "Our Fitness camp provides a fun and challenging workout for children to stay active and healthy. Learn how to improve strength, endurance, and agility through various fitness activities and games.",
    "Our Coding camp provides an introduction to computer programming and coding concepts. Learn how to create games, apps, and websites using block-based and text-based coding languages.",
    "Our Robotics camp provides an interactive platform for children to learn about robotics and engineering. Learn how to build, program, and control robots using sensors, motors, and microcontrollers.",
    "Our Science Experiments camp provides a hands-on experience for children to explore different scientific concepts and phenomena. Learn how to conduct experiments, make observations, and draw conclusions through interactive science activities."
  ]

  return (
    <div className='max-h-[500px] overflow-y-scroll'>
      {courses.map((course,index) => {
        return <CourseBox key={index} coursename={course} imgg="/images/summercamp.webp" desc={descriptions[index]} enroll={enroll}/>
      })}
    </div>
  )
}

export default SummerCamp