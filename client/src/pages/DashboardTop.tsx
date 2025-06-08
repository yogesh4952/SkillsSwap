import { dashboardItems, type item } from '../assets/assets';

const DashboardTop = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-7'>
      {dashboardItems.map((item: item) => (
        <article
          key={item.title} // Use title as key if unique; otherwise, add an id field
          className='shadow-md rounded-lg p-4 border border-slate-200 bg-white hover:shadow-lg transition-shadow'
          aria-labelledby={`dashboard-item-${item.title}`}
        >
          <div className='flex justify-between items-center'>
            <h2
              id={`dashboard-item-${item.title}`}
              className='font-semibold text-gray-800'
            >
              {item.title}
            </h2>
            {item.logo && (
              <div className='rounded-full w-6'>
                <div
                  className='text-gray-600'
                  dangerouslySetInnerHTML={{ __html: item.logo }}
                  aria-hidden='true'
                />
              </div>
            )}
          </div>
          <div className='font-bold text-2xl text-gray-900 mt-4'>
            {item.number}
          </div>
          <p className='text-sm text-slate-600 mt-1'>{item.description}</p>
        </article>
      ))}
    </div>
  );
};

export default DashboardTop;
