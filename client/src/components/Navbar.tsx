import Logo from '../icons/Logo';

const Navbar = () => {
  return (
    <nav className='w-full bg-white shadow-xl flex justify-around items-center sticky top-0 z-10 backdrop:blur-md px-8 py-5'>
      <div className='flex gap-2 items-center pl-2'>
        <Logo />
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          SkillSwap
        </h1>
      </div>

      <div className='flex gap-4 text-xl text-slate-500 items-center'>
        <div className='hover:text-black cursor-pointer'>How it works</div>
        <div className='hover:text-black cursor-pointer'>Features</div>
        <div className='hover:text-black cursor-pointer'>Login</div>
        <button className='px-2 bg-black text-white py-2 rounded hover:bg-slate-800 cursor-pointer'>
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
