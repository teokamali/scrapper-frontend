import { baseApi } from '@api/axiosInstance';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { AxiosError, AxiosRequestConfig } from 'axios';

const axiosInstance = baseApi.apiCore;

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      headers?: { 'Content-Type'?: string };
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    any,
    unknown
  > =>
  async ({ url, headers = {}, method, data, params }, { getState }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          ...headers,
        },
      });
      return {
        data: result.data,
      };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      return { error: err.response };
    }
  };
