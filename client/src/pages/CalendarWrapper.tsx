import { useState } from 'react';
import 'react-calendar/dist/Calendar.css'; // optional but needed for default styles
import CalendarIcon from '../icons/CalendarIcon';
import Calendar from 'react-calendar';

const CalendarWrapper = () => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='border border-gray-300 rounded shadow flex flex-col px-4 py-2'>
      <div className='flex font-bold mb-4 text-2xl gap-2'>
        <CalendarIcon />
        Select Date
      </div>

      <Calendar
        className='border border-gray-300 rounded '
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default CalendarWrapper;
