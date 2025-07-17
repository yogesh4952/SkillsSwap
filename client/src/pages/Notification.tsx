import Calendar from '../icons/CalendarIcon';
import Search from '../icons/Search';

const Notification = () => {
  return (
    <>
      <div className='shadow-lg  border-slate-400'>
        <div className='border border-slate-200 rounded px-4 py-3'>
          <h1 className='text-3xl font-black'>Quick Actions</h1>
          <div className='grid grid-rows-3 gap-4 mt-4'>
            <div className='bg-black text-white px-4 py-2 rounded font-medium hover:bg-slate-800 cursor-pointer'>
              + Update Skills
            </div>
            <div className='flex gap-4 items-center shadow border-slate-300 hover:bg-slate-100 border cursor-pointer px-4 py-2 rounded'>
              <div>
                <Calendar />
              </div>
              <div>Scheduled Sessions</div>
            </div>
            <div className='flex gap-4 items-center shadow border-slate-300 border hover:bg-slate-100 cursor-pointer px-4 py-2 rounded'>
              <div>
                <Search />
              </div>
              <div>Browse Skills</div>
            </div>
          </div>
        </div>
      </div>

      <div className='shadow-md border-slate-400 px-4 py-2'>
        <h1 className='text-3xl font-black'>Recent Activity</h1>
        <div className=' mt-4'>
          <ul>
            <li className='list-disc ml-3 mb-2'>
              <p>New Match with Sarah chain</p>
              <p className='text-slate-500'>2 hours ago</p>
            </li>

            <li className='list-disc ml-3 mb-2'>
              <p>New Match with Sarah chain</p>
              <p className='text-slate-500'>2 hours ago</p>
            </li>

            <li className='list-disc ml-3 mb-2'>
              <p>New Match with Sarah chain</p>
              <p className='text-slate-500'>2 hours ago</p>
            </li>

            <li className='list-disc ml-3 mb-2'>
              <p>New Match with Sarah chain</p>
              <p className='text-slate-500'>2 hours ago</p>
            </li>
          </ul>
        </div>
      </div>

      <div className='shadow-md border-slate-400 px-4 py-2'>
        <h1 className='text-3xl font-black'>Upcoming Sessions</h1>

        <div className=' px-4 py-2 bg-slate-100 rounded border border-slate-200 mt-4 hover:bg-slate-200 transition-all'>
          <p className='font-medium'>Python with marcus</p>
          <p className='opacity-50 text-sm'>
            <span>Today</span>,3:00 PM
          </p>
        </div>

        <div className=' px-4 py-2 bg-slate-100 rounded border border-slate-200 mt-4 hover:bg-slate-200 transition-all'>
          <p className='font-medium'>Design Review with Elena </p>
          <p className='opacity-50 text-sm'>
            <span>Tomorrow</span>,5:00 PM
          </p>
        </div>
      </div>
    </>
  );
};

export default Notification;
