import React, { createContext, useContext } from "react";

const NumberContext = createContext();

export const useNumberContext = () => useContext(NumberContext);

export const NumberProvider = ({ children, color, size }) => (
  <NumberContext.Provider value={{ color, size }}>
    {children}
  </NumberContext.Provider>
);
