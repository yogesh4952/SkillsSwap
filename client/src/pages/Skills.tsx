import { NavLink } from 'react-router-dom';
import { skills, type Skill } from '../assets/assets';

const Skills = () => {
  return (
    <div>
      <div className='mt-6 mb-3 rounded shadow-lg border border-gray-200 px-6 py-4'>
        <h1 className='text-2xl sm:text-3xl tracking-wide font-bold '>
          Skills You Can Teach
        </h1>
        <p className='tracking-tight text-gray-700'>
          What skills do you have that you'd love to share with others?
        </p>

        <div className='flex flex-col gap-2 mt-2 '>
          <label htmlFor='skill' className='font-semibold'>
            Add a skill you can teach
          </label>
          <div className='flex  gap-2 '>
            <input
              type='text'
              name='skill'
              id='skill'
              placeholder='e.g, JavaScript,Photography,Spanish'
              className='px-2 w-full rounded border border-gray-300'
            />
            <button className='px-4 rounded cursor-pointer py-2 bg-black text-white'>
              +
            </button>
          </div>
        </div>

        <div className='mt-6'>
          <p>Popular Skills (Click to add)</p>

          <div className='flex items-center flex-wrap gap-2'>
            {skills.map((skill: Skill, index: number) => (
              <span
                className='shadow rounded-md border border-gray-200   px-4'
                key={index}
              >
                <span>{skill.icon}</span>
                <span>{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className='flex justify-end mt-4 '>
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
