import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IRequestOption<D = any> extends AxiosRequestConfig<D> {
  autoSuccessHandler?: boolean;
  autoErrorHandler?: boolean;
  sendAuthorization?: boolean;
  successMessage?: string;
  errorMessage?: string;
  showLoading?: boolean;
  loadingMessage?: string;
  accessToken?: string;
}

export interface IResponse<T> extends AxiosResponse<T> {}

export interface IErrorResponseDetail {
  ctx: {
    limit_value: number;
  };
  loc: string[];
  msg: string;
  type: string;
}

export interface IErrorResponse {
  response: {
    status: number;
    data: {
      detail: IErrorResponseDetail[];
    };
  };
}

export interface IRequestEntry {
  baseURL: string;
}
