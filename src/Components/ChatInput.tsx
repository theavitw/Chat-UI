import React, { useState  } from 'react';
import { Box, Input, Button , Slide , useDisclosure} from '@chakra-ui/react';
import Clip from './Clip';


interface ChatInputProps {
  sendMessage: (message: string) => void;
}

function ChatInput({ sendMessage }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSendMessage = (message: string) => {
    sendMessage(message);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <Box  className = "chat">
      <Input placeholder="Type a message..." value={message} onChange={handleChange}
    
      />
      <Button ml={2} onClick={() => handleSendMessage(message)}
        zIndex={100}
        >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.75036 10H4.16702M4.09648 10.2429L2.15071 16.0552C1.99785 16.5118 1.92142 16.7401 1.97627 16.8807C2.0239 17.0028 2.1262 17.0954 2.25244 17.1306C2.3978 17.1712 2.61736 17.0724 3.05647 16.8748L16.9827 10.608C17.4113 10.4151 17.6256 10.3187 17.6918 10.1847C17.7494 10.0683 17.7494 9.93174 17.6918 9.81535C17.6256 9.68139 17.4113 9.58495 16.9827 9.39208L3.05161 3.12313C2.61383 2.92612 2.39493 2.82762 2.24971 2.86803C2.1236 2.90312 2.0213 2.99544 1.97351 3.11731C1.91847 3.25764 1.99408 3.48545 2.14531 3.94108L4.09702 9.8213C4.12299 9.89955 4.13598 9.93868 4.14111 9.9787C4.14565 10.0142 4.14561 10.0502 4.14097 10.0857C4.13574 10.1257 4.12265 10.1648 4.09648 10.2429Z" stroke="#141E0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </Button>
      
      <Clip />
      
    
    </Box>
    
  );
}

export default ChatInput;


