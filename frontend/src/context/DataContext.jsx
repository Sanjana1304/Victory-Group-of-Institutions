import React, { createContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const name = "Sanjana";
    return (
        <DataContext.Provider value={{ name }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;