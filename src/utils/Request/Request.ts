import axios from 'axios';
import {
  IErrorResponse,
  IErrorResponseDetail,
  IRequestOption,
  IResponse,
} from './RequestType';

export const useRequest = (preUrl = '') => {
  const baseURL = process.env.BASE_URL ?? '';
  const client = axios.create({
    baseURL: `${baseURL}${preUrl}`,
  });

  const successHandler = <T>(
    response: IResponse<T>,
    successMessage?: string,
  ): void => {
    if (successMessage) {
      console.log(successMessage);
    }
  };

  const errorHandler = (error: IErrorResponse, errorMessage?: string): void => {
    const {
      data: { detail },
    } = error.response;

    if (detail && typeof detail === 'object' && detail.length > 0) {
      detail.forEach(({ msg, loc }: IErrorResponseDetail): void => {
        console.log(`(${loc[1]}) ${msg}`);

        if (errorMessage) {
          console.log(errorMessage);
        }
      });
    }
  };

  const sendRequest = async <T, D = any>({
    headers,
    autoSuccessHandler = true,
    autoErrorHandler = true,
    sendAuthorization = true,
    successMessage,
    errorMessage,
    showLoading,
    loadingMessage,
    accessToken = '',
    ...restOptions
  }: IRequestOption<D>): Promise<IResponse<T>> => {
    let authorization: string = '';

    if (sendAuthorization) {
      if (accessToken) {
        authorization = `Bearer ${accessToken}`;
      }
    }

    try {
      const response: IResponse<T> = await client({
        headers: {
          Authorization: authorization,
          ...headers,
        },
        ...restOptions,
      });
      if (autoSuccessHandler) {
        successHandler<T>(response, successMessage);
      }
      return response;
    } catch (error: any) {
      if (autoErrorHandler) {
        errorHandler(error, errorMessage);
      }

      throw error;
    }
  };

  return { sendRequest };
};
