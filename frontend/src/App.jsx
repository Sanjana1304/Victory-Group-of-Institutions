import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import LandingPage from './layouts/LandingPage'
import PrivateRoute from "./context/PrivateRoute";
import HomePageStudent from "./layouts/HomePageStudent";
import AdminHomePage from "./layouts/AdminHomePage";
import AllCourses from './components/homeBox/AllCourses';
import Notifications from './components/homeBox/Notifications';


function App() {

  return (
    <BrowserRouter>
    <DataProvider>
      <Routes>
        <Route path="/" element={<LandingPage/>} />


        <Route path="/home" element={<PrivateRoute/>} >
          <Route path="" element={<HomePageStudent/>} />
          <Route path='/home/allcourses' element={<AllCourses/>} />
          <Route path='/home/notifications' element={<Notifications/>} />
        </Route>

        <Route path="/admin" element={<PrivateRoute/>} >
          <Route path="" element={<AdminHomePage/>} />
        </Route>
        
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </DataProvider>
  </BrowserRouter>
  )
}

export default App
