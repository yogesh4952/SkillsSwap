import { Link } from 'react-router-dom';

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

        <div>
          <Link
            to='/edit-profile'
            className='shadow-md border border-slate-100'
          >
            <div>icon</div>
            <div>Basic Infor</div>
          </Link>
          <Link to='/'></Link>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
