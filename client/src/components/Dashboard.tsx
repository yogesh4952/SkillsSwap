import { useUser } from '@clerk/clerk-react';
import { dashboardItems, type item } from '../assets/assets';

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

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-7'>
        {dashboardItems.map((item: item) => (
          <article
            key={item.title} // Use title as key if unique; otherwise, add an id field
            className='shadow-md rounded-lg p-4 border border-slate-200 bg-white hover:shadow-lg transition-shadow'
            aria-labelledby={`dashboard-item-${item.title}`}
          >
            <div className='flex justify-between items-center'>
              <h2
                id={`dashboard-item-${item.title}`}
                className='font-semibold text-gray-800'
              >
                {item.title}
              </h2>
              {item.logo && (
                <div
                  className='text-gray-600'
                  dangerouslySetInnerHTML={{ __html: item.logo }}
                  aria-hidden='true'
                />
              )}
            </div>
            <div className='font-bold text-2xl text-gray-900 mt-4'>
              {item.number}
            </div>
            <p className='text-sm text-slate-600 mt-1'>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
