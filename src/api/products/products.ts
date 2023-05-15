import { axiosBaseQuery } from '@api/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';
import { IGetAllProductsParams, IGetAllProductsResponse } from './productsType';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['productsApi'],
  endpoints: (builder) => ({
    getAllProducts: builder.mutation<
      IGetAllProductsResponse,
      IGetAllProductsParams
    >({
      query: ({ limit, page }) => ({
        url: '',
        method: 'GET',
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

export const {
  useGetAllProductsMutation,
  util: { getRunningQueriesThunk },
} = productsApi;

export const { getAllProducts } = productsApi.endpoints;
