// src/context/NavigationContext.js
import React, { createContext, useState } from 'react';

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [page, setPage] = useState('signin');

  const goToPage = (newPage) => {
    setPage(newPage);
  };

  return (
    <NavigationContext.Provider value={{ page, goToPage }}>
      {children}
    </NavigationContext.Provider>
  );
};
