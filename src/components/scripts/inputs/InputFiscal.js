import React, { createContext, useState } from 'react';

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [matriculaValue, setMatriculaValue] = useState('');

  return (
    <InputContext.Provider value={{ inputValue, setInputValue, matriculaValue, setMatriculaValue }}>
      {children}
    </InputContext.Provider>
  );
};
