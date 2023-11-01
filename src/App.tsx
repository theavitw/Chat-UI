
import React, { useState, useEffect, useCallback } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import ChatInput from './Components/ChatInput';
import Divider from './Divider';
import "./App.css";
import ChatList from './Components/ChatList';
import Header from './Components/Header';

const App: React.FC = () => {
  const [chats, setChats] = useState<any[]>([]);
  const [groupname, setGroupname] = useState<any>("");
  const [To, setTo] = useState<any>("");
  const [From, setFrom] = useState<any>("");
  const [pageNumber, setPageNumber] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const response = await fetch(`https://qa.corider.in/assignment/chat?page=${pageNumber}`);
        if (response.ok) {
          const data = await response.json();
          if (data.chats.length === 0) {
            setHasMore(false);
          } else {
            setChats((prevChats) => [...data.chats, ...prevChats]);
            setGroupname(data.name);
            setTo(data.to);
            setFrom(data.from);
          }
        } else {
          console.error('Error fetching chat data');
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchChatData();
  }, [pageNumber]);

  const sendMessage = (message: string) => {
    const newChat = {
      id: `${Math.random()}`,
      message,
      sender: { image: 'sender-image-url', self: true },
      time: new Date().toLocaleString(),
    };

    setChats((prevChats) => [...prevChats, newChat]);
  };

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop === 0 && hasMore) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  }, [hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <ChakraProvider>
      <Box maxW="600px" m="auto">
        <Header groupName={groupname} To={To} From={From} />
        <Divider />
        <ChatList chats={chats} />
        <ChatInput sendMessage={sendMessage} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
