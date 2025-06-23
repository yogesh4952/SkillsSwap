import { learningPartners, type partner } from '../assets/assets';

const LearningPartner = () => {
  return (
    <div className='px-4 py-2 border border-gray-300 rounded mt-5 w-full overflow-hidden'>
      <div className='px-2 py-2'>
        <h1 className='text-2xl sm:text-3xl font-bold mt-4'>
          Choose Your Learning Partner
        </h1>
        <p className='text-gray-500'>
          Select who you'd like to have a session with
        </p>
      </div>

      <div className='px-2 mt-4 w-full'>
        {learningPartners.map((partner: partner, index: number) => (
          <div
            key={index}
            className='border flex flex-col sm:flex-row sm:justify-between items-start sm:items-center px-4 py-3 mb-4 border-gray-300 shadow hover:bg-gray-100 rounded w-full overflow-hidden'
          >
            <div className='flex gap-3 items-start sm:items-center w-full sm:w-[70%] flex-wrap'>
              <div className='rounded-full bg-gray-500 w-10 h-10 shrink-0'></div>
              <div className='w-full'>
                <h1 className='font-bold'>{partner.name}</h1>
                <div className='text-gray-600 text-sm'>
                  <span>{partner.rating}</span>
                  <span> • {partner.session} sessions</span>
                </div>

                <div className='mt-3 flex flex-wrap gap-2'>
                  {partner.expertise.map((expert, index) => (
                    <span
                      key={index}
                      className='rounded border border-gray-300 px-2 py-1 text-sm'
                    >
                      {expert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className='mt-3 sm:mt-0 w-full sm:w-auto'>
              <button className='px-4 py-2 border rounded cursor-pointer border-gray-300 w-full sm:w-auto'>
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPartner;
