import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.18.74:2323' // verificar ip
});

export default api;