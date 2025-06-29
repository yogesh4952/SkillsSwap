import { NavLink } from 'react-router-dom';
import Upload from '../icons/Upload';
import { useDataContext } from '../store/Context';

const BasicInfo = () => {
  const {
    firstname,
    lastname,
    setFirstname,
    setLastname,
    bio,
    setBio,
    location,
    setLocation,
  } = useDataContext();

  return (
    <div>
      <div className='mt-6 mb-3 rounded shadow-lg border border-gray-200 px-6 py-4'>
        <h1 className='text-2xl sm:text-3xl tracking-wide font-bold '>
          Basic Information
        </h1>
        <p className='tracking-tight text-gray-700'>
          Let others know who you are and what you're passionate about
        </p>

        <div className='flex gap-5 mt-6 items-center'>
          <div id='left' className='rounded-full w-36 h-36 bg-gray-400'>
            {/* Image */}
          </div>

          <div id='right'>
            <button className='shadow rounded px-2 flex gap-3 border border-gray-200 py-3 cursor-pointer hover:bg-gray-100 transition-all'>
              <Upload />
              <p>Upload photo</p>
            </button>

            <div className='mt-4 text-gray-600'>
              A friendly photo helps build trust with potential learning
              partners.
            </div>
          </div>
        </div>

        <form className='mt-5'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-1'>
              <label htmlFor='firstname'>First Name</label>
              <input
                className='border active:outline-none focus:outline-blue-400 border-gray-200 rounded px-4 py-2'
                type='text'
                name='name'
                id='firstname'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value.trim())}
                placeholder='john'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='lastname'>Last Name</label>
              <input
                className='border active:outline-none focus:outline-blue-400 border-gray-200 rounded px-4 py-2'
                type='text'
                name=''
                value={lastname}
                onChange={(e) => setLastname(e.target.value.trim())}
                id='lastname'
                placeholder='john'
              />
            </div>
          </div>

          <div className='mt-3'>
            <label htmlFor='bio'>Bio</label>
            <textarea
              name='bio'
              id='bio'
              value={bio}
              onChange={(e) => setBio(e.target.value.trim())}
              className=' focus:outline-blue-400 min-h-40 border w-full rounded border-gray-300 px-4 py-2'
              placeholder='Tell us about yourself, your background, and what motivates you to learn and teach...
'
            ></textarea>
          </div>
          <p className='text-gray-500'>
            A good bio helps others understand your learning style and
            interests.
          </p>

          <div className='flex flex-col gap-2 mt-4'>
            <label htmlFor=''>Location (Optional)</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='border active:outline-none focus:outline-blue-400 border-gray-200 rounded px-4 py-2'
              type='text'
              name=''
              id=''
              placeholder='Lamki , Kailali'
            />
          </div>
          <p className='mt-2 text-gray-500'>
            This helps us suggest local meetups and time zone compatible
            matches.
          </p>
        </form>
      </div>

      <div className='flex justify-end mt-4 '>
        <NavLink
          to='/edit-profile/skills'
          className='px-4 py-2 bg-black hover:bg-gray-950 transition-all cursor-pointer text-white rounded'
        >
          Next
        </NavLink>
      </div>
    </div>
  );
};

export default BasicInfo;
