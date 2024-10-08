import React from 'react'
import CourseBox from './CourseBox'

const PgmDev = ({enroll}) => {
  const courses = ["Problem Solving using Java","Python Programming","C/C++ Programming","Python for Data Science, AI, Machine Learning","Database Management using MySQL","Database Management using MongoDB","Javascript with HTML5 & CSS3","Web Development using Python Django","Web Development using MERN","Web Development using MEAN","Web Development using Flask Python","Web Development using Java Spring Boot","Mobile App Development using Java","Mobile App Development using Kotlin"];

  const descriptions = [
    "Our Problem Solving using Java course equips students with the skills to tackle complex problems by applying Java programming concepts. Learn how to design efficient algorithms, implement solutions, and enhance logical thinking through hands-on coding exercises.",
    "Our Python Programming** course is designed to help students master the Python programming language. Learn how to write efficient code, create algorithms, and develop applications using Python.",
    "Our C/C++ Programming course is designed to help students master the C and C++ programming languages. Learn how to write efficient code, create algorithms, and develop applications using C/C++.",
    "Our Python for Data Science, AI, and Machine Learning course provides a comprehensive introduction to Python's powerful tools for data analysis, artificial intelligence, and machine learning. Gain practical experience in building models, analyzing data, and solving real-world problems.",
    "Our Database Management using MySQL course provides a comprehensive introduction to MySQL, a popular open-source relational database management system. Learn how to design, implement, and manage databases using MySQL.",
    "Our Database Management using MongoDB course provides a comprehensive introduction to MongoDB, a popular NoSQL database management system. Learn how to design, implement, and manage databases using MongoDB.",
    "Our Javascript with HTML5 & CSS3 course provides a comprehensive introduction to web development using JavaScript, HTML5, and CSS3. Learn how to create interactive web pages, design responsive layouts, and build dynamic websites.",
    "Our Web Development using Python Django course provides a comprehensive introduction to web development using Python and Django. Learn how to build web applications, design user interfaces, and deploy websites using Django.",
    "Our Web Development using MERN course provides a comprehensive introduction to web development using the MERN stack (MongoDB, Express, React, Node.js). Learn how to build full-stack web applications, design interactive user interfaces, and deploy websites using the MERN stack.",
    "Our Web Development using MEAN course provides a comprehensive introduction to web development using the MEAN stack (MongoDB, Express, Angular, Node.js). Learn how to build full-stack web applications, design interactive user interfaces, and deploy websites using the MEAN stack.",
    "Our Web Development using Flask Python course provides a comprehensive introduction to web development using Python and Flask. Learn how to build web applications, design user interfaces, and deploy websites using Flask.",
    "Our Web Development using Java Spring Boot course provides a comprehensive introduction to web development using Java and Spring Boot. Learn how to build web applications, design user interfaces, and deploy websites using Spring Boot.",
    "Our Mobile App Development using Java course provides a comprehensive introduction to Android app development using Java. Learn how to build mobile applications, design user interfaces, and deploy apps to the Google Play Store.",
    "Our Mobile App Development using Kotlin course provides a comprehensive introduction to Android app development using Kotlin. Learn how to build mobile applications, design user interfaces, and deploy apps to the Google Play Store."

  ]

  const fees = [
    [5000, 7000, 9000],
    [5000, 7000, 9000],
    [5000, 7000, 9000],
    [5000, 7000, 9000],
    [5000, 7000, 9000],
    [5000, 7000, 9000],
    [5000, 7000, 9000],
    [5000, 7000, 9000],
    [5000, 7000, 9000],
    [5000, 7000, 9000],
    [5000, 7000, 9000],
    [5000, 7000, 9000],
    [5000, 7000, 9000],
    [5000, 7000, 9000]
  ]
  
  return (
    <div className='max-h-[500px] overflow-y-scroll'>
      {courses.map((course,index) => {
        return <CourseBox key={index} coursename={course} courseCat={'Programming & Development'} imgg="/images/comp2.avif" desc={descriptions[index]} enroll={enroll} fees={fees[index]}/>
      })}
    </div>
  )
}

export default PgmDev