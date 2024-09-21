import React from 'react'

const Sidebar = ({activeItem,setActiveItem}) => {
    const options = ["Programming & Development","Office Productivity Tools","Business & Accounting Solutions","Spoken Languages","Creative Design & Multimedia", "Tuitions","Summer Camp"]

    return (
        <div className="w-64  bg-pink-800 text-white flex flex-col rounded">
                <nav className="flex-grow">
                    <ul>
                        {
                            options.map((opt)=>(
                                <li
                                key={opt}
                                className={`p-5 text-xl rounded cursor-pointer ${activeItem === opt ? 'bg-pink-700' : 'hover:bg-pink-700'}`}
                                onClick={() => setActiveItem(opt)}
                            >
                                {opt}
                            </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
    )
}

export default Sidebar