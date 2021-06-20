import axios from 'axios';
import {Config} from 'react-native-config';

export type BuxisResponse = {
  status: number;
  message: string | null;
  data: any;
};

const axiosInstance = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 30000,
});

const setToken: (token?: string) => void = token => {
  axiosInstance.defaults.headers.common.Authorization = token
    ? `Bearer ${token}`
    : null;
};

const attemptLogin = (credentials: {email: string; password: string}) => {
  return axiosInstance.post('/login', credentials);
};

export {setToken, attemptLogin};
