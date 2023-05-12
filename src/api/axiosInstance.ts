import axios from 'axios';
import { config } from './axiosConfig';

const BaseApi = () => {
  const apiCore = axios.create(config);
  const basePath = config.baseURL;

  return { apiCore, basePath };
};

export const baseApi = BaseApi();
