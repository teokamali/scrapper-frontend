import { axiosBaseQuery } from '@api/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';
import { ISearchParams, ISearchResponse } from './searchType';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: axiosBaseQuery({
    baseUrl: '/search',
  }),
  tagTypes: ['searchApi'],
  endpoints: (builder) => ({
    search: builder.mutation<ISearchResponse, ISearchParams>({
      query: ({ limit, page, search }) => ({
        url: '/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        params: {
          limit,
          page,
        },
        data: search,
      }),
    }),
  }),
});
export const {
  useSearchMutation,
  util: { getRunningQueriesThunk },
} = searchApi;
