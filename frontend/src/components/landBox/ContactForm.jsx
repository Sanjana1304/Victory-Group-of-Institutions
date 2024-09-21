import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <>
    <h1 className='text-center mb-10 text-3xl text-blue font-bold' id='contact'>Contact Us</h1>

    <div className='flex justify-around shadow w-[90%] mx-auto p-3 mb-10'>
        <div className='flex flex-col p-2'>
            <div className='flex mb-4 p-2'>
                
                <FaPhoneAlt className='mr-2 mt-1 text-xl text-blue' />
                
                <div>
                <p className='text-xl font-bold mb-2'>Phone</p>
                <i className='font-bold text-lg'>+91 9962360444</i>
                </div>
                
            </div>

            <div className='mb-4 flex'>
                
                <IoMdMail className='mr-2 mt-1 text-xl text-blue' />
                
                <div>
                <p className='text-xl font-bold mb-2'>Email</p>
                <i className='font-bold text-lg'>vd@gmail.com</i>
                </div>
                
            </div>

            <div className='mb-4 flex'>
                
                <FaLocationDot className='mr-2 mt-1 text-xl text-blue' />
                
                <div>
                <p className='text-xl font-bold mb-2'>Address</p>
                <i className='font-bold text-lg'>1234 Main St, City, State, 12345</i>
                </div>
                
            </div>

            <div className='mb-4 flex'>
                
                <FaClock className='mr-2 mt-1 text-xl text-blue' />
                
                <div>
                <p className='text-xl font-bold mb-2'>Our Timings</p>
                <i className='font-bold text-lg'>Mon - Sat : 08:00 AM - 09:00 PM</i>
                </div>
                
            </div>
            
        </div>

        <form className='w-[50%] p-2 rounded'>
            <div className="form-group flex flex-col">
                
                <label htmlFor="name" className='text-xl font-semibold mb-1'>Name</label>
                <input
                    type="text"
                    className="form-control text-green border border-gray-300 p-2 mb-4 rounded-md transition duration-300 ease-in-out focus:border-blue focus:outline-none font-semibold"
                    id="name"
                    placeholder="Enter your name"
                />


                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    className="form-control text-green border border-gray-300 p-2 mb-4 rounded-md transition duration-300 ease-in-out focus:border-blue focus:outline-none font-semibold"
                    id="email" 
                    placeholder="Enter your email" 
                />

                <label htmlFor="phone">Phone</label>
                <input 
                    type="tel" 
                    className="form-control text-green border border-gray-300 p-2 mb-4 rounded-md transition duration-300 ease-in-out focus:border-blue focus:outline-none font-semibold"
                    id="phone" 
                    placeholder="Enter your phone number" 
                />

                <label htmlFor="message">Message</label>
                <textarea 
                    className="form-control text-green border border-gray-300 p-2 mb-4 rounded-md transition duration-300 ease-in-out focus:border-blue focus:outline-none font-semibold"
                    id="message" 
                    rows="3">
                
                </textarea>

                <button type="submit" className="btn mt-3 bg-blue p-2 rounded text-white w-[70%] mx-auto">Submit</button>
            
            </div>
        </form>
    </div>
    </>
  )
}

export default ContactForm