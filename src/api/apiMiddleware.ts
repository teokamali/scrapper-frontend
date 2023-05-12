import { productsApi } from './products/products';
import { todoApi } from './todo/todo';

export const apiMiddleware = [todoApi.middleware, productsApi.middleware];
