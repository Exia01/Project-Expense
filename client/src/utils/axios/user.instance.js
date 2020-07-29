import axios from 'axios';


export const setAuthToken = token => {
  if (token) {
    //applying token
    instance.defaults.headers.common['Authorization'] = token;
  } else {
    //deleting the token from header
    delete instance.defaults.headers.common['Authorization'];
  }
}


const instance = axios.create({
  baseURL: '/api/users/create',
  headers: {
    // 'Content-Type': 'application/json',
  }
});

export default instance;
