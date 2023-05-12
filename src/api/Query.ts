import {
  IApiMutationParams,
  IBaseApiRequestBody,
  IBaseApiResponse,
  IBaseApiResponseBody,
} from './ApiType';

export const apiQuery = <
  RESP extends IBaseApiResponseBody,
  REQ extends IBaseApiRequestBody,
>(
  params: IApiMutationParams<RESP, REQ>,
) => {
  const { builder, query, transformResponse } = params;

  return builder.query<IBaseApiResponse<RESP>, REQ>({
    query,
    transformResponse,
  });
};
