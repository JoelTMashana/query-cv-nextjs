"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 

const WithAuth = (Component) => {
  return function AuthenticatedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      const accessToken = localStorage.getItem('accessToken');
      const tempAccessToken = localStorage.getItem('tempAccessToken');
      
      if (!accessToken && !tempAccessToken) {
        console.log('No access token, redirecting user to login.');
        router.push('/login');
      }
    }, [router]);

    return <Component {...props} />;
  };
};

export default WithAuth;

