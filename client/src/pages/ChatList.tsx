import { useState } from 'react';
import { chatUsers } from '../assets/assets';

const ChatList = () => {
  const unreadMessages = 2;
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  return (
    <div className='border  border-gray-300 rounded shadow px-4 py-3'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold sm:text-2xl'>Messages</h1>
        {unreadMessages > 0 && (
          <p className='text-sm md:hidden text-red-600'>
            {unreadMessages} unread{' '}
            {unreadMessages > 1 ? 'messages' : 'message'}
          </p>
        )}
      </div>

      {chatUsers.map((user) => (
        <div
          key={user.id}
          onClick={() => setSelectedUserId(user.id)}
          className={`rounded border cursor-pointer border-gray-300 px-4 py-4 mt-3 flex justify-between items-center shadow transition ${
            selectedUserId === user.id
              ? 'ring ring-blue-400 transition-all  duration-300 bg-blue-50'
              : ''
          }`}
        >
          <div className='flex gap-2 items-center'>
            <div className='rounded-full bg-gray-400 w-10 h-10'></div>
            <div>
              <h1 className='font-semibold'>{user.name}</h1>
              <p className='text-gray-600'>{user.message}</p>
              <div className='flex flex-wrap gap-3'>
                {user.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className='rounded border px-2 py-1 border-gray-300'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-around items-center'>
            <p>{user.lastActive}</p>
            <span
              className={`rounded-2xl bg-black text-white px-2 py-1 mt-2 ${
                user.unreadCount === 0 ? 'hidden' : ''
              }`}
            >
              {user.unreadCount}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
