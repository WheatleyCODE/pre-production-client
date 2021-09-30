import axios from 'axios';
import { AuthResponse } from '../types/response/AuthResponse';

export const API_URL = 'http://localhost:5000';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use(
  (config) => config,
  async (err) => {
    // ! 403 времмено!!!
    const originalRequest = err.config;
    if (err.response.status === 403 && err.config && !err.config.isRetry) {
      try {
        originalRequest._isRetry = true;
        const res = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('token', res.data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log(e);
        console.log('НЕ авторизован');
      }
    }
    throw err;
  }
);

export default $api;
