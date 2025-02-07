"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import Loader from "../common/Loader";

export const withAuth = (WrappedComponent) => {
  const Auth = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const currentPath = router.asPath;
    
    // const checkEndpoint = (items, path) => {
    //   for (const item of items) {
    //     if (item.link === path) {
    //       return true;
    //     }
    //     if (item.subItems && checkEndpoint(item.subItems, path)) {
    //       return true;
    //     }
    //   }
    //   return false;
    // };
    useEffect(() => {
      // const menuData = Cookies.get('menuData') ? JSON.parse(Cookies.get('menuData')) : null;
      // const endpointExists = checkEndpoint(menuData, currentPath);
      const token = Cookies.get('token');
      console.log("token",token)
      // console.log("token in withAuth", token, menuData);
      if (!token) {
      // if (!token || !endpointExists) {
        Cookies.remove('token');
        Cookies.remove('menuData');
        Cookies.remove('user');
        router.push('/Login');
      } else {
        setIsAuthenticated(true);
        setLoading(false);
      }
    }, [router]);

    

    // if (loading) {
    //   return 
    //   // <div>
    //   //   <Loader fullWidth={true} />
    //   // </div>;
    // }

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return Auth;
};
