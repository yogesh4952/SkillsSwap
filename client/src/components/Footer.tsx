const Footer = () => {
  return (
    <div className='bg-[#111827] text-[#979EAB]  '>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 px-2 py-3 pt-6 border-b border-slate-400 justify-center w-8/12 mx-auto items-center'>
        <div>
          <div className='text-white sm:text-xl font-bold mb-4'>SkillSwap</div>
          <div>
            <p>Connecting learners and teachers worldwide.</p>
          </div>
        </div>
        <div>
          <div>
            <h1 className='text-white  font-bold mb-4'>Platform</h1>
          </div>
          <div className='hover:text-white cursor-pointer'>How it Works </div>
          <div className='hover:text-white cursor-pointer'>Features</div>
          <div className='hover:text-white cursor-pointer'>Pricing</div>
        </div>
        <div>
          <div>
            <h1 className='text-white  font-bold mb-4'>Support</h1>
          </div>
          <div className='hover:text-white cursor-pointer'> Help Center </div>
          <div className='hover:text-white cursor-pointer'>Contact Us</div>
          <div className='hover:text-white cursor-pointer'> Community</div>
        </div>
        <div>
          <div>
            <h1 className='text-white  font-bold mb-4'>Legal</h1>
          </div>
          <div className='hover:text-white cursor-pointer'>Privacy Policy</div>
          <div className='hover:text-white cursor-pointer'>
            Terms of service
          </div>
        </div>
      </div>

      <div className='mt-4 pb-4'>
        <p className='text-center'>© 2024 SkillSwap. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
