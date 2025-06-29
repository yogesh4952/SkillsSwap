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
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [firstname, setFirstname] = useState<string>(() => {
    return localStorage.getItem('firstname') || '';
  });

  const [lastname, setLastname] = useState<string>(() => {
    return localStorage.getItem('lastname') || '';
  });

  const [bio, setBio] = useState<string>(() => {
    return localStorage.getItem('bio') || '';
  });

  const [location, setLocation] = useState<string>(() => {
    return localStorage.getItem('location') || '';
  });

  const [wants, setWants] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem('wants') || '[]');
  });

  const [teachInp, setTeachInp] = useState<string>(() => {
    return localStorage.getItem('teachInp') || '';
  });

  const [teach, setTeach] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem('teach') || '[]');
  });

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleSubmit = () => {
    setError('');
    setSuccess('');

    try {
    } catch (error) {}
  };

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
  };
  useEffect(() => {
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('bio', bio);
    localStorage.setItem('location', location);
    localStorage.setItem('wants', JSON.stringify(wants));
    localStorage.setItem('teach', JSON.stringify(teach));
  }, [firstname, lastname, bio, location, wants, teach]);

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
