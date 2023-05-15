import { IProduct } from '@type/global';

export interface IGetAllProductsResponse {
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
  results: IProduct[];
}
export interface IGetAllProductsParams {
  limit?: number;
  page?: number;
}
