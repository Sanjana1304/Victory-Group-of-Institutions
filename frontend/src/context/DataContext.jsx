import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosConfig';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const name = "Sanjana";
    const navig = useNavigate();

    const handleSignOut = async() => {
        try {
            await api.post('/api/auth/logout');
            navig('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }finally{
          alert("Logged Out Successfully");
        }
    }
    return (
        <DataContext.Provider value={{ name,handleSignOut }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;