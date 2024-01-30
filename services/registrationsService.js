import axios from '@/lib/utils/axiosConfig';

const registerUser = async (userData) => {
  try {
    const response = await axios.post('/users/register_user', userData);
    console.log('Registration successful', response.data);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response);
    throw error;
  }
};

export {
  registerUser
};
