"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import Loader from "../common/Loader";
import { useSelector } from "react-redux";

export const withAuth = (WrappedComponent) => {
  const Auth = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const token = useSelector((state) => state?.Login?.user?.data?.token); // Get the token outside useEffect
    const currentPath = router.asPath;

    useEffect(() => {
      console.log("token", token);
      setLoading(false); 
      
      // Check if the token exists
      if (!token) {
        // If there's no token, remove cookies and redirect
        Cookies.remove('token');
        router.push('/');
      } else {
        // If there's a token, set authenticated state
        setIsAuthenticated(true);
      }
// Set loading to false after checking token
    }, [token, router]); // Depend on token and router

    if (loading) {
      return (
        <div>
          <Loader fullWidth={true} />
        </div>
      );
    }

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return Auth;
};
