import axios from 'axios';

export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL_SECUREn

const instance = axios.create({
  baseURL: baseUrl
});

instance.interceptors.request.use((request) => {

  let user = JSON.parse(localStorage.getItem('user'))
  
  request.headers = {
    'Accept': "application/json, text/plain, */*",
    'token': `${user?.token}`,
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