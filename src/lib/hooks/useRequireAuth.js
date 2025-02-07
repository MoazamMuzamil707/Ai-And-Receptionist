import { useEffect } from 'react';
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

export const useRequireAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');

    if (!token) {
      router.push('/'); // Redirect to login page if token cookie doesn't exist
    }
  }, []);
};
