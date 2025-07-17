const Banner = () => {
  return (
    <div className='bg-[#3D58EB] text-white text-center py-14 '>
      <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>
        Ready to Start Your Learning Journey?
      </h1>
      <p className='sm:text-xl mt-4 '>
        Join thousands of learners who are growing their skills through
        meaningful connections.
      </p>
      <button className='mt-6 px-4 py-2  bg-white hover:bg-slate-200 cursor-pointer font-bold text-black rounded'>
        Create Your Profile
      </button>
    </div>
  );
};

export default Banner;
