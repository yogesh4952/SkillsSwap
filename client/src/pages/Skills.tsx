// components/Skills.jsx
import { NavLink } from 'react-router-dom';
import { skills } from '../assets/assets';
import { useDataContext } from '../store/Context';

const Skills = () => {
  const { teach, setTeach, teachInp, setTeachInp } = useDataContext();

  const handleAddTeach = () => {
    if (teachInp.trim()) {
      setTeach([...teach, teachInp.trim().toLowerCase()]); // Add to teach array
      setTeachInp(''); // Clear input
    }
  };

  const handleRemoveTeach = (index: Number) => {
    setTeach(teach.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className='mt-6 mb-3 rounded shadow-lg border border-gray-200 px-6 py-4'>
        <h1 className='text-2xl sm:text-3xl tracking-wide font-bold'>
          Skills You Can Teach
        </h1>
        <p className='tracking-tight text-gray-700'>
          What skills do you have that you'd love to share with others?
        </p>

        <div className='flex flex-col gap-2 mt-2'>
          <label htmlFor='skill' className='font-semibold'>
            Add a skill you can teach
          </label>
          <div className='flex gap-2'>
            <input
              type='text'
              name='skill'
              id='skill'
              placeholder='e.g., JavaScript, Photography, Spanish'
              className='px-2 w-full rounded border border-gray-300'
              value={teachInp}
              onChange={(e) => setTeachInp(e.target.value)}
            />
            <button
              type='button'
              onClick={handleAddTeach}
              className='px-4 py-2 bg-black text-white rounded hover:bg-gray-950'
            >
              Add
            </button>
          </div>
        </div>

        {/* Display added teach skills */}
        {teach.length > 0 && (
          <div className='mt-4'>
            <p>Your Skills:</p>
            <ul className='flex flex-wrap gap-2'>
              {teach.map((skill, index) => (
                <li
                  key={index}
                  className='shadow flex gap-4 rounded-md border border-gray-200 px-4 py-1'
                >
                  {skill}

                  <button
                    onClick={() => handleRemoveTeach(index)}
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
          <p>Popular Skills (Click to add)</p>
          <div className='flex items-center flex-wrap gap-2'>
            {skills.map((skill, index) => (
              <button
                type='button'
                onClick={() => {
                  if (!teach.includes(skill.name.toLowerCase())) {
                    setTeach([...teach, skill.name.toLowerCase()]);
                  }
                }}
                className='shadow rounded-md border border-gray-200 px-4 py-2 hover:bg-gray-100 transition-all'
                key={index}
              >
                <span>{skill.icon}</span>
                <span>{skill.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className='flex justify-end mt-4'>
        <NavLink
          to='/edit-profile/learning-goals'
          className='px-4 py-2 bg-black hover:bg-gray-950 transition-all cursor-pointer text-white rounded'
        >
          Next
        </NavLink>
      </div>
    </div>
  );
};

export default Skills;
