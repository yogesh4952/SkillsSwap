import { useState } from 'react';
import { time } from '../assets/assets';
import TImer from '../icons/TImer';

const SelectTime = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <div className=' border border-gray-300 rounded shadow p-4 mt-6'>
      <div className='flex gap-4 px-2 pb-4'>
        <TImer />
        <h1 className='font-bold text-xl'>Select Time</h1>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        {time.map((t, index) => (
          <button
            key={index}
            onClick={() => setSelectedTime(t)}
            className={`px-4 py-2 border rounded cursor-pointer transition 
            ${
              selectedTime === t
                ? 'bg-black text-white'
                : 'hover:bg-gray-100 border-gray-300'
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectTime;
