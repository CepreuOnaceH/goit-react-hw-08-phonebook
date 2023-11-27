import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoadingAuthUser: false,
  isPending: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(operations.register.pending, state => {
        state.isPending = true;
      })
      .addCase(operations.register.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isPending = false;
      })
      .addCase(operations.register.rejected, state => {
        state.isPending = false;
      })
      .addCase(operations.logIn.pending, state => {
        state.isPending = true;
      })
      .addCase(operations.logIn.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isPending = false;
      })
      .addCase(operations.logIn.rejected, state => {
        state.isPending = false;
      })
      .addCase(operations.logOut.pending, state => {
        state.isPending = true;
      })
      .addCase(operations.logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isPending = false;
      })
      .addCase(operations.logOut.rejected, state => {
        state.isPending = false;
      })
      .addCase(operations.fetchCurrentUser.pending, state => {
        state.isLoadingAuthUser = true;
      })
      .addCase(operations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoadingAuthUser = false;
        state.isPending = false;
      })
      .addCase(operations.fetchCurrentUser.rejected, state => {
        state.isLoadingAuthUser = false;
        state.token = null;
        state.isPending = false;
      });
  },
});

export default authSlice.reducer;
