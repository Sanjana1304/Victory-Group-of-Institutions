import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const HomePageStudent = () => {
  const {handleSignOut} = useContext(DataContext);
  return (
    <div>
      HomePageStudent
      <button onClick={handleSignOut}>Logout</button>
    </div>
  )
}

export default HomePageStudent