// utils/axiosConfig.js
import axios from 'axios';
import useChatStore from '@/store/chatStore';

const API_BASE_URL = 'http://localhost:8000/api/v1';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  response => response, 
  error => {
    if (error.response && error.response.status === 401) {
      console.log('Unauthorised, logging out...');
      useChatStore.getState().logoutUser();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
