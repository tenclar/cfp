import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.85.2.229:3333',
});

export default api;
