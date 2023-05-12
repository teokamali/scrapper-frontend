import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthenticationSliceState, IUser } from './authType';

const initialState: IAuthenticationSliceState = {
  user: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    updateAuthState: (
      state,
      action: PayloadAction<IAuthenticationSliceState>,
    ) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    updateUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = initialState.user;
      state.accessToken = initialState.accessToken;
    },
  },
});

export const { updateAuthState, logoutUser, updateUser } = authSlice.actions;

export const auth = authSlice.reducer;
