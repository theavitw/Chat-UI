// ApiService for handling API calls
const API_URL = 'https://qa.corider.in/assignment/chat';

export const fetchChatData = async (page: number): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}?page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
