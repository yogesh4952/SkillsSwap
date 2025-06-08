// src/context/UserContext.tsx
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

const UserContext = createContext(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState(null);

  // const [email, setEmail] = useState();

  const value: any = {
    userName,
    setUserName,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Custom hook
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used inside a UserProvider');
  }
  return context;
};
