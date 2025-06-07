import { assets } from '../assets/assets';
import type { Asset } from '../assets/assets';
import DOMPurify from 'dompurify';

const Works = () => {
  return (
    <>
      <div className='flex items-center justify-center flex-col mt-20'>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold mb-10'>
          How SkillSwap Works
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-11/12 md:w-8/12 gap-4 py-5'>
          {assets.map((asset: Asset, index: number) => (
            <div
              key={index}
              className='shadow-lg border border-slate-300 rounded hover:scale-105 transition-all hover:bg-slate-100 bg-slate-50 text-center p-4'
            >
              <div
                className='w-20 rounded-full mt-5 mx-auto'
                style={{ backgroundColor: asset.background }}
              >
                <div
                  className='w-10 h-10 mx-auto text-gray-800'
                  role='img'
                  aria-label={`${asset.heading} icon`}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(asset.icon),
                  }}
                />
              </div>

              <h2 className='sm:text-lg md:text-2xl mt-7 font-bold'>
                {asset.heading}
              </h2>

              <p className='text-base md:text-lg mt-5 mb-7 text-slate-600 px-4'>
                {asset.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;
