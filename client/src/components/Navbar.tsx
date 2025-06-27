import { useState, useEffect, useRef } from 'react';
import Logo from '../icons/Logo';
import Menu from '../icons/Menu';
import { useClerk, useUser } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const { isSignedIn, user, isLoaded } = useUser();
  const { openSignIn, signOut, openSignUp } = useClerk();
  const { userName } = useUserContext(); // Use context for userName
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false); //Scroll Down
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  // Handle login
  const handleLogin = () => {
    try {
      openSignIn();
      if (user) {
        toast.success('Login Success');
      }
    } catch (error) {}
  };

  // Handle signup
  const handleSignUp = () => {
    try {
      openSignUp();
      if (isSignedIn) {
        toast.success('SignedUp Succesfully');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  // Handle Logout

  const handleLogout = () => {
    if (!isLoaded) {
      return;
    }
    try {
      signOut();
      toast.success('Logout Successfully');
    } catch (error) {
      toast.error('Error occurs');
      console.log(error);
    }
  };

  // Close profile dropdown and mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setOpenProfile(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsHidden(true);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className={`px-4  bg-white shadow-md flex justify-around items-center   py-4  fixed top-0 w-full transition-transform duration-300 z-10 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } bg-black text-white p-4 shadow`}
    >
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

        {isSignedIn && user ? (
          <div className='rounded-full w-9 relative' ref={profileRef}>
            <img
              onClick={() => setOpenProfile(!openProfile)}
              className='rounded-full cursor-pointer'
              src={user.imageUrl}
              alt='profile'
            />
            {openProfile && (
              <div
                className={`absolute top-10  border border-gray-300 rounded shadow  px-4 py-2 right-5 z-10 ${
                  showNavbar ? 'translate-y-0' : '-translate-y-full'
                }`}
              >
                <div
                  className='mb-2 flex items-center gap-1 border-b border-gray-300 whitespace-nowrap'
                  onClick={() => setOpenProfile(false)}
                >
                  <span className='text-red-500 font-bold'>Welcome,</span>
                  <span className='font-medium'>
                    {userName || user.firstName}
                  </span>
                </div>

                <div
                  onClick={() => setOpenProfile(false)}
                  className='mb-2 border-b border-gray-300'
                >
                  <Link to='/dashboard'>Dashboard</Link>
                </div>

                <div
                  onClick={() => setOpenProfile(false)}
                  className='border-b border-gray-300'
                >
                  <Link to='/edit-profile'>Edit Profile</Link>
                </div>

                <button
                  className='cursor-pointer border-b border-gray-300'
                  onClick={() => {
                    setOpenProfile(false);
                    handleLogout();
                  }}
                >
                  Log Out
                </button>
              </div>
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
            <button
              onClick={handleSignUp}
              className='px-4 py-2 bg-black text-white rounded-md hover:bg-slate-800 transition'
            >
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
        <div
          ref={mobileMenuRef}
          className='absolute top-16 right-6 bg-white shadow-lg rounded-md px-4 py-2 sm:hidden z-50'
        >
          <div className='py-1 text-slate-700 hover:text-black cursor-pointer'>
            How it works
          </div>
          <div className='py-1 text-slate-700 hover:text-black cursor-pointer'>
            Features
          </div>

          {isSignedIn && user ? (
            <>
              <div className='py-1 text-slate-700'>
                Welcome, {userName || user.firstName}
              </div>
              <div className='py-1'>
                <Link to='/dashboard'>Dashboard</Link>
              </div>
              <div className='py-1'>
                <Link to='/profile'>Profile</Link>
              </div>
              <button
                className='py-1 text-slate-700 hover:text-black cursor-pointer'
                onClick={() => signOut()}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <div
                onClick={handleLogin}
                className='py-1 text-slate-700 hover:text-black cursor-pointer'
              >
                Login
              </div>
              <button
                onClick={handleSignUp}
                className='w-full mt-2 px-3 py-2 bg-black text-white rounded hover:bg-slate-800 transition'
              >
                Get Started
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
