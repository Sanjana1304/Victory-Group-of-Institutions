import React from 'react'
import CourseBox from './CourseBox'

const AccountSolns = () => {
  const courses = ["Accounting Basics","Financial Accounting","SAP","Tally ERP","Advanced Accounting","Cost Accounting","Auditing","Taxation","Corporate Finance","Portfolio Management"];

  const descriptions = [
    "Our Accounting Basics course provides a comprehensive introduction to accounting principles and practices. Learn how to record financial transactions, prepare financial statements, and analyze business performance.",
    "Our Financial Accounting course provides a comprehensive introduction to financial accounting principles and practices. Learn how to prepare financial statements, analyze financial data, and make informed business decisions.",
    "Our SAP course provides a comprehensive introduction to SAP, a popular enterprise resource planning software. Learn how to use SAP modules, manage business processes, and optimize organizational performance.",
    "Our Tally ERP course provides a comprehensive introduction to Tally ERP, a popular accounting software. Learn how to manage financial transactions, generate reports, and streamline accounting processes using Tally ERP.",
    "Our Advanced Accounting course provides a comprehensive introduction to advanced accounting principles and practices. Learn how to prepare complex financial statements, analyze financial data, and make strategic business decisions.",
    "Our Cost Accounting course provides a comprehensive introduction to cost accounting principles and practices. Learn how to calculate production costs, analyze cost data, and make informed business decisions.",
    "Our Auditing course provides a comprehensive introduction to auditing principles and practices. Learn how to evaluate financial statements, assess internal controls, and ensure compliance with auditing standards.",
    "Our Taxation course provides a comprehensive introduction to taxation principles and practices. Learn how to calculate taxes, prepare tax returns, and comply with tax regulations.",
    "Our Corporate Finance course provides a comprehensive introduction to corporate finance principles and practices. Learn how to evaluate investment opportunities, manage financial risks, and optimize capital structure.",
    "Our Portfolio Management course provides a comprehensive introduction to portfolio management principles and practices. Learn how to construct investment portfolios, analyze asset classes, and optimize investment"
  ]

  return (
    <div className='max-h-[500px] overflow-y-scroll'>
      {courses.map((course,index) => {
        return <CourseBox coursename={course} imgg="/images/accounts.jpg" desc={descriptions[index]}/>
      })}
    </div>
  )
}

export default AccountSolns