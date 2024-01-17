import React, { createContext, useContext } from "react";

const NumberContext = createContext();

export const useNumberContext = () => useContext(NumberContext);

export const NumberProvider = ({
  borderColor,
  children,
  color,
  size,
  type,
}) => (
  <NumberContext.Provider value={{ borderColor, color, size, type }}>
    {children}
  </NumberContext.Provider>
);
