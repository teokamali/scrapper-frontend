import { IProduct } from '@type/global';

export interface IGetAllProductsResponse {
  results: IProduct[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}
export interface IGetAllProductsParams {
  limit?: number;
  page?: number;
}
