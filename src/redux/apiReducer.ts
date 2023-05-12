import { todoApi } from '@api/todo/todo';

export const apiReducers = {
  [todoApi.reducerPath]: todoApi.reducer,
};
