import { useState } from 'react';
import Audio from '../icons/Audio';
import Video from '../icons/Video';

const Chat = () => {
  const [outgoingMessage, setOutGoingMessage] = useState('');
  type MessageType = {
    text: string;
    from: 'me' | 'other';
  };

  const [message, setMessage] = useState<MessageType[]>([]);

  const handleOutGoingMessage = (e: any) => {
    e.preventDefault();
    if (!outgoingMessage.trim()) return;
    setMessage((prev) => [...prev, { text: outgoingMessage, from: 'me' }]);

    setOutGoingMessage('');
  };
  return (
    <div className='border border-gray-300 rounded shadow min-h-full flex flex-col justify-between'>
      {/* Top */}
      <div className='border-b px-4 py-2 shadow border-gray-200 flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <div className='rounded-full w-5 h-5 bg-red-500'></div>

          <div>
            <h1 className='font-semibold'>David KIm</h1>
            <p className='space-x-2'>
              <span className='text-gray-600'>Last . hour ago</span>
              <span className='rounded bg-slate-200 px-2 py-1'>
                Learning from you
              </span>
            </p>
          </div>
        </div>

        <div className='flex gap-5'>
          <div>
            <Video />
          </div>
          <div>
            <Audio />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div>
        <div className='p-4 space-y-2'>
          {message.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.from === 'me' ? 'justify-end' : 'justify-start'
              }`}
            >
              <p
                className={`p-2 rounded max-w-xs font-semibold ${
                  msg.from === 'me'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-black'
                }`}
              >
                {msg.text}
              </p>
            </div>
          ))}
        </div>
        <form
          onSubmit={handleOutGoingMessage}
          className='px-4 py-2 border-t border-gray-200 shadow grid grid-cols-[50px_1fr_50px] gap-4'
        >
          <div>
            <button className='border border-gray-300 px-2 py-1 rounded'>
              doc
            </button>
          </div>

          <div>
            <input
              type='text'
              value={outgoingMessage}
              onChange={(e: any) => setOutGoingMessage(e.target.value)}
              placeholder='message'
              className='w-full rounded px-4 py-2 outline-blue-400 border border-blue-400 align-baseline'
            />
          </div>

          <button className='border border-gray-200 rounded '> Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
