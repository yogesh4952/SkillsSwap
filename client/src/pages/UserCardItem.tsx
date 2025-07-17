import { useAuth, useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type User = {
  clerkId: string;
  firstname: string;
  lastname: string;
  email: string;
  location?: string;
  role?: string;
  teach?: string[];
  imageUrl?: string;
  bio: string;
};

const UserCardItem = () => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { getToken } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const token = await getToken();
        const response = await axios.get(
          'http://localhost:5000/api/user/getAllData',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const users: User[] = response.data.data;
        setData(users);
        toast.success('Successfully fetched users');
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to fetch users. Please try again.');
        toast.error('Failed to fetch users');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((data) => data.clerkId !== user?.id);

  return (
    <div className='container mx-auto px-4 py-10'>
      {isLoading ? (
        <div className='grid grid-cols-1 border  sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl shadow-lg p-6 animate-pulse'
              >
                <div className='w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4'></div>
                <div className='h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2'></div>
                <div className='h-4 bg-gray-200 rounded w-1/2 mx-auto mb-2'></div>
                <div className='flex gap-2 justify-center'>
                  <div className='h-4 bg-gray-200 rounded w-16'></div>
                  <div className='h-4 bg-gray-200 rounded w-16'></div>
                </div>
                <div className='h-4 bg-gray-200 rounded w-full mt-4'></div>
                <div className='h-8 bg-gray-200 rounded w-24 mt-4 mx-auto'></div>
              </div>
            ))}
        </div>
      ) : error ? (
        <div className='text-center text-red-500 text-lg font-medium'>
          {error}
        </div>
      ) : filteredData.length === 0 ? (
        <div className='text-center text-gray-500 text-lg font-medium'>
          No users found.
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredData.map((user) => (
            <div
              key={user.clerkId}
              className='bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center text-center'
              role='article'
              aria-labelledby={`user-${user.clerkId}-name`}
            >
              {/* Avatar */}
              <div className='w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-200'>
                {user.imageUrl ? (
                  <img
                    src={user.imageUrl}
                    alt={`${user.firstname} ${user.lastname}'s avatar`}
                    className='w-full h-full object-cover'
                    onError={(e) =>
                      (e.currentTarget.src = '/fallback-avatar.png')
                    } // Fallback image
                  />
                ) : (
                  <div className='w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-xl font-semibold'>
                    {user.firstname?.charAt(0)}
                    {user.lastname?.charAt(0)}
                  </div>
                )}
              </div>

              {/* User Info */}
              <h2
                id={`user-${user.clerkId}-name`}
                className='text-xl font-semibold text-gray-800'
              >
                {user.firstname} {user.lastname}
              </h2>
              <p className='text-sm text-gray-500 mt-1 capitalize'>
                {user.role || 'Contributor'}
              </p>
              <p className='text-sm text-gray-500 mt-1'>
                {user.location || 'Unknown Location'}
              </p>

              {/* Skills */}
              {user.teach && user.teach.length > 0 && (
                <div className='flex flex-wrap justify-center gap-2 mt-4'>
                  {user.teach.map((skill, index) => (
                    <span
                      key={index}
                      className='bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Bio */}
              <p className='text-sm text-gray-600 mt-4 line-clamp-3'>
                {user.bio || 'No bio provided.'}
              </p>

              {/* View Profile Button */}
              <button
                onClick={() => navigate(`/profile/${user.clerkId}`)}
                className='mt-5 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
                aria-label={`View ${user.firstname} ${user.lastname}'s profile`}
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserCardItem;
