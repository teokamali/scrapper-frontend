import { apiQuery } from '@api/Query';
import { CreateBaseApiQuery } from '@base/Api/query/BaseApiQuery';
import { createApi } from '@reduxjs/toolkit/query/react';
import { IGetAllProductsParams, IGetAllProductsResponse } from './productsType';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: CreateBaseApiQuery({
    preUrl: '/',
  }),
  tagTypes: ['productsApi'],
  endpoints: (builder) => ({
    getAllProducts: apiQuery<IGetAllProductsResponse, IGetAllProductsParams>({
      builder,
      query: ({ limit, page }) => ({
        url: '/',
        method: 'GET',
        sendAuthorization: false,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        params: {
          limit,
          page,
        },
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
