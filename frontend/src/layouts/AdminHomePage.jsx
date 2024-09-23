import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const AdminHomePage = () => {
  const {handleSignOut} = useContext(DataContext);
  return (
    <div>
      AdminHomePage
      <button onClick={handleSignOut}>Logout</button>

    </div>
  )
}

export default AdminHomePage