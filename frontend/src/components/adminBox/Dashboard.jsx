import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import BarChart from './BarChart';

// Register the components needed
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const Dashboard = () => {
  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>

        <div className="flex justify-between mb-5">
          <div className='bg-gradient-to-r from-blue to-cyan-600 p-5 text-xl rounded-lg py-10 text-white text-center '>
            Total Registered Users
            <br />
            <span className='font-semibold text-2xl'>600</span>
          </div>

          <div className='bg-gradient-to-r from-cyan-400 to-purple-600 p-5 text-xl rounded-lg py-10 text-white text-center '>
          Total Enrolled Users
            <br />
            <span className='font-semibold text-2xl'>600</span>
          </div>

          <div className='bg-gradient-to-r from-purple-400 to-blue p-5 text-xl rounded-lg py-10 text-white text-center '>
          Total Previous Users
            <br />
            <span className='font-semibold text-2xl'>600</span>
          </div>

          <div className='bg-gradient-to-r from-cyan-800 to-blue p-5 text-xl rounded-lg py-10 text-white text-center '>
            Total User Enquiries
            <br />
            <span className='font-semibold text-2xl'>600</span>
          </div>

        </div>
        <div className="flex border justify-around">
        <div className=" bg-white p-2 rounded-lg shadow-md">
          <BarChart />
        </div>
        <div className=" bg-white p-2 rounded-lg shadow-md">
          <BarChart />
        </div>

        </div>
        
      </div>
    </div>
  )
}

export default Dashboard