import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      token.set(data.token);
      Notiflix.Notify.success(
        'Registration succesfull. Welcome to phone book.'
      );
      return data;
    } catch (error) {
      Notiflix.Notify.failure(
        'Something went wrong. Please try again or log in.'
      );
      return rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', user);
      token.set(data.token);
      Notiflix.Notify.success(
        'Log in successfull. Welcome back to your phone book.'
      );
      return data;
    } catch (error) {
      Notiflix.Notify.failure(
        'Not valid email or password. Please, try again or register new account.'
      );
      return rejectWithValue('Not valid email or password. Please, try again.');
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
      Notiflix.Notify.success('Log out successfull.');
    } catch (error) {
      token.unset();
      return rejectWithValue(error.message);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const { token: currentToken } = getState().auth;

    if (currentToken === null) {
      return rejectWithValue('Without token');
    }

    token.set(currentToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      token.unset();
      return rejectWithValue(
        'Auth state is old. Please enter to your personal cabinet again.'
      );
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
