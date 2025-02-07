import { post, get, put, patch, deleted } from './index';
import { login, forgotPassword, permissions, endPointHelpdesk, endPointFetchCollections, endPointDeleteCollection, endPointSetupCollection, endPointDeleteDocument, endPointDownloadCollection, endPointDownloadFile, endPointLogin, endPointDashboard, endPointForgetPassword, endPointLogout, endPointlogin } from './communications';

import { endPointAllApi } from "./communications";
import Cookies from 'js-cookie';
import Dashboard from '@/app/Dashboard/page';

export const AuthServices = {
  login: async (obj) => {
    console.log("obj",obj)
    const data = await post(endPointlogin, obj);
    // if (data && data.data && data.data.token) {
    //   Cookies.set('token', data.data.token);
    //   Cookies.set('user', JSON.stringify(data.data));
    // } else {
    //   console.error("Token or user data missing in the response.");
    // }  
    return data;
  },
  Dashboard: async () => {
    const headers = {
      'Authorization': `Bearer ${Cookies.get('token')}`
    }
    const data = await get('Omni', endPointDashboard,{ headers });
    return data;
  },
  forgotPassword: async (obj) => {
    const data = await post('Omni',endPointForgetPassword, obj);
    return data;
  },
  logout: async () => {
    const data = await post('Omni', endPointLogout);
    return data;
  }
}