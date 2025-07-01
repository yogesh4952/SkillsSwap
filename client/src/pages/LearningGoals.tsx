import { toast } from 'react-toastify';
import { skills, type Skill } from '../assets/assets';
import { useDataContext } from '../store/Context';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import Loader from '../icons/Loader';
import { useNavigate } from 'react-router-dom';

const LearningGoals = () => {
  const {
    wants,
    setWants,
    setError,
    setSuccess,

    isLoading,
    setIsLoading,
    firstname,
    lastname,
    location,
    teach,
    bio,
  } = useDataContext();
  const [addWants, setAddWants] = useState<string>('');

  const { getToken } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError('');
    setSuccess('');
    const formdata = new FormData();
    if (firstname) formdata.append('firstname', firstname);
    if (lastname) formdata.append('lastname', lastname);
    if (bio) formdata.append('bio', bio);
    if (location) formdata.append('location', location);
    if (wants) formdata.append('wants', JSON.stringify(wants));
    if (teach) formdata.append('teach', JSON.stringify(teach));
    const data = {
      firstname,
      lastname,
      bio,
      location,
      wants,
      teach,
    };

    try {
      setIsLoading(true);

      const token = await getToken();

      const response = await axios.put(
        'http://localhost:5000/api/user/update-data',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setIsLoading(false);

      if (response.data.success) {
        setSuccess('Profile updated successfully');
        toast.success('Profile updated successfully');
        navigate('/dashboard');
      } else {
        setError(response.data.message);
        toast.error(response.data.message);
      }
    } catch (err) {
      setIsLoading(false);
      setError('Failed to update profile');
      toast.error('Failed to update profile');
      console.error('Error updating profile:', err);
    }
  };

  const handleAddWants = () => {
    if (addWants.trim()) {
      setWants([...wants, addWants.trim().toLowerCase()]);
      setAddWants('');
    }
  };

  const handleCompleteProfile = async () => {
    await handleSubmit();
  };

  const handleRemoveWants = (index: number) => {
    setWants(wants.filter((_, i) => i !== index));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='mt-6 mb-3 rounded shadow-lg border border-gray-200 px-6 py-4'>
            <h1 className='text-2xl sm:text-3xl font-bold '>
              Skills You Want to Learn
            </h1>
            <p className='tracking-tight text-sm text-gray-700'>
              What new skills are you excited to learn from others?
            </p>

            <div className='flex flex-col gap-2 mt-2 '>
              <label htmlFor='skill' className='font-semibold'>
                Add a skill you want to learn
              </label>
              <div className='flex  gap-2 '>
                <input
                  type='text'
                  name='skill'
                  id='skill'
                  value={addWants}
                  onChange={(e) => setAddWants(e.target.value)}
                  placeholder='e.g, Machine Learning, Guitar, French'
                  className='px-2 w-full rounded border border-gray-300'
                />
                <button
                  onClick={handleAddWants}
                  className='px-4 rounded cursor-pointer py-2 bg-black text-white'
                >
                  +
                </button>
              </div>
            </div>

            {/* Display added */}

            {wants.length > 0 && (
              <div className='mt-4'>
                <p>Your Skills:</p>
                <ul className='flex flex-wrap gap-2'>
                  {wants.map((skill, index) => (
                    <li
                      key={index}
                      className='shadow flex gap-4 rounded-md border border-gray-200 px-4 py-1'
                    >
                      {skill}

                      <button
                        onClick={() => handleRemoveWants(index)}
                        className='text-red-500 cursor-pointer font-bold'
                      >
                        x
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className='mt-6'>
              <p className='mb-2'>Popular Learning Goals (Click to add)</p>

              <div className='flex items-center flex-wrap gap-2'>
                {skills.map((skill: Skill, index: number) => (
                  <button
                    onClick={() => {
                      if (!wants.includes(skill.name.toLowerCase())) {
                        setWants([...wants, skill.name.trim().toLowerCase()]);
                      }
                    }}
                    className='shadow rounded-md border border-gray-200   px-4'
                    key={index}
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className='mt-4'>
              <label htmlFor=''>Learning Preferences (Optional)</label>
              <textarea
                name=''
                className='w-full min-h-20 border border-gray-300 rounded px-4 py-2'
                id=''
                placeholder="How do you prefer to learn? What's your availability? Any specific goals or projects you're working on?
"
              ></textarea>
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <button className='transition-all hover:bg-gray-200 cursor-pointer border border-gray-300 rounded shadow px-4 py-2'>
              Save as draft
            </button>

            <div className='space-x-3'>
              <button className='hover:bg-gray-200   transition-all cursor-pointer border border-gray-300 rounded shadow px-4 py-2'>
                Preview Profile
              </button>
              <button
                onClick={() => handleCompleteProfile()}
                className='border border-gray-300 hover:bg-gray-900 bg-black text-white transition-all cursor-pointer rounded shadow px-4 py-2'
              >
                Complete Profile & Find Matches
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default LearningGoals;
