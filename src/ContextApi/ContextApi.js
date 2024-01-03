// ApiContext.js

import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Create the context
const ApiContext = createContext();

// Create a provider component
export const ApiProvider = ({ children }) => {
  const [DataDemo, setData] = useState(null);

  const API_URL = "http://localhost:3002/data";

  const fetchData = async () => {
    try {    
      const response = await axios.get(API_URL);
      setData(response.data);
      console.log("data====,",response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when component mounts (optional)
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        DataDemo,
        fetchData, // You can expose this function to make API calls from components
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

// Custom hook to consume the context
export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};
