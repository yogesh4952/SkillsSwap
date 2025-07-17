import { useAuth } from '@clerk/clerk-react';
import { useState } from 'react';
import UserCardItem from '../pages/UserCardItem';

const StartLearning = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const { getToken } = useAuth();

  const listExperience: string[] = [
    '6+ Month Experience',
    '1+ Year Experience',
    '2+ Year Experience',
    '3+ Year Experience',
  ];

  const listLocations: string[] = ['India', 'Nepal', 'Bangladesh'];

  const [location, setLocation] = useState<string>('');
  const [experience, setExperience] = useState<string>('');

  const handleDropDown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };
  const handleLocationSelect = (loc: string) => {
    setLocation(loc);
    setOpenDropdown(null);
  };

  const handleExperienceSelect = (exp: string) => {
    setExperience(exp);
    setOpenDropdown(null);
  };

  return (
    <div className='mt-20 w-[80%] mx-auto'>
      <div className='mx-auto ] border border-gray-200 shadow px-4 py-2 rounded'>
        <h1 className='text-center font-bold text-2xl text-gray-700'>
          Find Professionals by Skills
        </h1>

        <div>
          <input
            type='text'
            placeholder='Search Skills (e.g., React, UI/UX Design, Python)...'
            className='w-full mt-4 px-3 py-2 border border-gray-300 rounded'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className='flex gap-4 mt-4'>
          {/* Location */}
          <div className='relative dropdown'>
            <div
              onClick={() => handleDropDown('location')}
              className='border border-gray-300 rounded px-3 py-2 text-gray-700 cursor-pointer flex justify-between items-center gap-4'
              aria-expanded={openDropdown === 'location'}
            >
              <span>{location || 'Location'}</span>
              <span
                className={`transition-transform duration-200 inline-block ${
                  openDropdown === 'location' ? 'rotate-180' : 'rotate-90'
                }`}
              >
                {'>'}
              </span>
            </div>

            {openDropdown === 'location' && (
              <ul className='absolute top-10 left-0 z-10 w-48 bg-white border border-gray-200 rounded shadow'>
                {listLocations.map((loc: string, index: number) => (
                  <li
                    key={index}
                    onClick={() => handleLocationSelect(loc.toLowerCase())}
                    className='bg-gray-100 px-4 py-2 cursor-pointer hover:bg-gray-200'
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Experience */}
          <div className='relative dropdown'>
            <div
              onClick={() => handleDropDown('experience')}
              className='border border-gray-300 rounded px-3 py-2 text-gray-700 cursor-pointer flex justify-between items-center gap-4'
              aria-expanded={openDropdown === 'experience'}
            >
              <span>{experience || 'Experience'}</span>
              <span
                className={`transition-transform duration-200 inline-block ${
                  openDropdown === 'experience' ? 'rotate-180' : 'rotate-90'
                }`}
              >
                {'>'}
              </span>
            </div>

            {openDropdown === 'experience' && (
              <ul className='absolute top-10 left-0 z-10 w-48 bg-white border border-gray-200 rounded shadow'>
                {listExperience.map((exp: string, index: number) => (
                  <li
                    key={index}
                    onClick={() => handleExperienceSelect(exp.toLowerCase())}
                    className='bg-gray-100 px-4 py-2 cursor-pointer hover:bg-gray-200'
                  >
                    {exp}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Availability */}
        </div>

        <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'>
          Search
        </button>
      </div>
      <UserCardItem />
    </div>
  );
};

export default StartLearning;
