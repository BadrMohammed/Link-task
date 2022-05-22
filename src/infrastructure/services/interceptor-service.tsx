import axios from 'axios';
// import env from '../config/env.config';
import { deleteCookie, getCookie } from './cookies-service';
// TODO to be changes to env file
const apiUrl = '';
const publicAPIS = [
  '/',
];

const isPublicAPI = (url: string) => publicAPIS.find((endpoint) => apiUrl + endpoint === url);

const interceptor = {
  setupInterceptors: async (history: any) => {
    axios.interceptors.request.use((req: any) => {
      if (isPublicAPI(req.url)) return req;

      req.headers.Authorization = `Bearer ${getCookie('token')}`;
      return req;
    }, (err) => Promise.reject(err));

    axios.interceptors.response.use((res) => res, (error) => {
      if (error.response.status === 401) {
        deleteCookie('token');
        history.push('/');
      }
      return Promise.reject(error);
    });
  },
};

export default interceptor;
