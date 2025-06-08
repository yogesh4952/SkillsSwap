import { useState, useEffect, useRef } from 'react';
import Logo from '../icons/Logo';
import Menu from '../icons/Menu';
import { useClerk, useUser } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/AppContext';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const { isSignedIn, user } = useUser();
  const { openSignIn, signOut } = useClerk();
  const { userName, setUserName } = useUserContext();

  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleLogin = () => {
    openSignIn();
    if (user) {
      setUserName(user.firstName);
    }
  };
  const navigate = useNavigate();

  // Close profile dropdown on outside click
  useEffect(() => {
    console.log(userName);
    console.log(user);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setOpenProfile(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className='w-full bg-white shadow-md flex justify-between items-center sticky top-0 z-50 px-6 py-4'>
      {/* Logo Section */}
      <div className='flex gap-2 items-center'>
        <Logo />
        <h1
          className='text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer'
          onClick={() => navigate('/')}
        >
          SkillSwap
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className='hidden sm:flex gap-6 text-base md:text-lg text-slate-600 items-center'>
        <div className='hover:text-black cursor-pointer transition'>
          How it works
        </div>
        <div className='hover:text-black cursor-pointer transition'>
          Features
        </div>

        {isSignedIn ? (
          <div className='rounded-full w-9 relative' ref={profileRef}>
            <img
              onClick={() => setOpenProfile(!openProfile)}
              className='rounded-full cursor-pointer'
              src={user.imageUrl}
              alt='profile'
            />
            {openProfile && (
              <>
                <div className='absolute top-10 bg-slate-100 shadow-md px-2  py-2 rounded right-5 z-10'>
                  <div className='mb-2 flex items-center gap-1 whitespace-nowrap'>
                    <span className='text-red-500 font-bold'>Welcome,</span>
                    <span className='font-medium'>{user.firstName}</span>
                  </div>

                  <div className='mb-2'>
                    <Link to='/dashboard' className=''>
                      Dashboard
                    </Link>
                  </div>

                  <div>
                    <Link to='/profile' className=''>
                      Profile
                    </Link>
                  </div>

                  <button className='cursor-pointer' onClick={() => signOut()}>
                    Log Out
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          <>
            <button
              onClick={handleLogin}
              className='hover:text-black cursor-pointer transition'
            >
              Login
            </button>
            <button className='px-4 py-2 bg-black text-white rounded-md hover:bg-slate-800 transition'>
              Get Started
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <div
        className='sm:hidden cursor-pointer'
        onClick={() => setIsHidden(!isHidden)}
      >
        <Menu />
      </div>

      {/* Mobile Dropdown Menu */}
      {!isHidden && (
        <div className='absolute top-16 right-6 bg-white shadow-lg rounded-md px-4 py-2 sm:hidden z-50'>
          <div className='py-1 text-slate-700 hover:text-black cursor-pointer'>
            How it works
          </div>
          <div className='py-1 text-slate-700 hover:text-black cursor-pointer'>
            Features
          </div>

          {!isSignedIn ? (
            <>
              <div
                onClick={handleLogin}
                className='py-1 text-slate-700 hover:text-black cursor-pointer'
              >
                Login
              </div>
              <button
                onClick={handleLogin}
                className='w-full mt-2 px-3 py-2 bg-black text-white rounded hover:bg-slate-800 transition'
              >
                Get Started
              </button>
            </>
          ) : (
            <div className='py-1 text-slate-700'>Welcome, {user.firstName}</div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
