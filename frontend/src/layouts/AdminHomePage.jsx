import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const AdminHomePage = () => {
  const {handleSignOut} = useContext(DataContext);
  return (
    <div>
      <header className='flex items-center justify-between p-2 mx-2'>
              <button 
                className="flex"
                onClick={() => navig('/admin')}
                >
                <span className='text-xl font-bold text-blue'>Victory Group Of Institutions</span>
              </button>
            
              <a
                className="p-2 px-3 items-center justify-center text-base font-normal text-white bg-red border border-transparent rounded-full"
                role="button"
                onClick={handleSignOut}
              >
                Log Out
              </a>
      </header>
    

    </div>
  )
}

export default AdminHomePage        