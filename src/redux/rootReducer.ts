import { combineReducers } from 'redux';
import { apiReducers } from './apiReducer';
import { auth } from './slices/auth/auth';
export const rootReducer = combineReducers({
  auth,
  ...apiReducers,
});
