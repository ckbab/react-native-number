import React, { createContext, useContext } from "react";

const NumberContext = createContext();

export const useNumberContext = () => useContext(NumberContext);

export const NumberProvider = ({ children, color, size, type }) => (
  <NumberContext.Provider value={{ color, size, type }}>
    {children}
  </NumberContext.Provider>
);
