import {
  IApiMutationParams,
  IBaseApiRequestBody,
  IBaseApiResponseBody,
} from './ApiType';

export const apiMutation = <
  RESP extends IBaseApiResponseBody,
  REQ extends IBaseApiRequestBody,
>(
  params: IApiMutationParams<RESP, REQ>,
) =>
  params.builder.mutation<RESP, REQ>({
    query: params.query,
    transformResponse: params.transformResponse,
  });
