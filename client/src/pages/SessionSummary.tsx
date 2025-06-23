const SessionSummary = () => {
  return (
    <div className='mt-4'>
      <div className='p-4 rounded shadow border border-gray-200'>
        <h1 className='text-2xl sm:text-3xl font-bold'>Session Summary</h1>
        <div className='mt-4 flex justify-between'>
          <p className='text-gray-600'>Partner:</p>
          <h1 className='font-semibold'>Sarah Chen</h1>
        </div>

        <div className='mt-4 flex justify-between'>
          <p>Date:</p>
          <h1>6/23/2025</h1>
        </div>

        <div className='mt-4 flex justify-between'>
          <p>Time</p>
          <h1 className='font-semibold'>Not selected</h1>
        </div>

        <div className='mt-4 flex justify-between'>
          <p>Type</p>
          <h1 className='font-semibold'>Note Selected</h1>
        </div>

        <div className='mt-4 flex justify-between'>
          <p>Duration</p>
          <h1 className='font-semibold'>1hour</h1>
        </div>
      </div>

      <div className='w-full mt-2 sm:mt-4'>
        <button className='w-full hover:bg-gray-800 cursor-pointer bg-black text-white rounded px-4 py-2'>
          Schedule Session
        </button>
      </div>
    </div>
  );
};

export default SessionSummary;
