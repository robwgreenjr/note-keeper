import React, { useState, createContext } from 'react';

const EditContext = createContext();

const EditProvider = ({ children }) => {
  const [edit, setEdit] = useState(0);

  return (
    <EditContext.Provider value={[edit, setEdit]}>
      {children}
    </EditContext.Provider>
  );
};

export { EditProvider, EditContext };
