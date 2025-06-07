import Banner from '../pages/Banner';
import WhyChoose from '../pages/WhyChoose';
import Works from '../pages/Works';

const Home = () => {
  return (
    <>
      <div className='flex flex-col mt-15 justify-center items-center'>
        <div className='flex flex-col justify-center items-center  mb-6'>
          <h1 className='text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            Learn Skills, Teach Skills,
          </h1>
          <h1 className='text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            Grow Together
          </h1>
        </div>

        <div className='mx-auto w-11/12 md:w-8/12 lg:w-5/12 p-6 flex items-center justify-center'>
          <p className='text-lg md:text-2xl text-slate-600 text-center leading-relaxed'>
            Connect with peers who complement your skills. Share what you know,
            learn what you need. No expensive courses, just meaningful learning
            connections.
          </p>
        </div>

        <div className='flex gap-7 justify-center items-center text-lg md:text-xl mt-4'>
          <button className='px-4  py-2 bg-black text-white cursor-pointer rounded'>
            Start Learning
          </button>
          <button className='bg-white shadow px-4 py-2 border cursor-pointer rounded'>
            See How It Works
          </button>
        </div>

        <div className='flex justify-around items-center w-full mt-20 text-xl '>
          <div className='text-3xl font-bold text-[#2563EB] text-center'>
            10,000+
            <p className='text-slate-700 text-xl font-medium'>
              Active Learners
            </p>
          </div>
          <div className='text-3xl text-[#9333EA] font-bold text-center'>
            500+
            <p className='text-slate-700 text-xl font-medium'>
              Skills Available
            </p>
          </div>
          <div className='text-3xl text-green-400 font-bold text-center'>
            95%
            <p className='text-slate-700 text-xl font-medium'>
              Successful Matches
            </p>
          </div>
        </div>
      </div>
      <Works />

      <WhyChoose />
      <Banner />
    </>
  );
};

export default Home;
