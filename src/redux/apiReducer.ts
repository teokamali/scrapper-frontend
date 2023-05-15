import { productsApi } from '@api/products/products';
import { searchApi } from '@api/search/search';

export const apiReducers = {
  [productsApi.reducerPath]: productsApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
};
