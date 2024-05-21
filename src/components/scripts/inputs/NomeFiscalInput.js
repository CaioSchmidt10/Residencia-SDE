
import React, { createContext, useState } from 'react';

export const nomeFiscal = createContext();

export const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <nomeFiscal.Provider value={{ inputValue, setInputValue }}>
      {children}
    </nomeFiscal.Provider>
  );
};
