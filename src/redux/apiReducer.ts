import { productsApi } from '@api/products/products';
import { todoApi } from '@api/todo/todo';

export const apiReducers = {
  [todoApi.reducerPath]: todoApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
};
