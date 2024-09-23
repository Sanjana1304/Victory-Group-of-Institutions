import React,{ useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { contactUs } from '../../api-client';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            let res = await contactUs(name, email,phone, message);
            
            if(res === "success"){
                setSuccess(true);
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
            }
            else{
              alert("Error sending enquiry");
            }
          } catch (error) {
            console.log(error);
          }
    }

  return (
    <>
    <h1 className='text-center mb-10 text-3xl text-blue font-bold' id='contact'>Contact Us</h1>

    <div className='flex flex-col sm:flex-row justify-around shadow w-[90%] mx-auto p-3 mb-10'>
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

        <form className='sm:w-[50%] p-2 rounded' onSubmit={handleSubmit}>
            <div className="form-group flex flex-col w-full">
                
                <label htmlFor="name" className='text-xl font-semibold mb-1'>Name</label>
                <input
                    type="text"
                    className="form-control w-full text-green border border-gray-300 p-2 mb-4 rounded-md transition duration-300 ease-in-out focus:border-blue focus:outline-none font-semibold"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />


                <label htmlFor="email" className='text-xl font-semibold mb-1'>Email</label>
                <input 
                    type="email" 
                    className="form-control text-green border border-gray-300 p-2 mb-4 rounded-md transition duration-300 ease-in-out focus:border-blue focus:outline-none font-semibold"
                    id="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="phone" className='text-xl font-semibold mb-1'>Phone</label>
                <input 
                    type="tel" 
                    className="form-control text-green border border-gray-300 p-2 mb-4 rounded-md transition duration-300 ease-in-out focus:border-blue focus:outline-none font-semibold"
                    id="phone" 
                    placeholder="Enter your phone number" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />

                <label htmlFor="message" className='text-xl font-semibold mb-1'>Message</label>
                <textarea 
                    className="form-control text-green border border-gray-300 p-2 mb-4 rounded-md transition duration-300 ease-in-out focus:border-blue focus:outline-none font-semibold"
                    id="message" 
                    rows="4"
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)} >
                
                </textarea>

                <button type="submit" className="btn mt-3 bg-blue p-2 rounded text-white w-[70%] mx-auto">Submit</button>

                {success && <p style={{ color: '#28a745' }}>Your enquiry has been sent successfully !</p>}
            
            </div>
        </form>
    </div>
    </>
  )
}

export default ContactForm