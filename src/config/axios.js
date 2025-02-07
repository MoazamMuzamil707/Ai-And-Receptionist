import axios from 'axios';
import Cookies from 'js-cookie';

export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

const instance = axios.create({
  baseURL: baseUrl
});

instance.interceptors.request.use((request) => {

  let token = Cookies.get('token')

  request.headers = {
    // 'Accept': "application/json, text/plain, */*",
    'Authorization': `Bearer ${token}`,
  }
  return request
});

instance.interceptors.response.use((response, cookies) => {
  if (response) {
    return response
  }
}, (error) =>
  Promise.reject(
    error
  )
);

export default instance;