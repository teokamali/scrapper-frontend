import {
  IApiMutationParams,
  IBaseApiRequestBody,
  IBaseApiResponseBody,
} from './ApiType';

export const apiQuery = <
  RESP extends IBaseApiResponseBody,
  REQ extends IBaseApiRequestBody,
>(
  params: IApiMutationParams<RESP, REQ>,
) => {
  const { builder, query, transformResponse } = params;

  return builder.query<RESP, REQ>({
    query,
    transformResponse,
  });
};
