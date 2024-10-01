import React from 'react'
import CourseBox from './CourseBox'

const Tuitions = ({enroll}) => {
  const courses = ["Mathematics","Physics","Chemistry","Biology","Computer Science","Economics","Business Studies","Accountancy","History","Geography","English","Social Science","Hindi"];

  const descriptions = [
    "Our Mathematics tuition classes are designed to help students master the concepts of algebra, geometry, trigonometry, and calculus. Learn how to solve complex problems, apply mathematical formulas, and enhance logical reasoning skills.",
    "Our Physics tuition classes are designed to help students master the principles of mechanics, electricity, magnetism, and thermodynamics. Learn how to conduct experiments, analyze data, and solve real-world problems using physics concepts.",
    "Our Chemistry tuition classes are designed to help students master the principles of organic, inorganic, and physical chemistry. Learn how to balance chemical",
    "Our Biology tuition classes are designed to help students master the concepts of cell biology, genetics, evolution, and ecology. Learn how to conduct experiments, analyze data, and understand the principles of life sciences.",
    "Our Computer Science tuition classes are designed to help students master the concepts of programming, data structures, algorithms, and software development. Learn how to write efficient code, design algorithms, and develop applications using computer science principles.",
    "Our Economics tuition classes are designed to help students master the principles of microeconomics, macroeconomics, and econometrics. Learn how to analyze economic data, understand market trends, and make informed decisions based on economic principles.",
    "Our Business Studies tuition classes are designed to help students master the concepts of marketing, finance, human resources, and operations management. Learn how to develop business strategies, analyze market trends, and make informed decisions based on business principles.",
    "Our Accountancy tuition classes are designed to help students master the principles of financial accounting, cost accounting, and management accounting. Learn how to prepare financial statements, analyze financial data, and make informed decisions based on accounting principles.",
    "Our History tuition classes are designed to help students master the concepts of ancient, medieval, modern, and contemporary history. Learn how to analyze historical events, understand cultural developments, and make connections between past and present.",
    "Our Geography tuition classes are designed to help students master the principles of physical geography, human geography, and environmental geography. Learn how to analyze geographical data, understand spatial relationships, and make connections between human activities and the environment.",
    "Our English tuition classes are designed to help students master the principles of grammar, vocabulary, literature, and writing. Learn how to improve reading comprehension, enhance writing skills, and develop critical thinking through English language studies.",
    "Our Social Science tuition classes are designed to help students master the concepts of sociology, psychology, political science, and anthropology. Learn how to analyze social phenomena, understand human behavior, and make connections between individual actions and societal structures.",
    "Our Hindi tuition classes are designed to help students master the principles of Hindi language, literature, and culture. Learn how to improve reading comprehension, enhance writing skills, and develop critical thinking through Hindi language studies."
  ]

  const fees = [
    [2000, 3000, 4000],
    [3000, 4000, 5000],
    [5000, 7000, 9000],
    [4000, 6000, 8000],
    [2500, 3500, 4500],
    [2500, 3500, 4500],
    [2500, 3500, 4500],
    [2500, 3500, 4500],
    [2500, 3500, 4500],
    [2500, 3500, 4500],
    [2500, 3500, 4500],
    [2500, 3500, 4500],
    [2500, 3500, 4500]
  ]




  return (
     <div className='max-h-[500px] overflow-y-scroll'>
      <h1 className='gont-bold text-lg mb-1'>We provide Tuitions for all classes from I to XII</h1>
      {courses.map((course,index) => {
        return <CourseBox key={index} coursename={course} imgg="/images/tuition.jpg" desc={descriptions[index]} enroll={enroll} fees={fees[index]}/>
      })}
    </div>
  )
}

export default Tuitions