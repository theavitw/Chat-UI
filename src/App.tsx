import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import ChatInput from './Components/ChatInput';
import Divider from './Divider';
import "./App.css";
import ChatList from './Components/ChatList';
import Header from './Components/Header';

const App: React.FC = () => {
  const [chats, setChats] = useState<any[]>([]);
  const [groupname, setGroupname] = useState<any>("")
  const [To, setTo] = useState<any>("")
  const [From, setFrom] = useState<any>("")
  useEffect(() => {
    // Fetching the chat data from the API
    const fetchChatData = async () => {
      try {
        const response = await fetch('https://qa.corider.in/assignment/chat?page=0');
        if (response.ok) {
          const data = await response.json();
          setChats(data.chats);
          setGroupname(data.name);
          setTo(data.to);
          setFrom(data.from);
        
        } else {
          // Handle the error if the response is not okay
          console.error('Error fetching chat data');
        }
      } catch (error) {
        // Handle any fetch errors
        console.error('Fetch error:', error);
      }
    };

    fetchChatData();
  }, []); // Empty dependency array to fetch data only on initial render

  const sendMessage = (message: string) => {
    // Simulating sending a message locally
    const newChat = {
      id: `${Math.random()}`,
      message,
      sender: { image: 'sender-image-url', self: true },
      time: new Date().toLocaleString(),
    };

    setChats((prevChats) => [...prevChats, newChat]);
  };

  return (
    <ChakraProvider>
      
      
      <Box maxW="-webkit-fill-available" m="auto">
        <Header groupName = {groupname} To = {To} From ={From}/>
        <Divider />
        <ChatList chats={chats} />
        <ChatInput sendMessage={sendMessage} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
