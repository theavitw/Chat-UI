import { Box, Text, Avatar } from '@chakra-ui/react';

interface ChatBubbleProps {
  message: string;
  sender: {
    image: string;
    self: boolean;
  };
  time: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, sender, time }) => {
  return (
    <Box
      display="flex"
      flexDirection={sender.self ? 'row-reverse' : 'row'}
      alignItems="center"
      mb={3}
    >
      <Avatar src={sender.image} alignSelf="start" h="50px" w="50px" p={2}/>
      <Box
        className = "box"
        bg={sender.self ? '#1C63D5' : "white"}
        
        color={sender.self ? 'white' : "black"}
        maxW="70%"
        borderRadius = {sender.self ? ' 12px 12px 0px 12px' : "0px 12px 12px 12px"}
    
        
      >
        <Text>{message}</Text>
        
      </Box>
    </Box>
  );
};

export default ChatBubble;
