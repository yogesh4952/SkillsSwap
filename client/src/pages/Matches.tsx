import { useUser } from '@clerk/clerk-react';
import { profiles, type UserMatch } from '../assets/assets';

const Matches = () => {
  const { isSignedIn, isLoaded, user } = useUser();
  if (!isLoaded) {
    return (
      <div
        className='mt-8 px-4 sm:px-6 md:px-8 animate-pulse'
        aria-live='polite'
      >
        <div className='h-8 bg-gray-200 rounded w-1/3 mb-2'></div>
        <div className='h-4 bg-gray-200 rounded w-2/3'></div>
      </div>
    );
  }

  if (!isSignedIn || !user) {
    return (
      <div className='mt-8 px-4 sm:px-6 md:px-8 text-center'>
        <p className='text-slate-500'>Please sign in to view your matches.</p>
      </div>
    );
  }
  return (
    <div className='shadow-lg rounded border border-slate-200 px-4 py-5 mb-5'>
      <div className='flex justify-between items-center '>
        <div>
          <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>
            Your Matches
          </h1>
          <p className='text-slate-600 mt-4'>
            People who complement your skills and learning goals
          </p>
        </div>
        <div>
          <button className='shadow-md rounded px-5 text-xl font-medium hover:shadow-2xl cursor-pointer py-4'>
            Filter
          </button>
        </div>
      </div>

      {/* Boxes */}

      {profiles.map((profile: UserMatch) => (
        <div
          key={profile.id}
          className='flex justify-between items-center  py-3 shadow-md rounded border border-slate-300 mt-10 px-4  hover:shadow-lg transition-all'
        >
          <div className='flex items-center gap-4'>
            <div className=' flex justify-center items-center w-7 h-7 rounded-full  bg-slate-500'>
              {/* Image */}
              {/* <div
                className='w-10 h-10 mx-auto text-gray-800'
                role='img'
                aria-label={`${profile.name} icon`}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(profile.image),
                }}
              /> */}
            </div>

            <div>
              <h1 className='font-bold text-xl'> {profile.name} </h1>

              <div className='flex gap-2 mb-2 items-center mt-2'>
                <label htmlFor='' className='text-slate-700'>
                  Teaches:
                </label>
                <div className='flex gap-2'>
                  {profile.teaches.map((teach, index) => (
                    <span
                      key={index}
                      className='bg-slate-200 rounded px-2 py-1 font-medium'
                    >
                      {teach}
                    </span>
                  ))}
                </div>
              </div>

              <div className='flex gap-2 items-center'>
                <label htmlFor='' className='text-slate-700'>
                  Wants
                </label>
                <div className='flex gap-2'>
                  {profile.wants.map((want, index) => (
                    <span
                      key={index}
                      className='bg-slate-200 rounded px-2 py-1 font-medium'
                    >
                      {want}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>95%Match</div>
            <div>
              <button>Connect</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Matches;
