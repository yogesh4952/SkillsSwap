import { chooses } from '../assets/assets';
import type { Asset } from '../assets/assets';
import DOMPurify from 'dompurify';
import { useMemo } from 'react';

import { categories } from '../assets/assets';
import type { Category } from '../assets/assets';

const WhyChoose = () => {
  const renderedChooses = useMemo(
    () =>
      chooses.map((choose: Asset, index: number) => (
        <div key={index} className='flex items-center gap-4 mb-4'>
          <div
            className='w-12 h-12 rounded-full mt-5 mx-auto'
            style={{ backgroundColor: choose.background }}
          >
            <div
              className='w-10 h-10 mx-auto text-gray-800'
              role='img'
              aria-label={`${choose.heading} icon`}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(choose.icon),
              }}
            />
          </div>
          <div>
            <div className='font-bold text-base sm:text-lg md:text-xl'>
              {choose.heading}
            </div>
            <div className='mt-3'>
              <p className='text-justify text-sm md:text-base text-slate-600'>
                {choose.description}
              </p>
            </div>
          </div>
        </div>
      )),
    []
  );

  const renderedCategories = useMemo(
    () =>
      categories.map((category: Category, index: number) => (
        <div
          key={index}
          className='flex justify-between py-4 border-b border-slate-200 last:border-b-0'
        >
          <dt className='font-medium'>{category.title}</dt>
          <dd>{category.learners} learners</dd>
        </div>
      )),
    []
  );

  return (
    <div className='flex flex-col px-4 py-8 mb-5 mt-14 justify-center items-center'>
      <h1 className='text-xl sm:text-2xl md:text-4xl font-black'>
        Why Choose SkillsSwap?
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-7 w-11/12 md:w-8/12 mx-auto'>
        {/* Left side */}
        <div className='flex flex-col shadow-lg p-4 rounded'>
          {renderedChooses}
        </div>

        {/* Right side */}
        <div className='flex flex-col px-5 py-4 shadow-lg rounded'>
          <h2 className='text-center text-xl md:text-2xl font-bold'>
            Programming Skill Categories
          </h2>
          <dl className='mt-7'>{renderedCategories}</dl>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
