import { NavLink } from 'react-router-dom';
import { skills, type Skill } from '../assets/assets';

const LearningGoals = () => {
  return (
    <div>
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
              placeholder='e.g, Machine Learning, Guitar, French'
              className='px-2 w-full rounded border border-gray-300'
            />
            <button className='px-4 rounded cursor-pointer py-2 bg-black text-white'>
              +
            </button>
          </div>
        </div>

        <div className='mt-6'>
          <p className='mb-2'>Popular Learning Goals (Click to add)</p>

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
          <button className='border border-gray-300 hover:bg-gray-900 bg-black text-white transition-all cursor-pointer rounded shadow px-4 py-2'>
            Complete Profile & Find Matches
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningGoals;
