import LearningPartner from '../pages/LearningPartner';
import SessionDetails from '../pages/SessionDetails';

const Sessions = () => {
  return (
    <div className='px-4 py-2 mt-4 w-[80%] mx-auto'>
      <h1 className='font-bold text-2xl sm:text-3xl'>
        Schedule a Learning Session
      </h1>

      <p className='text-gray-500'>
        Book a session with your learning partners to exchange skills.
      </p>

      <div className='grid'>
        4
        <div>
          <LearningPartner />
          <SessionDetails />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Sessions;
