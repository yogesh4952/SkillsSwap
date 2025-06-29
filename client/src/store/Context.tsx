// store/Context.jsx

import { useAuth } from '@clerk/clerk-react';
import axios from 'axios';
import {
  createContext,
  useState,
  useContext,
  type ReactNode,
  useEffect,
} from 'react';
import { toast } from 'react-toastify';

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
  handleSubmit: () => void;
  token: string;
  setToken: (value: string) => void;
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
  const [token, setToken] = useState('');

  // const { getToken } = useAuth();

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     const token = await getToken();
  //     if (token) setToken(token);
  //   };
  //   fetchToken();
  // }, [getToken]);

  const handleSubmit = async () => {
    setError('');
    setSuccess('');
    const formdata = new FormData();
    if (lastname) formdata.append('lastname', lastname);
    if (bio) formdata.append('bio', bio);
    if (location) formdata.append('location', location);
    if (wants) formdata.append('wants', JSON.stringify(wants));
    if (teach) formdata.append('teach', JSON.stringify(teach));

    try {
      setIsLoading(true);

      const response = await axios.put(
        'http://localhost:5000/api/user/update-data',
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response.data);
      setIsLoading(false);

      if (response.data.success) {
        setSuccess('Profile updated successfully');
        toast.success('Profile updated successfully');
      } else {
        setError(response.data.message);
        toast.error(response.data.message);
      }
    } catch (err) {
      setIsLoading(false);
      setError('Failed to update profile');
      toast.error('Failed to update profile');
      console.error('Error updating profile:', err);
    }
  };

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
    handleSubmit,
    setSuccess,
    success,
    setError,
    error,
    isLoading,
    setIsLoading,
    token,
    setToken,
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
