import axios from 'axios';
import useChatStore from '@/store/chatStore';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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

      // console.log('Redirecting to login page.')
      // if (typeof window !== 'undefined') {
      //   window.location.href = '/login';
      // }

    } 
    return Promise.reject(error);
  }
);

export default axiosInstance;
