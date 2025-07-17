import { useState, useEffect, useRef } from 'react';
import Logo from '../icons/Logo';
import Menu from '../icons/Menu';
import { useClerk, useUser } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/AppContext';
import { toast } from 'react-toastify';

interface UserContext {
  userName: string | null;
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { isSignedIn, user, isLoaded } = useUser();
  const { openSignIn, signOut, openSignUp } = useClerk();
  const { userName } = useUserContext() as UserContext;
  const profileRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Show/hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY <= lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!profileRef.current?.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (!mobileMenuRef.current?.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogin = () => {
    const options = {
      afterSignInUrl: '/dashboard',
      redirectUrl: '/dashboard',
      afterSignIn: () => toast.success('Login successful'),
    };
    openSignIn(options);
  };

  const handleSignUp = () => {
    const options = {
      afterSignUpUrl: '/dashboard',
      redirectUrl: '/dashboard',
      afterSignUp: () => toast.success('Signed up successfully'),
    };
    openSignUp(options);
  };

  const handleLogout = async () => {
    if (!isLoaded) return;
    try {
      await signOut();
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Logout failed');
      console.error('Logout error:', error);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ease-in-out ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center gap-3'>
          <Logo className='w-8 h-8 text-blue-600' />
          <h1
            className='text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer'
            onClick={() => navigate('/')}
          >
            SkillSwap
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className='hidden sm:flex items-center gap-6 text-base font-medium text-gray-600'>
          <Link to='/how-it-works' className='hover:text-blue-600'>
            How It Works
          </Link>
          <Link to='/features' className='hover:text-blue-600'>
            Features
          </Link>

          {isSignedIn && user && isLoaded ? (
            <div className='relative' ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className='flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full'
              >
                <img
                  src={user.imageUrl || '/fallback-avatar.png'}
                  alt={`${userName || user.firstName || 'User'}'s profile`}
                  className='w-10 h-10 rounded-full border-2 border-gray-200 object-cover'
                  onError={(e) =>
                    (e.currentTarget.src = '/fallback-avatar.png')
                  }
                />
                <span className='hidden md:inline text-gray-800 font-semibold'>
                  {userName || user.firstName || 'User'}
                </span>
              </button>

              {isProfileOpen && (
                <div className='absolute top-12 right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50'>
                  <div className='px-4 py-2 border-b border-gray-200'>
                    <span className='text-sm font-semibold text-gray-800'>
                      {userName || user.firstName || 'User'}
                    </span>
                  </div>
                  <Link
                    to='/dashboard'
                    className='block px-4 py-2 text-sm hover:bg-blue-50'
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to='/edit-profile'
                    className='block px-4 py-2 text-sm hover:bg-blue-50'
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Edit Profile
                  </Link>
                  <button
                    className='w-full text-left px-4 py-2 text-sm hover:bg-blue-50'
                    onClick={() => {
                      setIsProfileOpen(false);
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
              <button onClick={handleLogin} className='hover:text-blue-600'>
                Login
              </button>
              <button
                onClick={handleSignUp}
                className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
              >
                Get Started
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className='sm:hidden text-gray-600 hover:text-blue-600 focus:outline-none'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className='w-6 h-6' />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className='sm:hidden bg-white px-4 py-4 shadow-md'
        >
          <div className='flex flex-col gap-3'>
            <Link to='/how-it-works' onClick={() => setIsMobileMenuOpen(false)}>
              How It Works
            </Link>
            <Link to='/features' onClick={() => setIsMobileMenuOpen(false)}>
              Features
            </Link>

            {isSignedIn && user && isLoaded ? (
              <>
                <div className='font-semibold text-gray-800'>
                  Welcome, {userName || user.firstName || 'User'}
                </div>
                <Link
                  to='/dashboard'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to='/edit-profile'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Edit Profile
                </Link>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleLogout();
                  }}
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleLogin();
                  }}
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleSignUp();
                  }}
                  className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
