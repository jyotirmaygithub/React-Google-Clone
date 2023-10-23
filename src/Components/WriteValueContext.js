// WriteValueContext.js
import React, { useState } from 'react';

const WriteValueContext = React.createContext();

export function WriteValueProvider({ children }) {
  const [writevalue, setwritevalue] = useState('');

  return (
    <WriteValueContext.Provider value={{ writevalue, setwritevalue }}>
      {children}
    </WriteValueContext.Provider>
  );
}

export { WriteValueProvider };
