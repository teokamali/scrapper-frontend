import { IProduct } from '@type/global';

export interface ISearchResponse {
  results: IProduct[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}
export interface ISearchParams {
  limit: number;
  page: number;
  search: {
    value: string;
  };
}
