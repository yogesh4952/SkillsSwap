// store/Context.jsx

import {
  createContext,
  useState,
  useContext,
  type ReactNode,
  useEffect,
} from 'react';

interface DataContextType {
  firstname: string;
  setFirstname: (value: string) => void;
  lastname: string;
  setLastname: (value: string) => void;
  bio: string;
  setBio: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  wants: string[];
  setWants: (value: string[]) => void;
  teachInp: string;
  setTeachInp: (value: string) => void;
  teach: string[];
  setTeach: (value: string[]) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  success: string;
  setSuccess: (value: string) => void;
  error: string;
  setError: (value: string) => void;
  imageUrl: string;
  setImageUrl: (value: string) => void;
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [firstname, setFirstname] = useState(
    () => localStorage.getItem('firstname') || ''
  );
  const [lastname, setLastname] = useState(
    () => localStorage.getItem('lastname') || ''
  );
  const [bio, setBio] = useState(() => localStorage.getItem('bio') || '');
  const [location, setLocation] = useState(
    () => localStorage.getItem('location') || ''
  );
  const [wants, setWants] = useState(() =>
    JSON.parse(localStorage.getItem('wants') || '[]')
  );
  const [teachInp, setTeachInp] = useState(
    () => localStorage.getItem('teachInp') || ''
  );
  const [teach, setTeach] = useState(() =>
    JSON.parse(localStorage.getItem('teach') || '[]')
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('bio', bio);
    localStorage.setItem('location', location);
    localStorage.setItem('wants', JSON.stringify(wants));
    localStorage.setItem('teach', JSON.stringify(teach));
  }, [firstname, lastname, bio, location, wants, teach]);

  const value: DataContextType = {
    firstname,

    setFirstname,
    lastname,
    setLastname,
    bio,
    setBio,
    location,
    setLocation,
    wants,
    setWants,
    teachInp,
    setTeachInp,
    teach,
    setTeach,
    setSuccess,
    success,
    setError,
    error,
    isLoading,
    setIsLoading,

    imageUrl,
    setImageUrl,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// Custom hook for safe context access
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a ContextProvider');
  }
  return context;
};
