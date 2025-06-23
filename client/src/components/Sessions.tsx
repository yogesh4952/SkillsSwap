import CalendarWrapper from '../pages/CalendarWrapper';
import LearningPartner from '../pages/LearningPartner';
import SelectTime from '../pages/SelectTime';
import SessionDetails from '../pages/SessionDetails';
import SessionSummary from '../pages/SessionSummary';

const Sessions = () => {
  return (
    <div className='px-4 py-2 mt-4 w-full md:w-[90%] max-w-screen-xl mx-auto overflow-hidden'>
      <h1 className='font-bold text-2xl sm:text-3xl'>
        Schedule a Learning Session
      </h1>

      <p className='text-gray-500 mb-4'>
        Book a session with your learning partners to exchange skills.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>
        <div className='w-full max-w-full overflow-hidden'>
          <LearningPartner />
          <SessionDetails />
        </div>
        <div className='w-full max-w-full overflow-hidden'>
          <CalendarWrapper />
          <SelectTime />
          <SessionSummary />
        </div>
      </div>
    </div>
  );
};

export default Sessions;
