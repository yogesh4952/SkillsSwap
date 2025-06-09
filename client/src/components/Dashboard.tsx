import { useUser } from '@clerk/clerk-react';
//
import DashboardTop from '../pages/DashboardTop';
import Matches from '../pages/Matches';

import './../App.css';
import Notification from '../pages/Notification';

const Dashboard = () => {
  const { user, isSignedIn } = useUser();
  const { isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className='mt-8 px-4 sm:px-6 md:px-8 animate-pulse'>
        <div className='h-8 bg-gray-200 rounded w-1/3 mb-2'></div>
        <div className='h-4 bg-gray-200 rounded w-2/3'></div>
      </div>
    );
  }

  if (!isSignedIn || !user) {
    return (
      <div className='mt-8 px-4 sm:px-6 md:px-8 text-center'>
        <p className='text-slate-500'>Please sign in to view your dashboard.</p>
      </div>
    );
  }
  return (
    <div className='mt-8 px-4 sm:px-6 md:px-8'>
      <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'>
        Welcome back, {user.fullName || user.firstName || 'User'}
      </h1>

      <DashboardTop />

      <div className='custom-grid-cols gap-6 mt-10 justify-around'>
        {/* Left */}
        <div className=''>
          <Matches />
        </div>

        {/* Right */}
        <div className='hidden sm:grid  gap-5 px-2 py-1 grid-rows-3 mb-4'>
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
