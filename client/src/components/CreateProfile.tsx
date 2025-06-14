import { Link, NavLink } from 'react-router-dom';
import User from '../icons/User';
import Graduation from '../icons/Graduation';
import Goals from '../icons/Goals';

const CreateProfile = () => {
  return (
    <div className='mx-auto  mt-4 w-[80%]'>
      <div className='px-4 py-2 shadow-lg border border-slate-100 rounded'>
        <h1 className='text-xl font-bold sm:text-2xl xl:text-4xl'>
          Create Your Profile
        </h1>
        <p className='text-[19px] opacity-65'>
          Tell us about yourself and the skills you want to share and learn.
        </p>

        <div className=' mt-10 shadow-md bg-gray-200 flex px-4 py-3 justify-around gap-5 items-center  '>
          <NavLink to='/edit-profile' className='rounded  flex gap-3 px-2 '>
            <User />
            <div className='font-bold text-xl'>Basic Info</div>
          </NavLink>

          <NavLink to='/edit-profile' className=' rounded flex gap-3 px-2 '>
            <Graduation />
            <div className='font-bold text-xl'>Skills</div>
          </NavLink>

          <NavLink
            to='/edit-profile'
            className={({ isActive }) =>
              `rounded flex gap-3 px-2 py-1 transition-colors duration-200 ${
                isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-200'
              }`
            }
          >
            <Goals />
            <div className='font-bold text-xl'>Learning Goals</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
