import { post, get, put, patch, deleted } from './index';
import { login, forgotPassword, permissions, endPointLogin, endPointDashboard, endPointForgetPassword, endPointLogout } from './communications';
import Cookies from 'js-cookie';
import Dashboard from '@/app/Dashboard/page';

export const AuthServices = {
  login: async (obj) => {
    const data = await post(endPointLogin, obj);
    if (data && data.data && data.data.token) {
      Cookies.set('token', data.data.token);
      Cookies.set('user', JSON.stringify(data.data));
    } else {
      console.error("Token or user data missing in the response.");
    }  
    return data;
  },
  Dashboard: async () => {
    const headers = {
      'Authorization': `Bearer ${Cookies.get('token')}`
    }
    const data = await get(endPointDashboard,{ headers });
    return data;
  },
  forgotPassword: async (obj) => {
    const data = await post(endPointForgetPassword, obj);
    return data;
  },
  logout: async () => {
    const headers = {
      'Authorization': `Bearer ${Cookies.get('token')}`
    }
    const data = await get(endPointLogout,{ headers });
    return data;
  },
}