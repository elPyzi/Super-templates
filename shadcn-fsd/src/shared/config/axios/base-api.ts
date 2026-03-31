import axios, { AxiosResponse } from 'axios';

import { ENV_CONFIG } from '../env';

export const $api = axios.create({
  baseURL: ENV_CONFIG.BASE_API_URL,
  withCredentials: true,
});

$api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await $api.post('/auth/refresh');
      return $api(originalRequest);
    }
    return Promise.reject(error);
  },
);
