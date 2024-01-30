import axios from '@/lib/utils/axiosConfig';
import useChatStore from '@/store/chatStore';

const registerUser = async (userData) => {
  try {
    const response = await axios.post('/users/register_user', userData);
    const userDetails = response.data.user;
    useChatStore.getState().loginUser(userDetails);
    console.log('Registration successful', response.data);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response);
  }
};

export {
  registerUser
};
