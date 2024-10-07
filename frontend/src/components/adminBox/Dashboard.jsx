import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import BarChart from './BarChart';
import LineChart from '../charts/LineChart';
import PieChart from '../charts/PieChart';
import DonutChart from '../charts/DonutChart';
import { FaDollarSign } from "react-icons/fa";

// Register the components needed
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const Dashboard = ({allStudentsCount,inProgressStudentsCount,completedStudentsCount,genEnquiryCount,openEnquiryCount,closedEnquiryCount,pendingRequestsCount,resolvedRequestsCount}) => {
  const currentDate = new Date();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  //past 3 months
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentMonthName = monthNames[currentMonth];
  const previousMonthIndex = (currentMonth - 1 + 12) % 12; // Ensure wrap around for January
  const previousMonthName = monthNames[previousMonthIndex];

  const monthBeforePreviousIndex = (currentMonth - 2 + 12) % 12; // Ensure wrap around for January
  const monthBeforePreviousName = monthNames[monthBeforePreviousIndex];


  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-gray-600 text-2xl font-bold mb-2">Dashboard</h1>
        {/* [#FFD700] [#E0AA3E] */}
        <div className=' bg-gradient-to-r from-purple-300 to-purple-500 p-3 font-semibold w-full mb-2 rounded-lg text-center flex justify-between'>
          <div>
          <FaDollarSign className='text-7xl text-[#e68a00]' />
          </div>
          <div>
          Total Revenue
          <br />
          <span className='font-bold text-4xl'>Rs. 1000</span>
        
          </div>
          <div>
          <FaDollarSign className='text-7xl text-[#e68a00]' />
          </div>
          
        </div>

        <div className="flex justify-between mb-5">
          <div className='bg-gradient-to-r from-blue to-cyan-600 p-7 text-lg rounded-lg py-10 text-white text-center '>
            Total Registered Users
            <br />
            <span className='font-semibold text-2xl'>{allStudentsCount}</span>
          </div>

          <div className='bg-gradient-to-r from-cyan-400 to-purple-600 p-7 text-lg rounded-lg py-10 text-white text-center '>
          Total Enrolled Users
            <br />
            <span className='font-semibold text-2xl'>{inProgressStudentsCount}</span>
          </div>

          <div className='bg-gradient-to-r from-purple-400 to-blue p-7 text-lg rounded-lg py-10 text-white text-center '>
          Total Previous Users
            <br />
            <span className='font-semibold text-2xl'>{completedStudentsCount}</span>
          </div>

          <div className='bg-gradient-to-r from-cyan-800 to-blue p-7 text-lg rounded-lg py-10 text-white text-center '>
            Total User Enquiries
            <br />
            <span className='font-semibold text-2xl'>{genEnquiryCount}</span>
          </div>

        </div>


        <div className="flex gap-3 justify-around">
          <div className="flex justify-center w-3/4 h-[470px] bg-white p-2 rounded-lg shadow-md">
           <PieChart 
            className='w-full' 
            heading={'Distribution of Field in Enrollments'}
            xdata={["Programming & Development","Office Productivity Tools","Business & Accounting Solutions","Spoken Languages","Creative Design & Multimedia", "Tuitions","Summer Camp"]}
            />
          </div>

          <div className='w-1/4 flex flex-col justify-between'>
            <div className=" bg-white p-2 py-5 rounded-lg shadow-md">
              <LineChart heading={'Enrollments over 3 months'} xdata= {[monthBeforePreviousName,previousMonthName,currentMonthName]} />
            </div>

            <div className='bg-white p-2 py-5 rounded-lg shadow-md'>
            <BarChart heading={'Enquiries'} xdata={['Pending','Resolved']} ydata={[openEnquiryCount,closedEnquiryCount]} legendVisibility={false} />
          </div>

            <div className="flex justify-center w-full bg-white p-1 h-1/3 rounded-lg shadow-md">
              <DonutChart dataa={[pendingRequestsCount,resolvedRequestsCount]} heading={'Student Support'} labels={['Open','Closed']}/> 
            </div>

          </div>

        </div>

        
        
        
      </div>
    </div>
  )
}

export default Dashboard