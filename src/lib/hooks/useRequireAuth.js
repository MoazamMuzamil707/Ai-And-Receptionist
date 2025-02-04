import { useEffect } from 'react';
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

export const useRequireAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const token = useSelector((state) => state?.Login?.user?.data?.token);
    const headers = {
      'Authorization': `Bearer ${token}`
    };

    if (!token) {
      router.push('/');
    }
  }, []);
};
