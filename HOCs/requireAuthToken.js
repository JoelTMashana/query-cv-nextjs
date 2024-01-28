"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const requireAuthToken = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const authToken = localStorage.getItem('authToken');
      console.log(authToken);
      if (authToken === 'undefined' || authToken === null || authToken === undefined) {
        console.log('no token')
        router.push('/login');
      } else {
        console.log('This authToken is truthy');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default requireAuthToken;
