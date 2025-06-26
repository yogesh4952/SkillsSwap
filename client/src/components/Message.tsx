import Chat from '../pages/Chat';
import ChatList from '../pages/ChatList';
import '../App.css';

const Message = () => {
  return (
    <div className='mx-auto overflow-hidden rounded px-10 border h-screen '>
      <div className='grid grid-cols-1 w-full overflow-hidden h-[90%] mt-20  lg:grid-cols-[400px_1fr]  gap-5'>
        <ChatList />
        <Chat />
      </div>
    </div>
  );
};

export default Message;
