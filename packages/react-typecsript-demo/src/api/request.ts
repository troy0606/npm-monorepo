import axios from 'axios';

export const axiosBase = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 2000,
});