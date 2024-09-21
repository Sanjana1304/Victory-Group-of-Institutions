import React from 'react'

const Sidebar = ({activeItem,setActiveItem}) => {
    const options = ["Programming & Development","Office Productivity Tools","Business & Accounting Solutions","Spoken Languages","Creative Design & Multimedia", "Tuitions","Summer Camp"]

    return (
        <div className="w-full sm:w-64 bg-gradient-to-b from-cyan-500 to-purple-400 text-white flex flex-col rounded">
                <nav className="flex-grow">
                    <ul>
                        {
                            options.map((opt)=>(
                                <li
                                key={opt}
                                className={`p-5 text-xl rounded cursor-pointer ${activeItem === opt ? 'bg-gradient-to-b from-cyan-400 to-cyan-600' : 'hover:bg-gradient-to-b from-cyan-300 to-purple-600'}`}
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