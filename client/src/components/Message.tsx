import Chat from '../pages/Chat';
import ChatList from '../pages/ChatList';
import '../App.css';

const Message = () => {
  return (
    <div className=' mt-4 w-full mx-auto overflow-hidden rounded px-10'>
      <div className=' grid grid-cols-1 md:grid-cols-2'>
        <ChatList />
        <Chat />
      </div>
    </div>
  );
};

export default Message;
