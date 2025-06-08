import { useUser } from '@clerk/clerk-react';
import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
// import type { User } from '@clerk/clerk-react';

// Define the context shape
interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
}

// Initialize context with undefined
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const { user } = useUser(); // Use Clerk's useUser hook

  useEffect(() => {
    if (user) {
      setUserName(user.firstName || '');
      setEmail(user.primaryEmailAddress?.emailAddress || '');
    }
  }, [user]);

  const value: UserContextType = {
    userName,
    setUserName,
    email,
    setEmail,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used inside a UserProvider');
  }
  return context;
};
