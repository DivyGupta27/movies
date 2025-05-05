import React, { createContext, useState } from 'react';

export const PageContext = createContext();

const ProviderContext = ({ children }) => {
  const [mypage, setPage] = useState(1);

  const inc = () => setPage(prev => prev + 1);
  const dec = () => setPage(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <PageContext.Provider value={{ mypage, inc, dec }}>
      {children}
    </PageContext.Provider>
  );
};

export default ProviderContext;
