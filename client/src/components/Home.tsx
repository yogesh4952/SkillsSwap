import { useNavigate } from 'react-router-dom';
import Banner from '../pages/Banner';
import WhyChoose from '../pages/WhyChoose';
import Works from '../pages/Works';
import Footer from './Footer';
import { useAuth, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import axiosClient from '../axiosInstance';

const Home = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const handleRedirectStartLearning = () => {
    try {
      if (isSignedIn) {
        navigate('/start-learning');
      } else {
        navigate('/');
        toast.error('You must signed in !!!');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });
  });

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      const fetch = async () => {
        try {
          const token = await getToken();
          const response = await axiosClient.put(
            '/user/update-location',
            { longitude, latitude },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log('Location updated:', response.data);
        } catch (error) {
          console.log('Error updating location:', error);
        }
      };

      fetch();
    }
  }, [longitude, latitude]);

  const { getToken } = useAuth();

  useEffect(() => {
    const fetch = async () => {
      try {
        const token = await getToken();
        const response = await axiosClient.put(
          '/user/update-location',
          { longitude, latitude },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response) {
          console.log(response);
        } else {
          toast.error('response aayen');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [longitude, latitude]);
  return (
    <>
      <div className='flex flex-col mt-15 justify-center items-center'>
        <div className='flex flex-col justify-center items-center  mb-6'>
          <h1 className='text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            Learn Skills, Teach Skills,
          </h1>
          <h1 className='text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            Grow Together
          </h1>
        </div>

        <div className='mx-auto w-11/12 md:w-8/12 lg:w-5/12 p-6 flex items-center justify-center'>
          <p className='text-lg md:text-2xl text-slate-600 text-center leading-relaxed'>
            Connect with peers who complement your skills. Share what you know,
            learn what you need. No expensive courses, just meaningful learning
            connections.
          </p>
        </div>

        <div className='flex gap-7 justify-center items-center text-lg md:text-xl mt-4'>
          <button
            onClick={() => handleRedirectStartLearning()}
            className='px-4  py-2 bg-black text-white cursor-pointer rounded'
          >
            Start Learning
          </button>
          <button className='bg-white shadow px-4 py-2 border cursor-pointer rounded'>
            See How It Works
          </button>
        </div>

        <div className='flex justify-around items-center w-full mt-20 text-xl '>
          <div className='text-3xl font-bold text-[#2563EB] text-center'>
            10,000+
            <p className='text-slate-700 text-xl font-medium'>
              Active Learners
            </p>
          </div>
          <div className='text-3xl text-[#9333EA] font-bold text-center'>
            500+
            <p className='text-slate-700 text-xl font-medium'>
              Skills Available
            </p>
          </div>
          <div className='text-3xl text-green-400 font-bold text-center'>
            95%
            <p className='text-slate-700 text-xl font-medium'>
              Successful Matches
            </p>
          </div>
        </div>
      </div>
      <Works />

      <WhyChoose />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
