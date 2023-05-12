import { todoApi } from './todo/todo';

export const apiMiddleware = [todoApi.middleware];
