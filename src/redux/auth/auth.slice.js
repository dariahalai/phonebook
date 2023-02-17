import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';


import { authRegisterThunk, authLoginThunk, authLogOutThunk } from './auth.thunk';
import { STATUS } from 'constants/constants';

const authInitState = {
  values: null,
  token: null,
  isLoggedIn: false,
  status: STATUS.idle,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: builder => {
    builder
      .addCase(authRegisterThunk.pending, state => {
        state.status = STATUS.pending;
      })
      .addCase(authRegisterThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.values = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authRegisterThunk.rejected, state => {
        state.status = STATUS.error;
      })
      .addCase(authLoginThunk.pending, state => {
        state.status = STATUS.pending;
      })
      .addCase(authLoginThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.values = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authLoginThunk.rejected, state => {
        state.status = STATUS.error;
      })
      .addCase(authLogOutThunk.pending, state => {
        state.status = STATUS.pending;
      })
      .addCase(authLogOutThunk.fulfilled, (state) => {
        state.status = authInitState.status;
        state.values = authInitState.values;
        state.token = authInitState.token;
        state.isLoggedIn = authInitState.isLoggedIn;
      })
      .addCase(authLogOutThunk.rejected, state => {
        state.status = STATUS.error;
      })
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
