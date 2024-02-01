import React, { createContext, useState } from 'react';

const DataContext = createContext([]);

// Create a provider component to wrap your app
const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
