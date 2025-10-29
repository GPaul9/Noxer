import axios from 'axios';

const BASE_URL = 'https://noxer-test.ru/webapp/api';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
