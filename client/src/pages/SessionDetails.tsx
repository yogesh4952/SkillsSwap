import { useState } from 'react';

const SessionDetails = () => {
  const [sessionType, setSessionType] = useState('');
  const [time, setTime] = useState('');
  const [isActiveSession, setIsActiveSession] = useState(false);
  const [isActiveTime, setIsActiveTime] = useState(false);
  const handleSelect = (value: string) => {
    setSessionType(value);
    setTime(value);
    setIsActiveSession(false);
    setIsActiveTime(false);
  };

  return (
    <div className='p-4 border border-gray-300 mt-6 rounded shadow mb-5'>
      <h1 className='text-2xl font-bold'>Session Details</h1>
      <p className='text-gray-600 mb-4'>Configure your learning session</p>

      <div className='mb-4'>
        <label htmlFor='session_topic' className='block font-medium mb-1'>
          Session Topic
        </label>
        <input
          type='text'
          id='session_topic'
          name='session_topic'
          className='border border-gray-300 px-3 py-2 rounded w-full'
          placeholder='e.g. React Basics'
        />
      </div>

      <div className='mb-4 relative'>
        <label htmlFor='session_type' className='block font-medium mb-1'>
          Session Type
        </label>
        <input
          type='text'
          id='session_type'
          name='session_type'
          readOnly
          onClick={() => setIsActiveSession(!isActiveSession)}
          value={sessionType}
          placeholder='Choose session type'
          className='border border-gray-300 px-3 py-2 rounded w-full cursor-pointer bg-white'
        />
        <div
          className={`absolute top-full left-0 right-0 bg-white border border-gray-300 rounded shadow mt-1 z-10 ${
            isActiveSession ? 'block' : 'hidden'
          }`}
        >
          {['Video Call', 'Audio Call', 'In Person'].map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
            >
              {option}
            </div>
          ))}
        </div>
      </div>

      <div className='mb-4 relative'>
        <label htmlFor='session_type' className='block font-medium mb-1'>
          Session Type
        </label>
        <input
          type='text'
          id='session_type'
          name='session_type'
          readOnly
          onClick={() => setIsActiveTime(!isActiveTime)}
          value={time}
          placeholder='Choose session type'
          className='border border-gray-300 px-3 py-2 rounded w-full cursor-pointer bg-white'
        />
        <div
          className={`absolute top-full left-0 right-0 bg-white border border-gray-300 rounded shadow mt-1 z-10 ${
            isActiveTime ? 'block' : 'hidden'
          }`}
        >
          {['30 minutes', '45 minutes', '1 hour'].map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
            >
              {option}
            </div>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor='notes'>Session Notes(optional)</label>
        <textarea
          name='notes'
          id='notes'
          className='w-full min-h-20 border border-gray-300 rounded mt-4 px-4 py-2'
          placeholder="Any specific topics you'd like to cover or questions you have..."
        ></textarea>
      </div>
    </div>
  );
};

export default SessionDetails;
