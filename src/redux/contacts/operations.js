import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(
        'Oops... Something went wrong. Reload page and try again.'
      );
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/contacts/`, user);
      Notiflix.Notify.success('Contact has been added to your book.');

      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(
        'Oops... Something went wrong. Reload page and try again.'
      );

      return rejectWithValue(
        'Oops... Something went wrong. Reload page and try again.'
      );
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${userId}`);
      Notiflix.Notify.success('Contacts has been deleted from your book.');

      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(
        'Oops... Something went wrong. Reload page and try again.'
      );

      return rejectWithValue(
        'Oops... Something went wrong. Reload page and try again.'
      );
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      Notiflix.Notify.success('Contact has been edited.');
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(
        'Oops... Something went wrong. Reload page and try again.'
      );
      return rejectWithValue(
        'Oops... Something went wrong. Reload page and try again'
      );
    }
  }
);
