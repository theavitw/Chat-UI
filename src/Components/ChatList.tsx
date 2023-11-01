import  { useEffect, useRef } from 'react';
import { Box , Button} from '@chakra-ui/react';
import ChatBubble from './Chatbubble';
import { ArrowDownIcon } from '@chakra-ui/icons';

interface ChatListProps {
  chats: {
    id: string;
    message: string;
    sender: {
      image: string;
      self: boolean;
    };
    time: string;
  }[];
}

function ChatList({ chats }: ChatListProps) {
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  return (
    <Box p={4} maxHeight="70vh"  maxW = "600px">
      {chats.length > 0 && <h1 className='time'>{chats[0].time.slice(0,10)}</h1>}
      {chats.map((chat) => (
        <ChatBubble
          key={chat.id}
          message={chat.message}
          sender={chat.sender}
          time={chat.time}
        />
      ))}
      <div ref={chatEndRef} />
      <Button
          onClick={scrollToBottom}
          position="sticky"
          bottom="10%"
          left="90%"
          
          borderRadius="50%"
         
          zIndex="10"
        >
          <ArrowDownIcon />
        </Button>
    </Box>
  );
}

export default ChatList;
