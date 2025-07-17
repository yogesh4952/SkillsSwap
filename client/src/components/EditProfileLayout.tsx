import { NavLink, Outlet } from 'react-router-dom';
import User from '../icons/User';
import Graduation from '../icons/Graduation';
import Goals from '../icons/Goals';

const EditProfileLayout = () => {
  return (
    <div className='mx-auto  mt-8 w-[80%]'>
      <h1 className='text-3xl  sm:text-4xl font-bold'>Create Your Profile</h1>
      <p className='text-[#4B5563] font-medium mt-2 tracking-wider'>
        Tell us about yourself and the skills you want to share and learn
      </p>

      <div className='mt-4 bg-gray-200 shadow-md rounded px-2 py-2 flex items-center justify-around'>
        <NavLink
          className={({ isActive }) =>
            `gap-2 transition-all px-4 py-2 rounded flex  ${
              isActive ? 'bg-white text-black font-bold' : 'text-gray-600'
            }`
          }
          to='/edit-profile/basic-info'
        >
          <User />
          <p>Basic Info</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `gap-2 transition-all px-4 py-2 rounded flex  ${
              isActive ? 'bg-white text-black font-bold' : 'text-gray-600'
            }`
          }
          to='/edit-profile/skills'
        >
          <Graduation />
          <p>Skills</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `gap-2 transition-all px-4 py-2 rounded flex  ${
              isActive ? 'bg-white text-black font-bold' : 'text-gray-600'
            }`
          }
          to='/edit-profile/learning-goals'
        >
          <Goals />
          <p>Learning Goals</p>
        </NavLink>
      </div>

      <div className='mb-4'>
        <Outlet />
      </div>
    </div>
  );
};

export default EditProfileLayout;
