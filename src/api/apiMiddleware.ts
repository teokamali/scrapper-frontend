import { productsApi } from './products/products';
import { searchApi } from './search/search';

export const apiMiddleware = [productsApi.middleware, searchApi.middleware];
