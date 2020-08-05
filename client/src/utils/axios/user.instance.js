import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

// export const setAuthToken = (token) => {
//   if (token) {
//     //applying token
//     authAxios.defaults.headers.common['x-auth-token'] = token;
//   } else {
//     //deleting the token from header
//     delete authAxios.defaults.headers.common['x-auth-token'];
//   }
// };

// const token = 'safkldsjfa;lk';
// axios.interceptors.request.use(
//   (config) => {
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

const authAxios = axios.create({
  baseURL: '/api/users',
  // Could also setup like this:baseURL: process.env.USER_AUTH_API_URL
});

export default authAxios;
