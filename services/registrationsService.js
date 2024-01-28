import axios from 'axios';

const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/v1/users/register_user', userData, {
      withCredentials: true,  
    });
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