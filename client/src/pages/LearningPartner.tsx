import { learningPartners, type partner } from '../assets/assets';

const LearningPartner = () => {
  return (
    <div className='px-4 py-2 border border-gray-300 rounded mt-5'>
      <div className='px-4 py-2'>
        <h1 className='text-3xl font-bold mt-4'>
          Choose Your Learning Partner
        </h1>
        <p className='text-gray-500'>
          Select who you'd like to have a session with
        </p>
      </div>

      <div className='px-4 mt-4'>
        {learningPartners.map((partner: partner, index: number) => (
          <div
            key={index}
            className='border flex justify-between items-center px-4 py-2 mb-4 border-gray-300 shadow hover:bg-gray-100 rounded '
          >
            <div className='flex gap-2 items-center'>
              <div className='rounded-full bg-gray-500 w-10 h-10'></div>
              <div>
                <h1 className='font-bold'>{partner.name}</h1>
                <div className='text-gray-600'>
                  <span>{partner.rating}</span>
                  <span> {partner.session} session</span>
                </div>

                <div className='mt-4 mb-3'>
                  {partner.expertise.map((expert, index) => (
                    <span
                      key={index}
                      className='rounded border border-gray-300 mr-4 px-2 py-2 '
                    >
                      {expert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <button
                className='px-4 py-2 border rounded cursor-pointer border-gray-300
                '
              >
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
